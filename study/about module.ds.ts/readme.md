# 关于声明文件

## Library Structures

从广义上讲，构造声明文件的方式取决于库的使用方式。有很多方法可以在JavaScript中提供供消费的库，你需要编写你的声明文件来匹配它。
本指南介绍了如何识别公共库模式，以及如何编写与该模式对应的声明文件。

### 全局作用域的库

全局作用域的库是指可以在全局作用里访问其变量的库（例如不需要import方式就可以访问的库）。这些库会暴露出一个或多个全局变量供使用。例如你使用Jquery，那么全局变量`$`应该可以直接被使用，如下：

```js
$(() => {console.log('hello world');});
```

您通常会在全局库的文档中看到如何在HTML脚本标记中使用库的指导：

``` html
<script src="http://a.great.cdn.for/someLib.js"></script>
```

如今，大多数流程的全局作用域的库都实际上使用UMD的方式编写的。UMD库文档很难与全局库文档区区分开来。在编写全局声明文件之前，请确保该库实际上不是UMD。