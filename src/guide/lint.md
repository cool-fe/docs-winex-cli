# lint配置


## winex lint
运行以下命令来初始化或升级一个项目的配置：

``` bash
# 在项目根目录执行初始化lint或者升级lint
winex lint
```

一键处理项目的各种config（除了项目开发框架的打包编译配置），例如eslint、prettier、husky、lint-staged、editorconfig、.vscode等

::: warning 警告
如果你在历史项目中执行`winex lint`命令。可能会根据你项目之前的配置重新生成标准的配置文件(格式均为:`.xxxrc.js`)，会修改项目本地文件，请在执行命令之前保证代码都已提交。
命令执行完毕后，你需要重新启动编辑器以使更新后的配置文件生效。
:::


你会被提示选取项目的运行环境 env。你可以根据项目实际情况来选取。

![WINEX CLI 预览](/docs-winex-cli/lint-env.jpg)


还会要求选择项目会否支持TypeScrpt

![WINEX CLI ts](/docs-winex-cli/lint-ts.png)



当你运行如上命令的时候，大概做了如下几件事情:

- 根据项目类型安装eslint相关依赖包
- 生`·.eslintrc.js`配置文件
- 安装prettier依赖包
- 生成`.prettierrc.js`配置文件
- 生成`.editorconfig`配置文件
- 生成`.vscode/setting.json`编辑器配置文件
- 安装husky并初始化`.husky`，配置pre-commit git hook
- 安装lint-staged并生成`.lintstagedrc.js`配置文件，配置相应lint-staged钩子触发增量lint检测

![WINEX CLI ts](/docs-winex-cli/lint-all.png)

你可以试着提交(`git add`、`git commit -m ''`)代码，就会触发`lint-staged`钩子：


![WINEX CLI lint-commit](/docs-winex-cli/lint-commit.png)


`winex lint` 命令有一些可选项，你可以通过运行以下命令进行探索：

``` bash
winex lint --help
```

```
用法：winex lint [options]

初始化/升级配置

选项：
  -e, --env <envName>             项目运行环境选项
  -t, --typescript                是否支持TypeScript
  --pm <command>                  在安装依赖时使用指定的 npm 客户端: yarn、npm...
  --ci                            在执行时跳过问询
  -h, --help                      输出使用帮助信息
```



## Options

- [`--env`](#--env)
- [`--typescript`](#--typescript)
- [`--pm`](#--pm)
- [`--hook-engine`](#--hook-engine)
- [`--ci`](#--ci)

### `--env [browser]`

设置项目运行的环境

```bash
$ winex lint --env browser
```

### `--typescript`

项目是否支持ts

```bash
$ winex lint --typescript
```

### `--hook-engine [engine]`

设置git hook的工具,目前只支持husky,该参数目前还不支持


### `--pm [pm]`

设置项目包管理器，默认值 `yarn`，建议和您项目使用的包管理器保持一致

```bash
$ winex lint --pm yarn
```


### `--ci`

是否运行在ci/cd环境，一般做自动化ci/cd的时候可以在脚本中设置该参数，会跳过询问环节。不会询问env、typescript参数，都取默认值或者参数，对于没有默认值的参数请在执行脚本的时候传参

```bash
# 将不会询问env、typescript参数，都取默认值或者参数
$ winex lint --pm yarn  --ci
```
