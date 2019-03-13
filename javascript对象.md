# 对象基础

# JavaScript面向对象
 * 面向对象编程(OOP)

# 对象原型
 * 基于原型的语言
    * JavaScript 常被描述为一种 **基于原型的语言** ———每个对象拥有一个原型方法，对象以其原型为模板、从原型继承方法和属性。
 * JavaScript中的原型
    * 每一个函数都有一个特殊的属性叫做原型( prototype )。( 每一个新的构造器默认有一个空的原型属性( 即Object.prototype ) )
 * 原型链
   * 原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。
   * 它解释了为何一个对象会拥有定义在其他对象中的属性和方法。
 * prototype 属性：继承成员被定义的地方
    * 继承的属性和方法是定义在 prototype 属性之上的———那些以 Object.prototype. 开头的属性，而非仅仅以 Object. 开头的属性。
    * prototype 属性是一个对象。

> **Note：** 准确说，这些属性和方法定义在 Object 的构造器函数 (constructor function) 之上的 prototype 属性上，而非对象实例本身。

> **Note：** 理解对象的原型( 可以通过 Object.getPrototypeOf( obj ) 或者已被弃用的 \_\_proto\_\_ 属性获得 ) 与构造函数的 prototype 属性之间的区别是很重要的。前者是每个实例上都有的属性，后者是构造函数的属性。也就是说，Object.getPrototypeOf( new Foobar() ) 和 Foobar.prototype 指向着同一个对象。

[详细链接](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes)

# 继承
 * 原型式的继承 [练习](./JavaScript实践/继承.html)

# JSON
 * 使用 JSON [练习](./JavaScript实践/JSON.html)

课程结束练习 
[碰撞小球](./JavaScript实践/弹跳小球.html)
[恶魔圆环](./JavaScript实践/恶魔圆环.html)
