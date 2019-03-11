# 条件语句

* 比较运算符
    * 返回 false ：false, undefined, null, 0, NaN, ''(空字符串)

* && — 逻辑与; 两个过多个表达式，只有所有表达式都为 true , 整个表达式才返回 true

* || — 逻辑或; 两个或多个表达式中有一个为 true , 整个表达式为 true

* ! — 逻辑非; 对一个布尔值取反，非 true 返回 false，非 false 返回 true

### 课后习题 
[简单日历](./JavaScrip实践/简单日历.html)
 
[主题颜色选择](./JavaScript实践/颜色选择.html)

# 循环语句
* for 循环
* while 循环和 do...while 循环
* break 退出循环
* continune 跳过当前循环继续下一个循环

课后习题 
[倒计时](./JavaScript实践/倒计时.html)
[来宾列表](./JavaScript实践/来宾列表.html)

# 函数
* 自定义函数
* 匿名函数
* 函数作用域
[小练习1](./JavaScript实践/自定义函数.html)
[小练习2](./JavaScript实践/函数返回值.html)

# 事件介绍

* [小练习1](./JavaScript实践/16个方块.html)

* 组织默认行为
    * preventDefault()

* 对事件冒泡和捕捉的解释
    * stopPropagation()

    > #### 捕获阶段
    >  * 浏览器检查元素的最外层祖先 \<html\>，是否在捕获阶段中注册了要给 onclick 事件处理程序，如果是，则运行它。
    > * 然后，它移动到 \<html\> 中单击元素的下一个祖先元素，并执行相同的操作，然后是单击元素的再一个祖先元素，依此类推，直到到达实际点击的元素。
    > #### 冒泡阶段
    > * 浏览器检查实际点击的元素是否在冒泡阶段中注册了一个 onclick 事件处理程序，如果是，运行它。
    > * 然后，它移动到下一个直接的祖先元素，并作同样的事情，然后是下一个，等等，直到它到达 \<html\> 元素。
    ![](./img/bubbling-capturing.png)

本章结束习题
[照片库](./JavaScript实践/照片库)
