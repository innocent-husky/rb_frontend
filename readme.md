react_blog个人练习的前端项目部分，使用`create-next-app`初始化
```bash
λ create-next-app rb_frontend
```
+ js包管理使用的是`yarn`，也可以选择`npm`，端看个人喜好
+ 开发ide工具选择的是`webstorm`，也可以选择`vscode`

> next.js支持css文件

根目录新建`next.config.js`文件，写入以下代码
```js
const withCss = require('@zeit/next-css');

if(typeof require !== 'undefined'){
    require.extensions['.css']=file=>{}
}

module.exports = withCss({})
```

