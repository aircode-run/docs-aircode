---
title: "配置 CLI 工具"
source: "https://docs.aircode.run/docs/register/6-cli.html"
author:
  - "[[Packy Team]]"
published: 2026-05-22
created: 2026-05-31
description: "aircode 支持在命令行中使用 Claude Code、Codex、Gemini CLI 基础条件 开始配置 CLI 前，请先完成以下步骤： 完成 ，确保 Node.js 和 npm 可以正常使用。 完成 ，安装 Claude Code、Codex、Gemini CLI。 API 端点说明 登录控制台后，可以在“数据看板”右侧查看当前可用的 AP..."
tags:
  - "clippings"
---
aircode 支持在命令行中使用 Claude Code、Codex、Gemini CLI

## 基础条件

开始配置 CLI 前，请先完成以下步骤：

1. 完成 [环境检查](./环境检查.md) ，确保 Node.js 和 npm 可以正常使用。
2. 完成 [安装 CLI](../CLI配置教程/环境检查%28通用步骤%29.md#_2-%E5%AE%89%E8%A3%85cli) ，安装 Claude Code、Codex、Gemini CLI。

## API 端点说明

登录控制台后，可以在“数据看板”右侧查看当前可用的 API Endpoint。

- 主站 Endpoint： `https://aircode.run` ，稳定可靠，适合生产环境。
- 优化线路 Endpoint： `https://direct-api.aircode.run` ，优化线路，适合对延迟敏感的场景。

OpenAI 兼容端点需要添加 `/v1`

如果你使用的是 OpenAI 兼容格式的客户端或工具，例如 Codex、OpenAI SDK、Cherry Studio 的 OpenAI 兼容配置，请在 API 地址后添加 `/v1` ：

```bash
https://aircode.run/v1
https://direct-api.aircode.run/v1
```

如果使用的是 Claude Code、Gemini CLI 等专用配置，请以对应教程中的示例为准。

推荐配置

为了让配置过程进行轻便简单，我们 **极力推荐** 使用Github开源项目 [CC-Switch](https://github.com/farion1231/cc-switch) 来对我们的使用环境进行配置。

[CC-Switch配置CC、Codex、Gemini教程](../CC-Switch/CC-Switch使用教程.md)

如果你是老鸟，或者不愿意使用此工具，可以参考以下CLI配置教程文档， **但我们还是极力推荐使用此工具，能省很多时间！**

CLI 手动配置教程传送门

注意：不管你是使用哪个 CLI，请一定先完成上方基础条件，确保 Node.js、npm 和对应 CLI 都可以正常使用。

[Claude Code配置教程](../CLI配置教程/Claude Code配置.md)

[Codex配置教程](../CLI配置教程/Codex配置.md)

[Gemini配置教程](../CLI配置教程/Gemini配置.md)