---
home: true
actionText: 快速上手 →
actionLink: /guide/
---




<p align="center">
  <a href="https://www.npmjs.com/package/@winfe/winex-cli"><img alt="NPM Status" src="https://img.shields.io/npm/v/@winfe/winex-cli.svg?style=flat"/></a>
  <a href="https://circleci.com/gh/cool-fe/winex-cli/tree/main"><img alt="CI Status" src="https://circleci.com/gh/cool-fe/winex-cli/tree/main.svg?style=shield"/></a>
  <a href="https://lerna.js.org/"><img alt="CI Status" src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg" /></a>
</p>


## 命令

  - [`winex init`](./guide/init.md)
  - [`winex add`](./guide/add.md)
  - [`winex lint`](./guide/lint.md)



## 起步

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

|                               Github Issue                                |                                                        企业微信                                                         |
| :-----------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: |
| <p style="width:200px"></p>[winex-cli](https://github.com/cool-fe/winex-cli/issues)</p> | <p style="width:650px"  height="310"><img src="/docs-winex-cli/dingding.jpg" width="216"  height="310" /> </p>|
