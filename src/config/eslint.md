# eslint

Winex 团队通用 ESLint 规范，包含 es6、vue、node、typescript 规范。es6 规范基于 airbnb-base，vue 规范基于 eslint-plugin-vue。

## Installation & Usage

安装依赖[推荐使用@winfe/winex-cli一键就给安排](http://localhost:8080/docs-winex-cli/guide/)，各种包和版本都已处理好了。

### 安装 @winfe/eslint-config-winex

使用 yarn 安装：

```
  yarn add -D @winfe/eslint-config-winex
```

### 安装依赖

首先要安装依赖，包括：

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

**其中，plugins 请按需安装；**

### 配置 .eslintrc.js

在项目根目录创建.eslintrc.js 文件，然后将下面的内容拷入

```
  module.exports = {
    extend: [
      '@winfe/eslint-config-winex/eslintrc.vue.js',
      // add typescript config for ts support
      // '@winfe/eslint-config-winex/eslintrc.typescript.js'
      // '@winfe/eslint-config-winex/eslintrc.typescript-vue.js'
    ]
  };
```

对于 es6、vue、node 项目请将文件路径改为对应的文件。
