bone-stylus
===========

Stylus --> Css for [bone](https://github.com/wyicwx/bone)

### 安装及使用

通过npm安装

```sh
$ npm install bone-stylus
```
安装后在`bonefile.js`文件内通过`act()`加载

```js
var bone = require('bone');
var less = require('bone-stylus');

bone.dest('dist')
	.src('~/src/stylus/*.styl')
	.act(stylus);
```
传递参数(option对象)的调用方法

```js
bone.dest('dist')
	.src('~/src/stylus/*.styl')
	.act(stylus(option));
```

bone-less是将Stylus包装成bone可用的处理器，参数查询请参考 [Stylus](http://learnboost.github.io/stylus/)

### 其他

有关bone处理器开发以及使用请参考 [处理器](https://github.com/wyicwx/bone/blob/master/docs/plugin.md)

