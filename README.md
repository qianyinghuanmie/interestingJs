  # interestingJs
Some basic and interesting knowledge of JavaScript
- [webgl篇](https://github.com/qianyinghuanmie/interestingJs/tree/master/webgl)
- [canvas篇](https://github.com/qianyinghuanmie/interestingJs/tree/master/canvas)
- [svg篇](https://github.com/qianyinghuanmie/interestingJs/tree/master/svg)
- [animate篇](https://github.com/qianyinghuanmie/interestingJs/tree/master/animate)
- [mvvm篇](https://github.com/qianyinghuanmie/interestingJs/tree/master/mvvm)
- [node篇](https://github.com/qianyinghuanmie/interestingJs/tree/master/node)
- [es6篇](https://github.com/qianyinghuanmie/interestingJs/tree/master/es6)
- [我的博客](https://github.com/qianyinghuanmie/interestingJs/tree/master/blog)
- [webpack](webpack/README.md)
- 播放器篇
- 实践篇

### 前端体系方面知识点的梳理

参考 [一名【合格】前端工程师的自检清单](https://juejin.im/post/5cc1da82f265da036023b628)

图片来源 https://juejin.im/post/5cc1da82f265da036023b628

![自检图](/img/index-1.png)

#### 前端必备的(html,css,js)
  - [js](#js)
  - [css](#css)
  - [html](#html)
#### js

- es5

  参考《js高级程序的设计》

  1、变量

  2、函数

  3、面向对象

  4、数组

    一些常用的方法

    方法|描述
    --|:--:
    concat() | 连接两个或更多的数组，并返回结果
    copyWithin()|	从数组的指定位置拷贝元素到数组的另一个指定位置中。
    entries()|返回数组的可迭代对象。
    fill()|	使用一个固定值来填充数组。
    filter()|检测数值元素，并返回符合条件所有元素的数组。
    find()|	从数组的指定位置拷贝元素到数组的另一个指定位置中。
    findIndex()|返回符合传入测试（函数）条件的数组元素索引。
    forEach()|数组每个元素都执行一次回调函数。
    from()|	从数组的指定位置拷贝元素到数组的另一个指定位置中。
    includes()|	判断一个数组是否包含一个指定的值。
    indexOf()|搜索数组中的元素，并返回它所在的位置。
    indexOf()|搜索数组中的元素，并返回它所在的位置。
    isArray()|判断对象是否为数组。
    join()|把数组的所有元素放入一个字符串。
    keys()|返回数组的可迭代对象，包含原始数组的键(key)。
    lastIndexOf()|返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。
    map()|通过指定函数处理数组的每个元素，并返回处理后的数组。
    pop()|删除数组的最后一个元素并返回删除的元素。
    push()|向数组的末尾添加一个或更多元素，并返回新的长度。
    reduce()|将数组元素计算为一个值（从左到右）。
    reduceRight()|将数组元素计算为一个值（从右到左）。
    reverse()|反转数组的元素顺序。
    shift()|删除并返回数组的第一个元素。
    slice()|选取数组的的一部分，并返回一个新数组。
    some()|检测数组元素中是否有元素符合指定条件。
    sort()|对数组的元素进行排序。
    splice()|从数组中添加或删除元素。
    toString()|把数组转换为字符串，并返回结果。
    unshift()|向数组的开头添加一个或更多元素，并返回新的长度。
    valueOf()|返回数组对象的原始值。


  5、字符串

      一些常用的方法

   方法|描述
   --|:--:
   charAt() | 返回在指定位置的字符。
   charCodeAt()|	返回在指定的位置的字符的 Unicode 编码。
   concat()|连接两个或更多字符串，并返回新的字符串。
   fromCharCode()|将 Unicode 编码转为字符。
   indexOf()|返回某个指定的字符串值在字符串中首次出现的位置。
   includes()|查找字符串中是否包含指定的子字符串。
   lastIndexOf()|从后向前搜索字符串，并从起始位置（0）开始计算返回字符串最后出现的位置。
   match()|查找找到一个或多个正则表达式的匹配。
   repeat()|复制字符串指定次数，并将它们连接在一起返回。
   replace()|在字符串中查找匹配的子串，并替换与正则表达式匹配的子串。
   search()|查找与正则表达式相匹配的值。
   slice()|提取字符串的片断，并在新的字符串中返回被提取的部分。
   split()|把字符串分割为字符串数组。
   startsWith()|	查看字符串是否以指定的子字符串开头。
   substr()|从起始索引号提取字符串中指定数目的字符。
   substring()|返回在指定位置的字符。


  6、Bom

  7、Dom

  8、事件

  9、ajax请求等等

- es6篇

  参考[《ECMAScript 6 入门》](http://es6.ruanyifeng.com/)

  1、变量

    let const

  2、字符串的拓展

  3、数组的拓展

  4、对象的拓展

  5、set和map结构

  6、Promise对象

  7、async函数

  8、Class函数

    传送门：- [es6篇](https://github.com/qianyinghuanmie/interestingJs/tree/master/es6)

  #### css

  1、css3的一些新特性

  参考回答 [CSS3新特性的概述](https://segmentfault.com/a/1190000010936764)

      - 1.CSS3选择器
      - 2.CSS3边框与圆角
      - 3.CSS3背景与渐变
      - 4.CSS3过渡
      - 5.CSS3变换
      - 6.CSS3动画

  2、flex布局

  参考 [Flex 布局语法教程](https://www.runoob.com/w3cnote/flex-grammar.html)

  容器属性

  ```
      flex-direction
      flex-wrap
      flex-flow
      justify-content
      align-items
      align-content
  ```
  1、flex-direction属性决定主轴的方向（即项目的排列方向）
  ```
    flex-direction: row | row-reverse | column | column-reverse;
  ```
  2、flex-wrap属性 ，是否换行

  3、flex-flow，简写前两个属性
  ```
    flex-flow: <flex-direction> <flex-wrap>;
  ```
  4、justify-content属性,项目在主轴上的对齐方式。
  ```
    justify-content: flex-start | flex-end | center | space-between | space-around;
  ```
  5、align-items属性，定义项目在交叉轴上如何对齐。

  项目属性

  ```
      order
      flex-grow
      flex-shrink
      flex-basis
      flex
      align-self
  ```
  flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

  align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
  3、预处理css语言
