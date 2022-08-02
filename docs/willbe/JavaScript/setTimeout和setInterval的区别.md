---

# 设置作者
author: Avery
# 设置写作时间
date: 2022-07-25
# 一个页面可以有多个分类
category:
  - JavaScript
# 一个页面可以有多个标签
tag:
  - JavaScript
  - setTimeout
  - setInterval
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在首页的文章板块中
star: true
# 你可以自定义页脚
footer: 
---


# setTimeout和setInterval的区别

## setTimeout()定义和用法

setTimeout() 方法用于在指定的毫秒数后调用函数或计算[表达式](https://so.csdn.net/so/search?q=表达式&spm=1001.2101.3001.7020)。

setTimeout 方法接收两个参数，第一个参数为回调函数函数或[字符串](https://so.csdn.net/so/search?q=字符串&spm=1001.2101.3001.7020)，第二个参数为触发时间(单位：毫秒)。

```javascript
setTimeout(code, milliseconds, param1, param2, ...)
 
setTimeout(function, milliseconds, param1, param2, ...)
```

| 参数                | 描述                                                         |
| ------------------- | ------------------------------------------------------------ |
| code                | **必需**    要调用的函数后要执行的 JavaScript 代码串。       |
| millisec            | 可选    执行或调用 code/function 需要等待的时间，以毫秒计。默认为 0。 |
| param1, param2, ... | 可选    传给执行函数的其他参数（IE9 及其更早版本不支持该参数） |

**setTimeout只在指定时间后执行一次，代码如下：**

```js

<script>
    //定时器 异步运行
    function hello(){
        alert("hello world");
    }
    var t1 = window.setTimeout(hello,1000);//使用方法名字执行方法
    var t2 = window.setTimeout("hello()",3000);//使用字符串执行方法
    var t3 = window.setTimeout("alert('三秒钟已到')", 3000 )
    window.clearTimeout(t1);//去掉定时器
</script>

```

## setInterval()定义和用法

setInterval() 方法可按照指定的周期(以毫秒计)来调用函数或计算表达式。

setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。由 setInterval() 返回的 ID 值可用作 clearInterval() 方法的参数。

| 参数     | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| code     | **必需**    要调用的函数或要执行的代码串。                   |
| millisec | **必需**    周期性执行或调用 code 之间的时间间隔，以毫秒计。 |

```js
//实时刷新时间单位为毫秒
setInterval('fresh()',8000); 
```

## 销毁两种定时器方法：

```js
//清除Timeout的定时器,
传入id(创建定时器时会返回一个id) clearTimeout(i);
 
//清除Interval的定时器,
传入id(创建定时器时会返回一个id) clearInterval(j);
```



## settimeout和setinterval区别

1. setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式,而setInterval()则可以在每隔指定的毫秒数循环调用函数或表达式，直到clearInterval把它清除。
2. 也就是说setTimeout()只执行一次，setInterval()可以执行多次。
3. 两个函数的参数也相同，第一个参数是要执行的code或句柄，第二个是延迟的毫秒数。
   



## 动画requestAnimationFrame

requestAnimationFrame()的作用就是代替定时器做更加流畅高性能的动画，做可以匹配设备刷新率的动画，解决了定时器做动画间隔不稳定的问题

与setTimeout一样的是都会返回一个唯一标识，setTimeout可以通过clearTImeout()关闭定时器。那么requestAnimationFrame使用的就是`cancelAnimationFrame()`关闭动画。

```js
const box = document.querySelector('.box');
let move;
let timer = requestAnimationFrame(function fn() {
	move = parseInt(getComputedStyle(box).left);
	if (move < 800) {
		box.style.left = move + 8 + 'px';
		requestAnimationFrame(fn);
	} else {
		cancelAnimationFrame(timer);
	}
});
```

### 总结：

- requestAnimationFrame() 可以自动匹配设备帧率来展示动画（120帧就每秒执行120次）。
- 高性能且不会出现动画卡顿
- 会有游览器兼容问题