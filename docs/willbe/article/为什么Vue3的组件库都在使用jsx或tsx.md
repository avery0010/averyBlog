---

# 设置作者
author: Avery
# 设置写作时间
date: 2022-07-11
# 一个页面可以有多个分类
category:
  - 零碎的文章
# 一个页面可以有多个标签
tag:
  - 零碎的文章
  - Vue3
  - jsx/tsx
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在首页的文章板块中
star: true
# 你可以自定义页脚
footer: 
---

# 为什么Vue3的组件库都在使用jsx或tsx

首先Vue3出现了composition API，optionsAPI与compositionAPI的区别如下：

Vue2使用的是optionsAPI来定义一个组件内部的属性如method、data等，但是在项目中如果想实现一个功能，可能会在method、computed等书写逻辑，就会使后面维护的时候难寻找到这个功能的逻辑，所以出现了compositionAPI，将同一个功能的api统一放到一个地方，这样的话开发和维护就简便了很多。

对于JSX和template，在业务场景下尽量选择template。Vue3基于template分析做了很多优化，并且对使用者是透明的，编译器默默完成优化操作，而使用JSX的话需要手动进行一些优化操作，比如提取静态的JSX片段到render函数外部。而组件库的代码一般比业务代码具有更强的动态性，使用JSX可以灵活控制动态DOM片段。

举个例子，假设有一个场景，需要根据 props 上的 reverse 属性，来决定是否要调换两块内容的渲染顺序。

在 JSX 中可以很容易实现：

```jsx
const renderContent = () => {
  const Content = [
    <div class="foo">Foo DOM...</div>,
    <div class="bar">Bar DOM...</div>,
  ];
  if (props.reverse) {
    Content.reverse();
  }
  return <div>{Content}</div>;
}
```

如果通过模板来实现，在不抽象子组件的情况下，foo 和 bar 的模板结构需要重复写两遍，才能满足这个需求：

```jsx
<template>
  <div>
    <template v-if="reverse">
      <div class="bar">Bar DOM...</div>
      <div class="foo">Foo DOM...</div>
    </template>
    <template v-else>
      <div class="foo">Foo DOM...</div>
      <div class="bar">Bar DOM...</div>
    </template>
  </div>
</template>
```

`JSX` 是 `JavaScript` 的扩展语法，这种 `<></>` 标签的写法就是 JSX。JSX 编写的组件通过预处理器 babel 解析后，再交给 React 库渲染到指定[父容器](https://www.zhihu.com/search?q=父容器&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A"419011328"})下，形成最终html页面，供浏览器解析和显示。

JSX的表达能力比template更强，JSX的表达上限是JS语言，而template表达能力的上限是Vue的各种指令。

JSX的好处之一是把组件或标签当作普通属性传来传去，而template只能使用slot。