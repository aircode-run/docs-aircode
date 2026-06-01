---
title: "GPT接入CC"
source: "https://docs.aircode.run/docs/advanced/ChatGPTClaudeCode.html"
author:
  - "[[Packy Team]]"
published: 2026-05-22
created: 2026-05-31
description: "重要告警 我们不推荐将 GPT 模型接入 Claude Code。更稳妥的使用方式是：GPT 模型在 Codex 中使用，Claude 模型在 Claude Code 中使用。 本教程仅用于回应部分用户的测试需求。该方案依赖 codex 分组与 CC Switch 本地路由，可能出现缓存异常、模型映射异常、MCP 或 Skills 兼容性问题。由此产生..."
tags:
  - "clippings"
---
重要告警

我们不推荐将 GPT 模型接入 Claude Code。更稳妥的使用方式是：GPT 模型在 Codex 中使用，Claude 模型在 Claude Code 中使用。

本教程仅用于回应部分用户的测试需求。该方案依赖 `codex` 分组与 CC Switch 本地路由，可能出现缓存异常、模型映射异常、MCP 或 Skills 兼容性问题。由此产生的任何使用问题、额度消耗、配置异常或其他后果，aircode 不推荐、不承诺可用性，也不承担责任。

请仅在你清楚风险，并具备自行排查问题能力时尝试；新手用户不建议操作。

## 前置准备

本教程用于将 **codex** 分组中的 GPT 模型接入 **Claude Code** 使用。开始前请先确认本地已经完成 Claude Code 安装；如果还没有安装，可以先参考 [Claude Code配置](../CLI配置教程/Claude Code配置.md) 中的安装与基础配置步骤。

同时，请确认本地已经安装并打开 CC Switch。该方案必须依赖 CC Switch 的本地路由能力，不能只通过普通供应商配置完成。

## 创建 codex 令牌

1. 回顾 [创建 API 令牌](../快速开始/创建 API 令牌.md) ，在 aircode 中创建新的 API 令牌。
2. 名称可以填写 `codex` ，令牌分组请选择 `default` 。创建完成后，复制生成的 API Key，后续配置会用到。

## 使用 CC Switch 配置

使用前确认

此配置不是 Claude Code 的常规推荐配置。配置完成后，请以 Claude Code 实际对话结果、CC Switch 请求日志和 aircode 消费日志共同判断是否生效。

### 添加供应商

1. 打开 CC Switch，在 Claude Code 配置中点击 `添加供应商` 。
2. 预设供应商选择 `自定义` ，并按照下方内容填写：
	- **官网链接** ： `https://aircode.run`
		- **API Key** ：填写刚才创建的 `codex` 分组 API Key
		- **请求地址** ： `https://aircode.run`
		- **API 格式** ： `OpenAI Responses API（需开启路由）`
		- **主模型** ：填写你希望映射到 Claude Code 主模型的 GPT 模型，例如 `gpt-5.5`
		- **Haiku 默认模型** ：填写较轻量的 GPT 模型，例如 `gpt-5.4-mini`
		- **Sonnet 默认模型** ：填写你希望映射到 Sonnet 的 GPT 模型，例如 `gpt-5.5`
		- **Opus 默认模型** ：填写你希望映射到 Opus 的 GPT 模型，例如 `gpt-5.5`
![](assets/Pasted%20image%2020260531211223.png)

模型填写说明

上方模型名称仅用于示例，请以你创建令牌时 `codex` 分组实际可用的模型名称为准。如果模型名称填写错误，Claude Code 中可能会出现模型不存在、请求失败或日志映射异常。


## 验证配置


2. 重新打开终端，运行 `claude` 启动 Claude Code，并发送一条测试消息。能够正常回复，说明 Claude Code 已经可以发起请求。
![](assets/Pasted%20image%2020260531211440.png)


4. 最后到 aircode 的消费日志中确认实际调用情况。如果配置正确，消费日志中应显示 `codex` 分组，并记录实际扣费的 GPT 模型，例如 `gpt-5.5` 。
![](assets/Pasted%20image%2020260531211458.png)

## 使用风险

最后提醒

该方案属于非推荐玩法，可能因为 Claude Code、CC Switch、模型接口、缓存策略、MCP 或 Skills 行为变化而失效。

aircode 不推荐用户将 GPT 模型接入 Claude Code，也不对该方案的稳定性、兼容性、输出效果、额度消耗或任何衍生问题承担责任。你可以用于测试、研究和理解路由逻辑，但不建议把它作为日常稳定工作流使用。