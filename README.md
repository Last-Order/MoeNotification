# MoeNotification
自用前端通知组件

轻量级！

还没写完呢……

------

##用法##

引入jQuery

引入MoeNotification.js和MoeNotification.css

```
nya = new MoeNotification();
nya.create.success(text,callback(optional));//创建正常提示框
nya.create.warning(text,callback(optional));//创建警告提示框
nya.create.error(text,callback(optional));//创建错误提示框
nya.empty(func(optional));
//清空提示框 若给定指定函数 将用给定函数处理所有提示框
nya.empty(slideLeft);
//slideLeft是内置的一个函数 效果是向左滑出屏幕
```
