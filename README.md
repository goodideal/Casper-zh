# Casper

这是一份Casper中文本地化主题。

### 特色

- 本地字符串
- 中国社交分享
- 统计展示功能
- Markdown评论系统
- Prism.js语法高亮
- 图片放大展示
- ...

### 使用方法

请打开`[path to]/conten/themes/casper/assets/config.js`文件进行配置：

```javascript
var casper = {
    // String 微博链接
    weibo: "",
    // String QQ号码
    qq: "",
    // Boolean 百度推送
    bdPush: true,
    // String 百度统计ID
    bdhmt: "",
    // String 页脚百度统计链接 例如：https://tongji.baidu.com/web/10921506/overview/index?siteId=12616599
    footerBdhmt: "",
    // String 备案号 例如：苏ICP备15050739号-4
    footerBA1: "",
    // String 备案号 例如：苏公网安备32010402000196号
    footerBA2: "",
    // String 网站描述
    myDescription: "永远年轻，永远热泪盈眶",

    // Boolean 是否开启valine评论支持
    valine: true,
    // String 参考：https://valine.js.org/quickstart.html#%E8%8E%B7%E5%8F%96APP-ID-%E5%92%8C-APP-Key
    valineAppId: "",
    // String 参考：https://valine.js.org/quickstart.html#%E8%8E%B7%E5%8F%96APP-ID-%E5%92%8C-APP-Key
    valineAppKey: "",
    // Boolean 评论回复邮件提醒 参考：https://valine.js.org/notify.html
    valineNotify: false,
    // Boolean 验证码服务
    valineVerify: false,
    // String 评论框占位提示符
    valinePlaceholder: "支持Markdown评论",

    // Boolean Prism语法高亮
    prism: true,
    // Boolean Prism 展示行号
    prismLineNumbers: true,
    // Boolean Prism 展示语法类型
    prismShowLanguage: true,
    // Boolean Prism 粘贴剪切板
    prismCopy: true,

    // Boolean 图箱
    mediumZoom: true,
};
```

