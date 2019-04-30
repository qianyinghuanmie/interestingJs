<h1>
  es6笔记
</h1>

## 常用的一些es6语法

---

- [proxy](#proxy)
+ [promise](#promise)
* [箭头函数](#箭头函数)
- [Classes](#classes)
+ [async](#async)
* [await](#await)
- [symbol](#symbol)
+ [yield](#yield)
* [function*](#function*)
- [reflect](#reflect)
+ [fetch*](#fetch*)

### proxy

*Proxy 对象用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等）*`
```
let p = new Proxy(target, handler);
```
- target:用Proxy包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
+ handler:一个对象，其属性是当执行一个操作时定义代理的行为的函数

```
let handler = {
    get: function(target, name){
        return name in target ? target[name] : 37;
    }
};

let p = new Proxy({}, handler);

p.a = 1;
p.b = undefined;

console.log(p.a, p.b);    // 1, undefined

console.log('c' in p, p.c);    // false, 37
```
*无操作转发代理*`
```
let target = {};
let p = new Proxy(target, {});

p.a = 37;   // 操作转发到目标

console.log(target.a);    // 37. 操作已经被正确地转发
```
*验证(通过代理，你可以轻松地验证向一个对象的传值。)*`
```
let validator = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer');
      }
      if (value > 200) {
        throw new RangeError('The age seems invalid');
      }
    }

    // The default behavior to store the value
    obj[prop] = value;
  }
};

let person = new Proxy({}, validator);

person.age = 100;

console.log(person.age);
// 100

person.age = 'young';
// 抛出异常: Uncaught TypeError: The age is not an integer

person.age = 300;
// 抛出异常: Uncaught RangeError: The age seems invalid
```

*扩展构造函数(方法代理可以轻松地通过一个新构造函数来扩展一个已有的构造函数。这个例子使用了construct和apply。)*`

```
function extend(sup,base) {
  var descriptor = Object.getOwnPropertyDescriptor(
    base.prototype,"constructor"
  );
  base.prototype = Object.create(sup.prototype);
  var handler = {
    construct: function(target, args) {
      var obj = Object.create(base.prototype);
      this.apply(target,obj,args);
      return obj;
    },
    apply: function(target, that, args) {
      sup.apply(that,args);
      base.apply(that,args);
    }
  };
  var proxy = new Proxy(base,handler);
  descriptor.value = proxy;
  Object.defineProperty(base.prototype, "constructor", descriptor);
  return proxy;
}

var Person = function(name){
  this.name = name
};

var Boy = extend(Person, function(name, age) {
  this.age = age;
});

Boy.prototype.sex = "M";

var Peter = new Boy("Peter", 13);
console.log(Peter.sex);  // "M"
console.log(Peter.name); // "Peter"
console.log(Peter.age);  // 13
```
*操作 DOM 节点(有时你希望切换两个不同的元素的属性或类名。下面展示了如何使用 set)*`
```
let view = new Proxy({
  selected: null
},
{
  set: function(obj, prop, newval) {
    let oldval = obj[prop];

    if (prop === 'selected') {
      if (oldval) {
        oldval.setAttribute('aria-selected', 'false');
      }
      if (newval) {
        newval.setAttribute('aria-selected', 'true');
      }
    }

    // The default behavior to store the value
    obj[prop] = newval;
  }
});


let i1 = view.selected = document.getElementById('item-1');
console.log(i1.getAttribute('aria-selected')); // 'true'

let i2 = view.selected = document.getElementById('item-2');
console.log(i1.getAttribute('aria-selected')); // 'false'
console.log(i2.getAttribute('aria-selected')); // 'true'
```
*值修正及附加属性(以下products代理会计算传值并根据需要转换为数组。这个代理对象同时支持一个叫做 latestBrowser的附加属性，这个属性可以同时作为 getter 和 setter。)*`

```
let products = new Proxy({
  browsers: ['Internet Explorer', 'Netscape']
},
{
  get: function(obj, prop) {
    // 附加属性
    if (prop === 'latestBrowser') {
      return obj.browsers[obj.browsers.length - 1];
    }

    // 缺省行为是返回属性值
    return obj[prop];
  },
  set: function(obj, prop, value) {
    // 附加属性
    if (prop === 'latestBrowser') {
      obj.browsers.push(value);
      return;
    }

    // 如果不是数组则进行转换
    if (typeof value === 'string') {
      value = [value];
    }

    // 缺省行为是保存属性值
    obj[prop] = value;
  }
});

console.log(products.browsers); // ['Internet Explorer', 'Netscape']
products.browsers = 'Firefox'; // ?传入一个 string (错误地)
console.log(products.browsers); // ['Firefox'] <- ?没问题, ?得到的是一个 array

products.latestBrowser = 'Chrome';
console.log(products.browsers); // ['Firefox', 'Chrome']
console.log(products.latestBrowser); // 'Chrome'
通过属性查找数组中的特定对象节
以下代理为数组扩展了一些实用工具。可以看到，你可以灵活地“定义”属性，而不需要使用 Object.defineProperties方法。以下例子可以用于通过单元格来查找表格中的一行。在这种情况下，target 是table.rows。

let products = new Proxy([
  { name: 'Firefox', type: 'browser' },
  { name: 'SeaMonkey', type: 'browser' },
  { name: 'Thunderbird', type: 'mailer' }
],
{
  get: function(obj, prop) {
    // 缺省行为是返回属性值， prop ?通常是一个整数
    if (prop in obj) {
      return obj[prop];
    }

    // 获取 products 的 number; 它是 products.length 的别名
    if (prop === 'number') {
      return obj.length;
    }

    let result, types = {};

    for (let product of obj) {
      if (product.name === prop) {
        result = product;
      }
      if (types[product.type]) {
        types[product.type].push(product);
      } else {
        types[product.type] = [product];
      }
    }

    // 通过 name 获取 product
    if (result) {
      return result;
    }

    // 通过 type 获取 products
    if (prop in types) {
      return types[prop];
    }

    // 获取 product type
    if (prop === 'types') {
      return Object.keys(types);
    }

    return undefined;
  }
});

console.log(products[0]); // { name: 'Firefox', type: 'browser' }
console.log(products['Firefox']); // { name: 'Firefox', type: 'browser' }
console.log(products['Chrome']); // undefined
console.log(products.browser); // [{ name: 'Firefox', type: 'browser' }, { name: 'SeaMonkey', type: 'browser' }]
console.log(products.types); // ['browser', 'mailer']
console.log(products.number); // 3
```
*一个小框架：一个完整支持unicode的cookie读取/写入器(作为一个格式化过的字符串，cookie的值有时很难被自然地处理。下面的库的目的是通过定义一个和Storage对象部分一致的对象（docCookies），简化document.cookie 的获取方法。它提供完全的Unicode支持。)*`

```
/*
  var docCookies = ... get the "docCookies" object here:
  https://developer.mozilla.org/zh-CN/docs/DOM/document.cookie#A_little_framework.3A_a_complete_cookies_reader.2Fwriter_with_full_unicode_support
*/
var docCookies = new Proxy(docCookies, {
  "get": function (oTarget, sKey) {
    return oTarget[sKey] || oTarget.getItem(sKey) || undefined;
  },
  "set": function (oTarget, sKey, vValue) {
    if (sKey in oTarget) { return false; }
    return oTarget.setItem(sKey, vValue);
  },
  "deleteProperty": function (oTarget, sKey) {
    if (sKey in oTarget) { return false; }
    return oTarget.removeItem(sKey);
  },
  "enumerate": function (oTarget, sKey) {
    return oTarget.keys();
  },
  "ownKeys": function (oTarget, sKey) {
    return oTarget.keys();
  },
  "has": function (oTarget, sKey) {
    return sKey in oTarget || oTarget.hasItem(sKey);
  },
  "defineProperty": function (oTarget, sKey, oDesc) {
    if (oDesc && "value" in oDesc) { oTarget.setItem(sKey, oDesc.value); }
    return oTarget;
  },
  "getOwnPropertyDescriptor": function (oTarget, sKey) {
    var vValue = oTarget.getItem(sKey);
    return vValue ? {
      "value": vValue,
      "writable": true,
      "enumerable": true,
      "configurable": false
    } : undefined;
  },
});

/* Cookies 测试 */

alert(docCookies.my_cookie1 = "First value");
alert(docCookies.getItem("my_cookie1"));

docCookies.setItem("my_cookie1", "Changed value");
alert(docCookies.my_cookie1);
```
### promise

### 箭头函数

*箭头函数表达式的语法比函数表达式更简洁，并且没有自己的this，arguments，super或 new.target。这些函数表达式更适用于那些本来需要匿名函数的地方，并且它们不能用作构造函数。*`

```
(参数1, 参数2, …, 参数N) => { 函数声明 }

//相当于：(参数1, 参数2, …, 参数N) =>{ return 表达式; }

// 当只有一个参数时，圆括号是可选的：
(单一参数) => {函数声明}
单一参数 => {函数声明}

// 没有参数的函数应该写成一对圆括号。
() => {函数声明}
```

```
//加括号的函数体返回对象字面表达式：
参数=> ({foo: bar})

//支持剩余参数和默认参数
(参数1, 参数2, ...rest) => {函数声明}
(参数1 = 默认值1,参数2, …, 参数N = 默认值N) => {函数声明}

//同样支持参数列表解构
let f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
f();  // 6

```
### Classes
```
class Polygon {
  constructor() {
    this.name = "Polygon";
  }
}

var poly1 = new Polygon();
console.log(poly1.name);

```

```
class Square extends Polygon {
    constructor(length) {
        // 在这里, 它调用了父类的构造函数, 并将 lengths 提供给 Polygon 的"width"和"height"
        super(length, length);
        // 注意: 在派生类中, 必须先调用 super() 才能使用 "this"。
        // 忽略这个，将会导致一个引用错误。
        this.name = 'Square';
    }
    get area() {
        return this.height * this.width;
    }
    set area(value) {
        // 注意：不可使用 this.area = value
        // 否则会导致循环call setter方法导致爆栈
        this._area = value;
    }
}
```

### async
```
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
};

// async function expression assigned to a variable
var add1 = async function(x) {
  var a = await resolveAfter2Seconds(20);
  var b = await resolveAfter2Seconds(30);
  return x + a + b;
}

add1(10).then(v => {
  console.log(v);  // 4 秒后打印 60
})
//另一个例子
(async function(x) { // async function expression used as an IIFE
  var p_a = resolveAfter2Seconds(20);
  var p_b = resolveAfter2Seconds(30);
  return x + await p_a + await p_b;
})(10).then(v => {
  console.log(v);  // 2 秒后打印 60
});
```

### await
*await  操作符用于等待一个Promise 对象。它只能在异步函数 async function 中使用*`

```
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}
f1();

```

### symbol
*Symbol()函数会返回symbol类型的值,该类型具有静态属性和静态方法，是一种基本数据类型 （*`
```
Symbol("foo") === Symbol("foo"); // false
```

### yield
*yield 关键字用来暂停和恢复一个生成器函数（(function 或遗留的生成器函数）。*`
```
function* countAppleSales () {
  var saleList = [3, 7, 5];
  for (var i = 0; i < saleList.length; i++) {
    yield saleList[i];
  }
}
var appleStore = countAppleSales(); // Generator { }

console.log(appleStore.next());

```
### function*

*function*关键字可以在表达式内部定义一个生成器函数。*`

```
var x = function*(y) {
   yield y * y;
};
```
### reflect

*Reflect对象与Proxy对象一样，也是 ES6 为了操作对象而提供的新 API*`

### fetch

*Fetch API 提供了一个 JavaScript接口，用于访问和操纵HTTP管道的部分，例如请求和响应。它还提供了一个全局 fetch()方法，该方法提供了一种简单，合理的方式来跨网络异步获取资源。*`

```
fetch('http://example.com/movies.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
  
```
