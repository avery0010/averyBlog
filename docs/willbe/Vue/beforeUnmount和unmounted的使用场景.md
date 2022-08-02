---

# 设置作者
author: Avery
# 设置写作时间
date: 2022-07-27
# 一个页面可以有多个分类
category:
  - Vue
# 一个页面可以有多个标签
tag:
  - Vue
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在首页的文章板块中
star: true
# 你可以自定义页脚
footer: 
---
# beforeUnmount和unmounted的使用场景

beforeUnmount发生在组件unmount之前，unmounted发生在组件unmount之后，而unmount函数做的事情，就是执行组件自身的一些清理逻辑，递归销毁子组件，进而把组件下面所有的DOM也全部移除了。

因此，当我们执行的beforeUnmount的时候，还是可以访问组件内部的DOM的，如果你的代码逻辑依赖DOM，那么必须在beforeUnmount钩子函数中执行。

此外，Vue.js只能在unmount函数中做一些自身的内存清理，而对于用户的一些自定义操作所占用的内存，是不会清理的

## 常见的应用场景

1. 定时器

   假设我们有一个计数组件，每秒加一，最简单的实现就是定义一个定时器，

   ```js
   export default {
     name: "",
     setup() {
       onMounted(() => {
         timer = setInterval(() => {
           count.value++;
         }, 1000);
       });
       
       return {
         count,
       };
     },
   };
   ```

   我们可以在unmount钩子函数里用setInterval函数创建了一个定时器timer，如果这个组件被销毁了，定时器是不会主动销毁的，也就造成了内存泄漏。可以在beforeUnmount或者在unmounted钩子函数中主动清理定时器

   ```
   unmounted(() => {
         clearInterval(timer);
       });
   ```

2. 全局注册事件

   有时候，需要在组件中监听某些全局事件

   我们在 `onMounted` 钩子函数里监听了全局的 `resize` 事件，当窗口大小改变的时候，就会执行事件函数 `onResize`，如果这个组件被销毁了，这个全局事件是不会主动解绑的。

   因此需要你在 `beforeUnmount` 或者 `unMounted` 钩子函数中主动解绑事件，如下：

   ```js
   setup() {
       onMounted(() => {
         window.removeEventListener("resize", onResize);
       });
       function onResize() {
         // 做一些 DOM 操作，数据更新等
       }
       beforeUnmount(() => {
         window.removeEventListener("resize", onResize);
         function onResize() {
           // 做一些 DOM 操作，数据更新等
         }
       });
   
       
       return {
         count,
       };
     },
   ```

   注意这里不能用匿名函数，因为 `addEventListener` 和 `removeEventListener` 监听的事件函数需要指向同一个函数指针。

3. 第三方库

   还有很多时候，我们会依赖一些第三方库辅助开发，而这些第三方库往往都会暴露一些 API 来做一些库内部的清理操作。

   比如我们在移动端常用的 BetterScroll，就提供了清理的 API，我们可以这么使用它：

   ```js
   export default function useScroll(wrapperRef, options) {  
   	const scroll = ref(null)  
   	onMounted(() => {    
   	scroll.value = new BScroll(wrapperRef.value, options)  
   	})  		
   	onUnmounted(() => {    
   	scroll.value.destroy()  })  
   	return scroll
   }
   ```

   为了独立 BetterScroll 的逻辑，我们定义了 useScroll 的 hook 函数，在这里我们仍然可以使用 Vue.js 提供的生命周期函数。

   由于 BetterScroll 的初始化依赖容器的 DOM，所以我们在 onMounted 内部执行它的初始化逻辑。相应的，这次我们在 onUnmounted 内部执行 BS 实例的 destory 方法，这样就避免了组件销毁后 BS 实例内部带来的内存泄漏。

## 总结

在大多数情况下，我们使用 beforeUnmount 或者 unmounted 钩子函数都可以执行一些清理逻辑，至于用什么在于你的清理逻辑中有没有依赖 DOM，如果不依赖那么两者皆可。
