# 介绍

::: info 提示
刚接触 WIENX CLI？先从[基础指南](/guide/)开始吧。
:::

本指南主要是为已有开发工具的团队（大his团队、大临床团队、门诊团队），迁移到WIENX CLI生态而提供的。


- [快速开始](/guide/install.html)
- [值得注意的新特性](#值得注意的新特性)
- [非兼容的变更](#非兼容的变更)
- [支持的库](#官方支持的库)



## 值得注意的新特性

WINEX CLI 中需要关注的一些功能包括：

- [init 初始化项目](/guide/init.html)
- [基于物料库一键安装物料](/guide/add.html)
- [一键初始化/升级项目非业务配置文件](/guide/lint.html)

## 变更详情

### init项目

要采用 `winex init`基于项目模板初始化项目,则必须按照我们的[物料规范](https://cool-fe.github.io/winex-material-doc/guides/material-scaffold.html)迁移您的项目模板，当你迁移完毕就可以直接使用`init`初始化项目

### add项目物料

如果想用`winex add`安装历史的物料资源，也必须对之前的物料项目做迁移，按照新的[物料规范](https://cool-fe.github.io/winex-material-doc/guides/material-scaffold.html)迁移您的物料

### lint统一管理项目的配置
- `wienx lint`命令主要是用来管理项目中非业务的配置，命令对不同类型的项目做了兼容处理，您不需要做任何修改即可使用。
- 如果在使用过程中遇到配置问题可以提[issues](https://github.com/cool-fe/winex-cli/issues),我们会尽快解决

### Vue项目其他说明

- WIENX CLI没有对项目中使用的`vue-cli`或者其他开发工具的功能做改动，所以原来使用的相关插件或者集成工具依然可用