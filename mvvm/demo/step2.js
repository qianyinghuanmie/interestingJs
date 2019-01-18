
Observer.prototype = {
  walk: function(data) {
    var me = this;
    Object.keys(data).forEach(function(key) {
      me.convert(key, data[key]);
    });
  },
  convert: function(key, val) {
    this.defineReactive(this.data, key, val);
  },

  defineReactive: function(data, key, val) {
    var dep = new Dep();
    var childObj = observe(val);

    Object.defineProperty(data, key, {
      enumerable: true, // 可枚举
      configurable: false, // 不能再define
      get: function() {
        if (Dep.target) {
          dep.depend();
        }
        return val;
      },
      set: function(newVal) {
        if (newVal === val) {
          return;
        }
        console.log('哈哈哈，监听到值变化了 ', val, ' --> ', newVal);
        val = newVal;
        // 新的值是object的话，进行监听
        childObj = observe(newVal);
        // 通知订阅者
        dep.notify();
      }
    });
  }
};

function Observer(data) {
  this.data = data;
  this.walk(data);
    console.log(this);
}


function observe(value, vm) {
  if (!value || typeof value !== 'object') {
    return;
  }

  return new Observer(value);
};


var uid = 0;

function Dep() {
  this.id = uid++;
  this.subs = [];
}

Dep.prototype = {
  addSub: function(sub) {
    this.subs.push(sub);
  },

  depend: function() {
    Dep.target.addDep(this);
  },

  removeSub: function(sub) {
    var index = this.subs.indexOf(sub);
    if (index != -1) {
      this.subs.splice(index, 1);
    }
  },

  notify: function() {
    this.subs.forEach(function(sub) {
      sub.update();
    });
  }
};
Dep.target = null;


var data = {
  name: 'kindeng'
};
observe(data);
data.name = 'dmq'; // 哈哈哈，监听到值变化了 kindeng --> dmq
data.name = '1'; // 哈哈哈，监听到值变化了 kindeng --> dmq
data.name = '2'; // 哈哈哈，监听到值变化了 kindeng --> dmq
data.name = '3'; // 哈哈哈，监听到值变化了 kindeng --> dmq
data.name = '4'; // 哈哈哈，监听到值变化了 kindeng --> dmq
