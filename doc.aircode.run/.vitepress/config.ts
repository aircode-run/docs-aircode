import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/docs-aircode/',
  title: 'AirCode 文档',
  description: 'AirCode 使用教程、CLI 配置、模型分组与常见问题',
  lang: 'zh-CN',
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
  themeConfig: {
    nav: [
      { text: '快速开始', link: '/快速开始' },
      { text: 'CLI 配置', link: '/CLI配置教程/CLI配置教程' },
      { text: '常见问题', link: '/常见问题/Claude Code相关问题' }
    ],
    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '快速开始', link: '/快速开始' },
          { text: '环境检查', link: '/快速开始/环境检查' },
          { text: '注册账号', link: '/快速开始/注册账号' },
          { text: '登录账号', link: '/快速开始/登录账号' },
          { text: '购买额度', link: '/快速开始/购买额度' },
          { text: '创建 API 令牌', link: '/快速开始/创建 API 令牌' },
          { text: '配置 CLI 工具', link: '/快速开始/配置 CLI 工具' }
        ]
      },
      {
        text: 'CLI 配置教程',
        items: [
          { text: '总览', link: '/CLI配置教程/CLI配置教程' },
          { text: '环境检查', link: '/CLI配置教程/环境检查(通用步骤)' },
          { text: 'Claude Code 配置', link: '/CLI配置教程/Claude Code配置' },
          { text: 'Codex 配置', link: '/CLI配置教程/Codex配置' },
          { text: 'Gemini 配置', link: '/CLI配置教程/Gemini配置' }
        ]
      },
      {
        text: 'CC-Switch',
        items: [
          { text: '使用教程', link: '/CC-Switch/CC-Switch使用教程' },
          { text: '通用步骤', link: '/CC-Switch/通用步骤' },
          { text: 'CLI 使用', link: '/CC-Switch/CC Switch CLI 使用' },
          { text: 'Claude Code 配置', link: '/CC-Switch/Claude Code配置' },
          { text: 'Codex 配置', link: '/CC-Switch/Codex配置' },
          { text: 'Gemini 配置', link: '/CC-Switch/Gemini配置' }
        ]
      },
      {
        text: '模型分组介绍',
        items: [
          { text: '分组介绍', link: '/模型分组介绍/分组介绍' },
          { text: '令牌分组介绍', link: '/模型分组介绍/令牌分组介绍' },
          { text: '令牌分组查看', link: '/模型分组介绍/令牌分组查看' }
        ]
      },
      {
        text: '进阶玩法',
        items: [
          { text: 'Claude Desktop', link: '/进阶玩法/Claude Desktop' },
          { text: 'DS 接入 CC', link: '/进阶玩法/DS接入CC' },
          { text: 'GPT 接入 CC', link: '/进阶玩法/GPT接入CC' },
          { text: 'OpenClaw', link: '/进阶玩法/OpenClaw' }
        ]
      },
      {
        text: '常见问题',
        items: [
          { text: 'Claude Code', link: '/常见问题/Claude Code相关问题' },
          { text: 'Codex', link: '/常见问题/Codex相关问题' },
          { text: 'Gemini', link: '/常见问题/Gemini相关问题' }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],
    outline: {
      label: '本页目录',
      level: [2, 3]
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  },
  markdown: {
    image: {
      lazyLoading: true
    }
  },
  lastUpdated: true
})
