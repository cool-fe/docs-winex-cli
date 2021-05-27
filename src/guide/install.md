# 安装

::: tip Node 版本要求
Winex CLI  需要 [Node.js](https://nodejs.org/) v10 或更高版本 (推荐 v12 以上)。你可以使用 [n](https://github.com/tj/n)，[nvm](https://github.com/creationix/nvm) 或 [nvm-windows](https://github.com/coreybutler/nvm-windows) 在同一台电脑中管理多个 Node 版本。
:::

可以使用下列任一命令安装这个新的包：

```bash
$ npm install -g @winfe/winex-cli
# OR
$ yarn global add @winfe/winex-cli
```

安装之后，你就可以在命令行中访问 `winex` 命令。你可以通过简单运行 `winex -h`，看看是否展示出了一份所有可用命令的帮助信息，来验证它是否安装成功。

你还可以用这个命令来检查其版本是否正确：

```bash
winex --version
```

### 升级

如需升级全局的 Winex CLI 包，请运行：

``` bash
npm update -g @winfe/winex-cli

# 或者
yarn global upgrade --latest @winfe/winex-cli
```

### 简单使用

```bash
# 初始化一个项目
$ winex init --name my-project

# 添加一个物料
$ winex add --plugin my-plugin

# 初始化/升级：eslint、prettier、.vscode/setting.json、.editorconfig、husky、lint-staged...
$ winex lint
```