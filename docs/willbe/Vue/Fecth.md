---

# 设置作者
author: Avery
# 设置写作时间
date: 2022-07-19
# 一个页面可以有多个分类
category:
  - Vue
# 一个页面可以有多个标签
tag:
  - Vue
  - Fetch
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在首页的文章板块中
star: true
# 你可以自定义页脚
footer: 
---
# 使用Fetch

[Fetch API](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API) 提供了一个 JavaScript 接口，用于访问和操纵 HTTP 管道的一些具体部分，例如请求和响应。它还提供了一个全局 [`fetch()`](https://developer.mozilla.org/zh-CN/docs/Web/API/fetch) 方法，该方法提供了一种简单，合理的方式来跨网络异步获取资源。

这种功能以前是使用 [`XMLHttpRequest`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest) 实现的。Fetch 提供了一个更理想的替代方案，可以很容易地被其他技术使用，例如 [`Service Workers`](https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API)。Fetch 还提供了专门的逻辑空间来定义其他与 HTTP 相关的概念，例如 [CORS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS) 和 HTTP 的扩展。

`fetch`与`jQuery.ajax()`主要有以下的不同：

- 当接受到一个代表错误的HTTP状态码时，从`fecth`返回的Promise **不会被标记为reject**，即使响应的HTTP状态码是404或500，它会将Promise状态标记为resolve（如果响应的HTTP状态码不在200-299之间，则设置resolve返回值的 [`ok`](https://developer.mozilla.org/zh-CN/docs/Web/API/Response/ok) 属性为false）， **只有当网络故障或请求被阻止时，才会标记为reject**
- `fetch` **不会发送跨域cookie**，除非使用了 *credentials* 的[初始化选项](https://developer.mozilla.org/zh-CN/docs/Web/API/fetch#参数)。（默认的credentials变更为 `same-origin` ）