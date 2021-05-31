# vscode

## `.vscode/settings.json`配置最佳实践

```json
//https://zhuanlan.zhihu.com/p/103492877，暂时保留后续讨论后添加
{
  // 支持自动修复 Prettier 和 ESLint 错误
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.eslint": true
  },
  // 开启eslint自动修复js/ts/jsx/tsx功能
  "eslint.format.enable": true,
  "eslint.validate": [
    "javascript",
    "typescript",
    "javascriptreact",
    "typescriptreact",
    "vue",
    "html"
  ],
  "eslint.codeActionsOnSave.mode": "problems",
  "eslint.run": "onType",
  // 设置js的formatter为eslint
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[typescript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[scss]": {
    "editor.defaultFormatter": "sibiraj-s.vscode-scss-formatter"
  },
  "[json]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  // jsonc是有注释的json
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  // 设置保存时格式化。只用于用于格式化css/less程序
  "editor.formatOnSave": true,
  // 两者会在格式化js时冲突，所以需要关闭默认js格式化程序
  // 关闭js/ts的默认format,统一用eslint进行格式化（tslint已经不维护了，所以转eslint吧）
  "javascript.format.enable": false,
  "typescript.format.enable": false,
  "editor.formatOnSaveMode": "modifications",
  "prettier.vueIndentScriptAndStyle": false,
  // 关闭vetur内的js格式化程序
  // 关闭vetur的js/ts/html的formatter。html用eslint-plugin-vue格式化。
  // js/ts程序用eslint，防止vetur中的prettier与eslint格式化冲突
  "vetur.format.defaultFormatter.html": "none",
  "vetur.format.defaultFormatter.js": "none",
  "vetur.format.defaultFormatter.ts": "none",
  // 将json文件识别为jsonc格式
  "files.associations": {
    "*.json": "jsonc"
  }
}
```



## `.editorconfig`配置

```sh
# 表明这是最顶层的配置文件，这样才会停止继续向上查找 .editorconfig 文件；
# 查找的 .editorconfig 文件是从顶层开始读取的，类似变量作用域的效果，内部
# 的 .editorconfig 文件属性优先级更高
root = true

# 指定作用文件格式
[*]

# 缩进的类型 [space | tab]
indent_style = space                    # 输入的 tab 都用空格代替
# 缩进的大小 
# tab_width: 设置整数用于指定替代tab的列数。默认值就是indent_size的值，一般无需指定。
indent_size = 2                         # 一个 tab 用 2 个空格代替
# 定义换行符 [lf | cr | crlf]
end_of_line = lf                        # 换行符使用 unix 的换行符 \n
# 编码格式。支持latin1、utf-8、utf-8-bom、utf-16be和utf-16le，不建议使用uft-8-bom。
charset = utf-8                         # 字符编码 utf-8
# 是否除去换行行首的任意空白字符
trim_trailing_whitespace = true         # 去掉每行末尾的空格
# 文件是否以一个空白行结尾 [true | false]
insert_final_newline = true             # 每个文件末尾都加一个空行

[*.md]
trim_trailing_whitespace = false        # .md 文件不去掉每行末尾的空格
```