---
nav:
  title: lint配置指南
toc: config
---

# 介绍

前端项目已不再是刀耕火种的年代了，项目复杂度高了不少，除了项目开发框架之外：

- 我们为了保证团队代码风格统一、保证代码的一致性和避免错误、为了让编辑器可以保存时自动格式化代码等我们一般会使用 eslint、prettier、.vscode/setting 等工具和配置帮我们。
- 为了在`git commit`之前进行检测我们还会使用 husky、lint-staged 等工具。
- 为了统一和标准化`git commit -m 'message'`message 的格式，我们会使用 commitlint 工具。

这么多的第三方工具涉及到多个 package、多个配置。作为开发或多或少一般都会遇到配置这些工具的问题，有时候会卡很久。那如何让这些使用成本降到最低，甚至零成本呢？我们决定想办法解决这个问题。

我们会结合前端社区的最佳实践标准化各种配置

- [`eslint`](./eslint.md)
- [`prettier`](./prettier.md)
- [`husky`](./husky.md)
- [`lint-staged`](./lint-staged.md)
- [`vscode`](./vscode.md)

## 代码的一致性和错误检测交给[eslint]

大家还记得 ESLint 是怎么打败 JSHint 成为最受欢迎的 js 代码检查工具吗？就是因为 ESLint 推崇的插件化、配置化，满足了不同团队不同技术栈的个性的需求。我们也统一了[eslint 配置](./eslint.md)

## 样式相关的规则交给[Prettier]

Prettier 是一个代码格式化工具，相比于 ESLint 中的代码格式规则，它提供了更少的选项，但是却更加专业。

如今 Prettier 已经成为前端项目中的必备工具，eslint-config-winex 没有必要再去维护 ESLint 中的代码格式相关的规则了，用 ESLint 来检查它更擅长的逻辑错误。

至于缩进要两个空格还是四个空格，末尾要不要分号，可以在项目的 [`.prettierrc.js`](./prettier.md) 中去配置，当然我们也提供了一份推荐的 [Prettier](./prettier.md)。

## 注册 git hook 自动检测交给[husky](./husky.md) & [lint-staged](./lint-staged.md)

我们希望在保存代码和提交代码的时候可以及时的进行检测，所以需要设置 git hook，在我们`git commit`的时候触发检测。保证我们的 remote 代码都是经过检测的。

## vscode 最佳实践

想要 ESLint 能识别 .vue、.ts 或 .tsx 文件、想要开启「保存时自动修复」的功能、想要针对 .vue、.ts 和 .tsx 文件开启 ESLint 的 autoFix 等功能我们都需要配置 [.vscode/settings.json](./vscode.md)
