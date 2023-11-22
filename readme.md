# wxml2html

NodeJS端将微信小程序wxml格式转html格式工具

# Usage

```javascript
const wxml2html = require('wxml2html');

const wxml = `<view class="container"><text class="text" style="color:red;">Hello World</text></view>`

const html = wxml2html(wxml);
console.log(html);

// <div class="container"><span class="text" style="color:red;">Hello World</span></div>`
```
