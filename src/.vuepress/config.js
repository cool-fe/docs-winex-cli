const { description } = require('../../package')

module.exports = {
  base:'/docs-winex-cli/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'WINEX CLI',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'a tool is the Standard Tooling for winfe',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  theme: '@vuepress/theme-vue',
  themeConfig: {
    repo: 'cool-fe/docs-winex-cli',
    editLinks: false,
    editLinkText: 'Edit this on GitHub!',
    lastUpdated: 'Last updated',
    docsDir: 'src',
    sidebarDepth: 2,
    nav: [
      {
        text: '指南',
        link: '/guide/',
      },
      {
        text: '物料开发',
        link: 'https://cool-fe.github.io/winex-material-doc/guides/',
      },
      
    ],
    sidebar: {
      '/guide/': [
        '/guide/',
        '/guide/install',
        '/guide/init',
        '/guide/add',
        '/guide/lint'
      ],
    }
  },

  dest: 'public',
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': '/docs-winex-cli/'
      }
    }
  },
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          '/': {
            message: '新内容可用',
            buttonText: '刷新'
          }
        }
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'info',
        before: info =>
          `<div class="custom-block info"><p class="custom-block-title">${info}</p>`,
        after: '</div>'
      }
    ],
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
