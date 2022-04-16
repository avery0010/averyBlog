(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{574:function(v,a,t){"use strict";t.r(a);var _=t(9),r=Object(_.a)({},(function(){var v=this,a=v.$createElement,t=v._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("我是JavaPub，专注于面试、副业，技术人的成长记录。")]),v._v(" "),t("p",[v._v("以下是 JVM 面试题，相信大家都会有种及眼熟又陌生的感觉、看过可能在短暂的面试后又马上忘记了。"),t("strong",[v._v("JavaPub")]),v._v("在这里整理这些容易忘记的重点知识及"),t("strong",[v._v("解答")]),v._v("，"),t("code",[v._v("建议收藏，经常温习查阅")]),v._v("。")]),v._v(" "),t("p",[v._v("评论区见")]),v._v(" "),t("p",[v._v("@[toc]")]),v._v(" "),t("h1",{attrs:{id:"jvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm"}},[v._v("#")]),v._v(" JVM")]),v._v(" "),t("p",[v._v("基于JDK8")]),v._v(" "),t("h2",{attrs:{id:"_1-说一说jvm的主要组成部分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-说一说jvm的主要组成部分"}},[v._v("#")]),v._v(" 1. 说一说JVM的主要组成部分")]),v._v(" "),t("p",[v._v("点击放大看，一图胜千文")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://tvax1.sinaimg.cn/large/007F3CC8ly1h11l1b6ykaj30x50kl46x.jpg",alt:"image"}})]),v._v(" "),t("ul",[t("li",[t("p",[v._v("方法区和堆是所有线程共享的内存区域；而虚拟机栈、本地方法栈和程序计数器的运行是线程私有的内存区域，运行时数据区域就是我们常说的JVM的内存。")])]),v._v(" "),t("li",[t("p",[v._v("类加载子系统：根据给定的全限定名类名(如：java.lang.Object)来装载class文件到运行时数据区中的方法区中。")])]),v._v(" "),t("li",[t("p",[v._v("Java堆是Java虚拟机所管理的内存中最大的一块，也是垃圾回收的主要区域。Java堆是被所有线程共享的一块内存区域，在虚拟机启动时创建。此内存区域的唯一目的就是存放对象实例，几乎所有的对象实例都在这里分配内存。")])]),v._v(" "),t("li",[t("p",[v._v("方法区与Java堆一样，是各个线程共享的内存区域，它用于存储已被虚拟机加载的类信息、常量、静态变量、即时编译器编译后的代码等数据。")])]),v._v(" "),t("li",[t("p",[v._v("程序计数器是一块较小的内存空间，它的作用可以看做是当前线程所执行的字节码的行号指示器，用来指示执行引擎下一条执行指令的地址。")])]),v._v(" "),t("li",[t("p",[v._v("Java虚拟机栈也是线程私有的，它的生命周期与线程相同。虚拟机栈描述的是Java方法执行的内存模型：每个方法被执行的时候都会同时创建一个栈帧（Stack Frame）用于存储局部变量表、操作数栈、动态链接、返回方法地址等信息。每一个方法被调用直至执行完成的过程，就对应着一个栈帧在虚拟机栈中从入栈到出栈的过程。")])]),v._v(" "),t("li",[t("p",[v._v("本地方法栈（Native Method Stacks）,本地方法栈（Native Method Stacks）与虚拟机栈所发挥的作用是非常相似的，其区别不过是虚拟机栈为虚拟机执行Java方法（也就是字节码）服务，而本地方法栈则是为虚拟机使用到的Native方法服务。")])]),v._v(" "),t("li",[t("p",[v._v("执行引擎：根据程序计数器中存储的指令地址执行classes中的指令。")])]),v._v(" "),t("li",[t("p",[v._v("本地接口：与本地方法库交互，是其它编程语言交互的接口。")])])]),v._v(" "),t("h2",{attrs:{id:"_2-说一下-jvm-的作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-说一下-jvm-的作用"}},[v._v("#")]),v._v(" 2. 说一下 JVM 的作用？")]),v._v(" "),t("p",[v._v("首先通过编译器把 Java 代码转换成字节码，类加载器（ClassLoader）再把字节码加载到内存中，将其放在运行时数据区（Runtime data area）的方法区内，而字节码文件只是 JVM 的一套指令集规范，并不能直接交给底层操作系统去执行，因此需要特定的命令解析器执行引擎（Execution Engine），将字节码翻译成底层系统指令，再交由 CPU 去执行，而这个过程中需要调用其他语言的本地库接口（Native Interface）来实现整个程序的功能。")]),v._v(" "),t("h2",{attrs:{id:"_3-说一下堆栈的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-说一下堆栈的区别"}},[v._v("#")]),v._v(" 3. 说一下堆栈的区别？")]),v._v(" "),t("p",[t("strong",[v._v("物理地址")])]),v._v(" "),t("p",[v._v("堆的物理地址分配对象是不连续的。因此性能慢些。在GC的时候也要考虑到不连续的分配，所以有各种算法。比如，标记-消除，复制，标记-压缩，分代（即新生代使用复制算法，老年代使用标记——压缩）")]),v._v(" "),t("p",[v._v("栈使用的是数据结构中的栈，先进后出的原则，物理地址分配是连续的。所以性能快。")]),v._v(" "),t("p",[t("strong",[v._v("内存分别")])]),v._v(" "),t("p",[v._v("堆因为是不连续的，所以分配的内存是在运行期确认的，因此大小不固定。一般堆大小远远大于栈。")]),v._v(" "),t("p",[v._v("栈是连续的，所以分配的内存大小要在编译期就确认，大小是固定的。")]),v._v(" "),t("p",[t("strong",[v._v("存放的内容")])]),v._v(" "),t("p",[v._v("堆存放的是对象的实例和数组。因此该区更关注的是数据的存储")]),v._v(" "),t("p",[v._v("栈存放：局部变量，操作数栈，返回结果。该区更关注的是程序方法的执行。")]),v._v(" "),t("p",[t("strong",[v._v("PS：")])]),v._v(" "),t("p",[v._v("静态变量放在方法区\n静态的对象还是放在堆。\n程序的可见度")]),v._v(" "),t("p",[v._v("堆对于整个应用程序都是共享、可见的。")]),v._v(" "),t("p",[v._v("栈只对于线程是可见的。所以也是线程私有。他的生命周期和线程相同。")]),v._v(" "),t("h2",{attrs:{id:"_4-java内存泄漏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-java内存泄漏"}},[v._v("#")]),v._v(" 4. Java内存泄漏")]),v._v(" "),t("p",[v._v("内存泄漏是指不再被使用的对象或者变量一直被占据在内存中。")]),v._v(" "),t("p",[v._v("严格来说，只有对象不会再被程序用到了，但是GC又不能回收他们的情况，才叫内存泄漏。")]),v._v(" "),t("p",[v._v("理论上来说，Java是有GC垃圾回收机制的，也就是说，不再被使用的对象，会被GC自动回收掉，自动从内存中清除。")]),v._v(" "),t("p",[v._v("但是，即使这样，Java也还是存在着内存泄漏的情况，java导致内存泄露的原因很明确：长生命周期的对象持有短生命周期对象的引用就很可能发生内存泄露，尽管短生命周期对象已经不再需要，但是因为长生命周期对象持有它的引用而导致不能被回收，这就是java中内存泄露的发生场景。")]),v._v(" "),t("h2",{attrs:{id:"_5-jvm-有哪些垃圾回收算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-jvm-有哪些垃圾回收算法"}},[v._v("#")]),v._v(" 5. JVM 有哪些垃圾回收算法？")]),v._v(" "),t("ul",[t("li",[v._v("标记-清除算法：标记有用对象，然后进行清除回收。缺点：效率不高，无法清除垃圾碎片。")]),v._v(" "),t("li",[v._v("复制算法：按照容量划分二个大小相等的内存区域，当一块用完的时候将活着的对象复制到另一块上，然后再把已使用的内存空间一次清理掉。缺点：内存使用率不高，只有原来的一半，消耗内存。")]),v._v(" "),t("li",[v._v("标记-整理算法：标记无用对象，让所有存活的对象都向一端移动，然后直接清除掉端边界以外的内存。")]),v._v(" "),t("li",[v._v("分代算法：根据对象存活周期的不同将内存划分为几块，一般是新生代和老年代，新生代基本采用复制算法，老年代采用标记整理算法。")])]),v._v(" "),t("h2",{attrs:{id:"_6-说一下-jvm-有哪些垃圾回收器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-说一下-jvm-有哪些垃圾回收器"}},[v._v("#")]),v._v(" 6. 说一下 JVM 有哪些垃圾回收器？")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://tva2.sinaimg.cn/large/007F3CC8ly1h11l1p8888j30te07oacq.jpg",alt:"image"}})]),v._v(" "),t("p",[t("img",{attrs:{src:"https://tvax1.sinaimg.cn/large/007F3CC8ly1h11l1ykqpsj30vx08o14v.jpg",alt:"image"}})]),v._v(" "),t("h2",{attrs:{id:"_7-说一下类加载的执行过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-说一下类加载的执行过程"}},[v._v("#")]),v._v(" 7. 说一下类加载的执行过程？")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("加载")]),v._v("：根据查找路径找到相应的 class 文件然后装载入内存中；")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://tvax2.sinaimg.cn/large/007F3CC8ly1h11l29871ij30is07h76f.jpg",alt:"image"}})]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("验证")]),v._v("：检查加载的 class 文件的正确性；")]),v._v(" "),t("li",[t("strong",[v._v("准备")]),v._v("：给类中的静态变量分配内存空间；")]),v._v(" "),t("li",[t("strong",[v._v("解析")]),v._v("：虚拟机将常量池中的符号引用替换成直接引用的过程。符号引用就理解为一个标示，而在直接引用直接指向内存中的地址；")]),v._v(" "),t("li",[t("strong",[v._v("初始化")]),v._v("：对静态变量和静态代码块执行初始化工作。")])]),v._v(" "),t("hr"),v._v(" "),t("h2",{attrs:{id:"_8-什么是双亲委派模型-为什么要使用双亲委派模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-什么是双亲委派模型-为什么要使用双亲委派模型"}},[v._v("#")]),v._v(" 8. 什么是双亲委派模型？为什么要使用双亲委派模型？")]),v._v(" "),t("p",[t("strong",[v._v("什么是双亲委派模型")])]),v._v(" "),t("ul",[t("li",[v._v("当需要加载一个类的时候，子类加载器并不会马上去加载，而是依次去请求父类加载器加载")]),v._v(" "),t("li",[v._v("如果父类加载器还存在其父类加载器，则进一步向上委托，依次递归，请求最终将到达顶层的启动类加载器；")]),v._v(" "),t("li",[v._v("如果父类加载器可以完成类加载任务，就成功返回，倘若父类加载器无法完成此加载任务，子加载器才会尝试自己去加载，这就是双亲委派模式。")])]),v._v(" "),t("p",[t("strong",[v._v("为什么要使用双亲委派模型")])]),v._v(" "),t("p",[v._v("可以防止内存中出现多份同样的字节码，如果没有双亲委派模型而是由各个类加载器自行加载的话，如果用户编写了一个java.lang.Object的同名类并放在ClassPath中，多个类加载器都去加载这个类到内存中，系统中将会出现多个不同的Object类，那么类之间的比较结果及类的唯一性将无法保证，而且如果不使用这种双亲委派模型将会给虚拟机的安全带来隐患。所以，要让类对象进行比较有意义，前提是他们要被同一个类加载器加载。")]),v._v(" "),t("h2",{attrs:{id:"_9-cms垃圾清理的过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-cms垃圾清理的过程"}},[v._v("#")]),v._v(" 9. CMS垃圾清理的过程")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://tva4.sinaimg.cn/large/007F3CC8ly1h11l2qpppoj30se08sgq4.jpg",alt:"image"}})]),v._v(" "),t("p",[v._v("CMS整个过程比之前的收集器要复杂，整个过程分为4个主要阶段，即初始标记阶段、并发标记阶段、重新标记阶段和并发清除阶段。(涉及STW的阶段主要是：初始标记 和 重新标记 stop-the-world)")]),v._v(" "),t("ul",[t("li",[t("p",[t("strong",[v._v("初始标记")]),v._v("（Initial-Mark）阶段：在这个阶段中，程序中所有的工作线程都将会因为“stop-the-world”机制而出现短暂的暂停，这个阶段的主要任务仅仅只是标记出 GC Roots 能直接关联到的对象。一旦标记完成之后就会恢复之前被暂停的所有应用线程。由于直接关联对象比较小，所以这里的速度非常快。")])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("并发标记")]),v._v("（Concurrent-Mark）阶段：从 Gc Roots 的直接关联对象开始遍历整个对象图的过程，这个过程耗时较长但是不需要停顿用户线程，可以与垃圾收集线程一起并发运行。")])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("重新标记")]),v._v("（Remark）阶段：由于在并发标记阶段中，程序的工作线程会和垃圾收集线程同时运行或者交叉运行，因此为了修正并发标记期间，因用户程序继续运作而导致标记产生变动的那一部分对象的标记记录，这个阶段的停顿时间通常会比初始标记阶段稍长一些，但也远比并发标记阶段的时间短。")])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("并发清除")]),v._v("（Concurrent-Sweep）阶段：此阶段清理删除掉标记阶段判断的已经死亡的对象，释放内存空间。由于不需要移动存活对象，所以这个阶段也是可以与用户线程同时并发的")])])]),v._v(" "),t("h2",{attrs:{id:"_10-常用的-jvm-调优的参数都有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-常用的-jvm-调优的参数都有哪些"}},[v._v("#")]),v._v(" 10. 常用的 JVM 调优的参数都有哪些？")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://tvax1.sinaimg.cn/large/007F3CC8ly1h11l35h3jfj30pd097764.jpg",alt:"image"}})]),v._v(" "),t("ul",[t("li",[v._v("-XX:NewRatio=4：设置年轻的和老年代的内存比例为 1:4；")]),v._v(" "),t("li",[v._v("-XX:SurvivorRatio=8：设置新生代 Eden 和 Survivor 比例为 8:2；")]),v._v(" "),t("li",[v._v("–XX:+UseParNewGC：指定使用 ParNew + Serial Old 垃圾回收器组合；")]),v._v(" "),t("li",[v._v("-XX:+UseParallelOldGC：指定使用 ParNew + ParNew Old 垃圾回收器组合；")]),v._v(" "),t("li",[v._v("-XX:+UseConcMarkSweepGC：指定使用 CMS + Serial Old 垃圾回收器组合；")]),v._v(" "),t("li",[v._v("-XX:+PrintGC：开启打印 gc 信息；")]),v._v(" "),t("li",[v._v("-XX:+PrintGCDetails：打印 gc 详细信息。")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://tvax4.sinaimg.cn/large/007F3CC8ly1h11l3rzpgsj30mb0883ze.jpg",alt:"image"}})]),v._v(" "),t("p",[v._v("JVM 调优-这个问题单独一篇")]),v._v(" "),t("hr"),v._v(" "),t("h2",{attrs:{id:"系列文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系列文章"}},[v._v("#")]),v._v(" 系列文章")]),v._v(" "),t("p",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/3Nviyml0cvnX_HHkZ5DjWg",target:"_blank",rel:"noopener noreferrer"}},[v._v("【Java基础】10道不得不会的Java基础面试题"),t("OutboundLink")],1)]),v._v(" "),t("p",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/h2tTwDVqL15rCI6rftgn9A",target:"_blank",rel:"noopener noreferrer"}},[v._v("【Java并发】10道不得不会的Java并发基础面试题"),t("OutboundLink")],1)]),v._v(" "),t("p",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/yVPwCoSQ-8OYvhw8bH0PtA",target:"_blank",rel:"noopener noreferrer"}},[v._v("【MySQL】10道不得不会的MySQL基础面试题"),t("OutboundLink")],1)]),v._v(" "),t("p",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/z3D37HqeTUmwrdheUL_Efw",target:"_blank",rel:"noopener noreferrer"}},[v._v("【ElasticSearch】10道不得不会的ElasticSearch面试题"),t("OutboundLink")],1)]),v._v(" "),t("p",[t("a",{attrs:{href:"https://gitee.com/rodert/JavaPub",target:"_blank",rel:"noopener noreferrer"}},[v._v("【JVM】10道不得不会的JVM面试题"),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);