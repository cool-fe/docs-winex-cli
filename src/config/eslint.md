# eslint

Winex 团队通用 ESLint 规范，包含 es6、vue、node、typescript 规范。es6 规范基于 airbnb-base，vue 规范基于 eslint-plugin-vue。

规范提供了 typescript 支持，整体结构设计如下：

PS: TS 相关的具体 ESLint 规则采用 alloy-team 的方案[eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy/blob/master/typescript.js)

### Installation & Usage

#### 安装 @winfe/eslint-config-winex

使用 yarn 安装：

```
  yarn add -D @winfe/eslint-config-winex
```

#### 安装依赖

首先需要安装依赖，包括：

- base depends：
  - eslint
  - babel-eslint
  - typescript-eslint-parser
- plugins & config:
  - eslint-config-airbnb-base
  - eslint-plugin-import
  - eslint-plugin-vue
  - eslint-plugin-node
  - eslint-plugin-typescript

其中，plugins 请按需安装；

#### 配置 .eslintrc.js

在项目根目录创建.eslintrc.js 文件，然后将下面的内容拷入

```
  module.exports = {
    extend: [
      '@winfe/eslint-config-winex/eslintrc.react.js',
      // add typescript config for ts support
      // '@winfe/eslint-config-winex/eslintrc.typescript.js'
    ]
  };
```

对于 es6、vue、node 项目请将文件路径改为对应的文件。
