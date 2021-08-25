---
title: winex - 企业级前端开发脚手架
hero:
  title: winex
  desc: 🍙 企业级前端开发脚手架
  actions:
    - text: 快速上手 →
      link: /guide
features:
  - icon: https://gw.alipayobjects.com/zos/basement_prod/a1c647aa-a410-4024-8414-c9837709cb43/k7787itw_w126_h114.png
    title: 可扩展
    desc: winex 覆盖了大多数开发场景，并使其插件化，winex 内部功能也全由插件完成。此外还支持插件和插件集，以满足功能和垂直域的分层需求。
  - icon: https://gw.alipayobjects.com/zos/basement_prod/b54b48c7-087a-4984-b150-bcecb40920de/k7787z07_w114_h120.png
    title: 开箱即用
    desc: winex 内置了项目初始化(init)、lint初始化，组件/项目本地开发(dev)、组件打包/项目构建(build)、发布物料等，仅需一个依赖即可上手开发。可满足日常 80% 的开发需求。
  - icon: https://gw.alipayobjects.com/zos/basement_prod/d078a5a9-1cb3-4352-9f05-505c2e98bc95/k7788v4b_w102_h126.png
    title: 面向未来
    desc: 在满足需求的同时，我们也不会停止对新技术的探索。比如 modern mode、webpack@5、自动化 external、bundler less 等等。
footer: Open-source MIT Licensed | Copyright © 2017-present<br />Powered by [dumi](https://d.umijs.org/).
---


## 三分钟上手 Umi

[![Edit umi](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/umi-2d4js?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2Fpages%2Findex.tsx&theme=dark)

- 安装：

```bash
$ npm install -g @winfe/winex-cli
# OR
$ yarn global add @winfe/winex-cli
```

- 使用

```bash
# 初始化一个项目
$ winex init --name my-project

# 添加一个物料
$ winex add --plugin my-plugin

# 初始化/升级：eslint、prettier、.vscode/setting.json、.editorconfig、husky、lint-staged...
$ winex lint
```

## 反馈

|                                      Github Issue                                       |                                                    企业微信                                                    |
| :-------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------: |
| <p style="width:200px"></p>[winex-cli](https://github.com/cool-fe/winex-cli/issues)</p> | <p style="width:650px"  height="310"><img src="./public/dingding.jpg" width="216"  height="310" /> </p> |
