<h1>
  es6笔记
</h1>

### 常用的一些es6语法

---

- proxy
+ promise
* 箭头函数
- Classes
+ promise
* 箭头函数

##### proxy
```

```

##### promise

##### 箭头函数

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
##### Classes
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
