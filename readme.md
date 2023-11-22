# wxml2html

NodeJS端将微信小程序wxml格式转html格式工具

## Usage

安装

```bash
npm i wxml2html
```

使用

```javascript
const wxml2html = require('wxml2html');

const wxml = `<view class="container" style="width: 300rpx; height: 300rpx"><image src="https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg" mode="scaleToFill" style="width: 100rpx; height: 100rpx" /></view>`

// params1: wxml字符串, params2: 设计稿尺寸
const html = wxml2html(wxml, 375);
console.log(html);

// <div class="container" style="width: 150px; height: 150px"><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg" style="object-fit: fill;width: 50px; height: 50px"></img></div>

```
