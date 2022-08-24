# 如何使用eslint和Prettier 对项目进行管理

## 什么是eslint

一个用来识别 ECMAScript/JavaScript 并且按照规则给出报告的代码检测工具（Stylelint、eslint、Prettier）

## 使用eslint的好处

- 可强制规范团队编码规范，让新旧组员编码习惯得到一致提升
- 可灵活定制团队编码风格，让预设规则符合新旧组员心理预期
- 增加项目代码的可维护性和可接入性，让新组员能快速适应项目的架构与需求
- 保障项目整体质量，可减少无用代码、重复代码、错误代码和漏洞代码的产生几率

（1）Prettier - Code formatter

![image-20220811211608055](C:%5CUsers%5Cluowanting%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220811211608055.png)

（2）eslint

![image-20220811211632890](C:%5CUsers%5Cluowanting%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220811211632890.png)

## 使用

eslint 使用 AST 去分析代码中的模式，AST（Abstract Syntax Tree - 抽象语法树）

#### eslint安装

```
# 安装eslint
npm install eslint --save-dev

# 初始化配置，eslint同时可作为命令行工具使用
./node_modules/.bin/eslint --init

# window如果无法运行上述命令，可尝试
"node_modules/.bin/eslint" --init 
```

### vite集成eslint

安装插件vite-plugin-eslint（[https://www.npmjs.com/package/vite-plugin-eslint](https://link.zhihu.com/?target=https%3A//www.npmjs.com/package/vite-plugin-eslint)），配置如下：

```
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [
     eslint({
                 include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
                 exclude: ['node_modules'],
                 cache:false
              })
           ]
})

```

#### eslint在项目中的目录文件

![image-20220811212339788](C:%5CUsers%5Cluowanting%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220811212339788.png)

##### 1  .eslintrc.js

```js
module.exports = {
  env: {
    // 执行环境
    browser: true,
    es2021: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['vue'],
  extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-mutating-props': 'off',
    'vue/no-v-html': 'off'
  }
}

```

##### 2  package.json

![image-20220811212523827](C:%5CUsers%5Cluowanting%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220811212523827.png)

![image-20220811212734772](C:%5CUsers%5Cluowanting%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220811212734772.png)

##### 3  prettier.config

```
module.exports = {
  printWidth: 80, // 每行最多多少个字符换行
  tabWidth: 2, // tab缩进大小
  useTabs: false, // tab缩进
  semi: false, // 使用分号
  singleQuote: true, // 单引号
  quoteProps: 'as-needed', // 对象字面值属性名称是否需要引号
  bracketSpacing: true, // 对象前后的空格
  trailingComma: 'none', // 未尾逗号
  jsxSingleQuote: false, // JSX 属性中一致使用单引号。
  arrowParens: 'avoid', // 箭头函数参数括号
  insertPragma: false, // 是否插入@format的特殊注释，标识该文件已被格式化
  requirePragma: false,
  proseWrap: 'never', // 针对折行敏感的渲染器（Github comment），是否折行
  htmlWhitespaceSensitivity: 'strict', // 是否空格敏感
  endOfLine: 'auto' // 设置统一的行结尾样式
}

```

### eslint配置

### 1.配置文件

eslint 支持以下几种格式的配置文件，如果同一目录下 .eslintrc 和 package.json 同时存在，.eslintrc 优先级高会被使用，package.json 文件将不会被使用：

- JavaScript - 使用 .eslintrc.js 然后输出一个配置对象。
- YAML - 使用 .eslintrc.yaml 或 .eslintrc.yml 去定义配置的结构。
- JSON - 使用 .eslintrc.json 去定义配置的结构，eslint 的 JSON 文件允许 JavaScript 风格的注释。
- (弃用) - 使用 .eslintrc，可以使 JSON 也可以是 YAML。
- package.json - 在 package.json 里创建一个 eslintConfig属性，在那里定义你的配置。

如果同一个目录下有多个配置文件，eslint 只会使用一个。优先级顺序如下：

- .eslintrc.js
- .eslintrc.yaml
- .eslintrc.yml
- .eslintrc.json
- .eslintrc
- package.json

eslint 还支持层叠配置，层叠配置使用离要检测的文件最近的 .eslintrc文件作为最高优先级，然后才是父目录里的配置文件：

默认情况下，eslint 会在所有父级目录里寻找配置文件，一直到根目录，子目录内的配置规则优先级高于父目录，与父目录规则冲突时将覆盖父目录的规则。

需要将 eslint 限制到一个特定的项目、目录时，可以在项目根目录下的 package.json 文件或者 .eslintrc.* 文件里的 eslintConfig 字段下设置 "root": true。eslint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。

#### 2.行内配置

- /*eslint-disable*/ 和 /*eslint-enable*/，禁用启用规则
- /*global*/，定义全局变量
- /*eslint*/，配置规则
- /*eslint-env*/，指定当前运行环境

#### 3.配置项

##### 3.1 root

root（布尔值），指定是否停止在父级目录寻找配置文件 。

##### 3.2 env

env用于启用特定环境的全局变量

```text
/** 启用特定环境的全局变量 */
env: {
  es6: true /** 启用除了modules以外的所有 EC6 特性,开启后会自动设置ecmaVersion为6 */,
      node: true /** Node.js 全局变量和 Node.js 作用域 */,
      browser: true /** 浏览器全局变量 */,
      commonjs: true /**  CommonJS 全局变量和 CommonJS 作用域 (用于 Browserify/WebPack 打包的只在浏览器中运行的代码) */,
      jest: false /** Jest 全局变量 */,
      jquery: false /** jQuery 全局变量 */,
      'shared-node-browser': false /** Node.js 和 Browser 通用全局变量 */,
      worker: false /** Web Workers 全局变量 */,
      amd: false /** 将 require() 和 define() 定义为像 amd 一样的全局变量 */,
      mocha: false /** 添加所有的 Mocha 测试全局变量 */,
      jasmine: false /** 添加所有的 Jasmine 版本 1.3 和 2.0 的测试全局变量。 */,
      phantomjs: false /** phantomjs 全局变量 */,
      protractor: false /** protractor 全局变量 */,
      qunit: false /** QUnit 全局变量 */,
      prototypejs: false /** Prototype.js 全局变量 */,
      shelljs: false /** ShellJS 全局变量 */,
      meteor: false /** Meteor 全局变量 */,
      mongo: false /** MongoDB 全局变量 */,
      applescript: false /** AppleScript 全局变量 */,
      nashorn: false /** Java 8 Nashorn 全局变量 */,
      serviceworker: false /** Service Worker 全局变量 */,
      atomtest: false /** Atom 测试全局变量 */,
      embertest: false /** Ember 测试全局变量 */,
      webextensions: false /** WebExtensions 全局变量 */,
      greasemonkey: false /** GreaseMonkey 全局变量 */,
}
```

#### 3.3 parserOptions

parserOptions用于设置解析器相关配置，可用选项如下：

- ecmaVersion - 默认设置为 3，5（默认）， 你可以使用 6、7、8、9 或 10 来指定你想要使用的 ECMAScript 版本。你也可以用使用年份命名的版本号指定为 2015（同 6），2016（同 7），或 2017（同 8）或 2018（同 9）或 2019 (same as 10)
- sourceType - 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
- ecmaFeatures - 这是个对象，表示你想使用的额外的语言特性:
- globalReturn - 允许在全局作用域下使用 return 语句
- impliedStrict - 启用全局 strict mode (如果 ecmaVersion 是 5 或更高)
- jsx - 启用 JSX（支持 JSX 语法并不等同于支持 React。React 对 eslint 无法识别的JSX语法应用特定的语义。如果你正在使用 React 并且想要 React 语义支持，需使用 eslint-plugin-react。）

```text
{
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "semi": "error"
    }
}
```

#### 3.4 parser

parser用于设置接解析器，eslint 默认使用Espree作为其解析器，你可以在配置文件中指定一个不同的解析器，只要该解析器符合下列要求：

- 它必须是一个 Node 模块，可以从它出现的配置文件中加载。通常，这意味着应该使用 npm 单独安装解析器包。
- 它必须符合 parser interface。

以下解析器与 eslint 兼容：

- [Esprima](https://link.zhihu.com/?target=https%3A//www.npmjs.com/package/esprima)
- [Babel-eslint](https://link.zhihu.com/?target=https%3A//www.npmjs.com/package/babel-eslint) - 一个对[Babel](https://link.zhihu.com/?target=https%3A//babeljs.io/)解析器的包装，使其能够与 eslint 兼容。
- [@typescript-eslint/parser](https://link.zhihu.com/?target=https%3A//www.npmjs.com/package/%40typescript-eslint/parser) - 将 TypeScript 转换成与 estree 兼容的形式，以便在eslint中使用。

注意，在使用自定义解析器时，为了让 eslint 在处理非 ECMAScript 5 特性时正常工作，配置属性 `parserOptions` 仍然是必须的。解析器会被传入 `parserOptions`，但是不一定会使用它们来决定功能特性的开关。

#### 3.5 processor

processor用于指定处理器，插件可以提供处理器。处理器可以从另一种文件中提取 JavaScript 代码，然后让 eslint 检测 JavaScript 代码。或者处理器可以在预处理中转换 JavaScript 代码。使用时键值由插件名和处理器名组成的串接字符串加上斜杠 组成

```text
{
    "plugins": ["a-plugin"],
    "processor": "a-plugin/a-processor"
}
```

为特定类型的文件指定处理器，可使用 overrides 键和 processor 的组合。

```text
{
    "plugins": ["a-plugin"],
    "overrides": [
        {
            "files": ["*.md"],
            "processor": "a-plugin/markdown"
        }
    ]
}
```

#### 3.6 globals

当访问当前文件内未定义的变量时，no-undef 规则将发出警告。如果想在一个源文件里使用全局变量，可以 eslint 中定义这些全局变量。

```text
{
    "globals": {
        "var1": "writable",
        "var2": "readonly"
    }
}
```

对应的值设置为 "writable" 以允许重写变量，或 "readonly" 不允许重写变量。

#### 3.7 plugins

plugins 关用来引入指定的插件。插件名称可以省略 eslint-plugin- 前缀 。

> 注意
> 插件是相对于 eslint 进程的当前工作目录解析的。换句话说，eslint 将加载与用户通过从项目 Node 交互解释器运行 ('eslint-plugin-pluginname') 获得的相同的插件。

参考文档：[https://cn.eslint.org/docs/developer-guide/working-with-plugins](https://link.zhihu.com/?target=https%3A//cn.eslint.org/docs/developer-guide/working-with-plugins)

每个插件是一个命名格式为 eslint-plugin- 的 npm 模块，比如 eslint-plugin-jquery。

在 eslint 中，插件可以暴露额外的规则以供使用。为此，插件必须输出一个 rules对象，包含规则 ID 和对应规则的一个键值对。

```text
module.exports = {
    rules: {
        "dollar-sign": {
            create: function (context) {
                // rule implementation ...
            }
        }
    }
}
```

#### 3.8 rules

rules用于配置规则，eslint 附带有大量的规则。你可以使用注释或配置文件修改你项目中要使用的规则。要改变一个规则设置，你必须将规则 ID 设置为下列值之一：

- "off" 或 0 - 关闭规则
- "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
- "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)

```text
{
    "rules": {
        "eqeqeq": "off",
        "curly": "error",
        "quotes": ["error", "double"]
    }
}
```

配置定义在插件中的一个规则的时候，必须使用 插件名/规则ID 的形式：

```text
{
    "plugins": [
        "plugin1"
    ],
    "rules": {
        "eqeqeq": "off",
        "curly": "error",
        "quotes": ["error", "double"],
        "plugin1/rule1": "error"
    }
}
```

为一组文件定义规则，可以使用overrides和 rules：

```text
{
  "rules": {...},
  "overrides": [
    {
      "files": ["*-test.js","*.spec.js"],
      "rules": {
        "no-unused-expressions": "off"
      }
    }
  ]
}
```

#### 3.9 settings

eslint 支持在配置文件添加共享设置。可以添加 settings 对象到配置文件，它将提供给每一个将被执行的规则。如果你想添加的自定义规则而且使它们可以访问到相同的信息，这将会很有用，并且很容易配置。

```text
{
    "settings": {
        "sharedData": "Hello"
    }
}
```

#### 3.10 extends

可共享的配置：[https://cn.eslint.org/docs/developer-guide/shareable-configs](https://link.zhihu.com/?target=https%3A//cn.eslint.org/docs/developer-guide/shareable-configs)

extends用于继承共享的配置规则，可共享的配置 是一个 npm 包，它输出一个配置对象。要确保这个包安装在 eslint 能请求到的目录下（`extends 属性值可以省略包名的前缀 eslint-config-。`）。

extends 属性值可以由组成：plugin:包名 (可以是省略了前缀的插件名字也可以是完整包名，比如，react)/配置名称 (比如 recommended) ，也可以是一个省略 eslint-config-的共享配置。

```text
extends: [
    // Airbnb JavaScript Style Guide https://github.com/airbnb/javascript
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
],
```

在配置文件中，使用 "extends": "eslint:recommended" 来启用推荐的规则。

常用的规则列表：[https://cn.eslint.org/docs/rules/](https://link.zhihu.com/?target=https%3A//cn.eslint.org/docs/rules/)

```text
/** 扩展 */
extends: ['eslint:recommended' /** eslint:recommended(自动启用部分列核心功能) 、 eslint:all(启用当前Eslint全部核心功能) */],
```

### Plugins和Extends的区别

简单的说Plugin是声明了一堆规则，使用需要自己在rules中进行自定义。extends（集成），同时具有plugin导入的能力，还引入了自带的规则风格。(Extends看以看作是当前配置对象的功能完备的子集）

### .eslintignore

可以通过在项目根目录创建一个 .eslintignore 文件告诉 eslint 去忽略特定的文件和目录。.eslintignore 文件是一个纯文本文件，其中的每一行都是一个 glob 模式表明哪些路径应该忽略检测。

当 eslint 运行时，在确定哪些文件要检测之前，它会在当前工作目录中查找一个 .eslintignore 文件。如果发现了这个文件，当遍历目录时，将会应用这些默认设置。一次只有一个 .eslintignore 文件会被使用，所以，不是当前工作目录下的 .eslintignore 文件将不会被用到。

Globs 匹配使用 node-ignore，所以大量可用的特性有：

- 以 # 开头的行被当作注释，不影响忽略模式。
- 路径是相对于 .eslintignore 的位置或当前工作目录。通过 --ignore-pattern command 传递的路径也是如此。
- 忽略模式同 .gitignore 规范
- 以 ! 开头的行是否定模式，它将会重新包含一个之前被忽略的模式。
- 忽略模式依照 .gitignore 规范.