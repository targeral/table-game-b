# js

## 为什么`typeof Symbol`返回的是 'function'，为什么不能`new Symbol()`

因为Symbol是产生symbol类型值的函数 `typeof Symbol` 返回的是'function'，由于symbol类型是原始类型，不是对象，所以无法通过new的方式生成。（MDN上说Symbol函数作为构造函数不完整，所以它不支持语法“new Symbol（））

## 关于表达式和语句

https://juejin.im/entry/59a5bc106fb9a0248228cb42