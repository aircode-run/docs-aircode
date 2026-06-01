---
title: "CLI配置教程"
source: "https://docs.aircode.run/docs/cli/"
author:
  - "[[Packy Team]]"
published: 2025-11-23
created: 2026-05-31
description: "环境检查(通用步骤) （1）确认Nodejs环境已安装 在windows或MacOS终端输入以下命令 正常情况应该是如下图所示（没有任何内容也没关系），如果提示“命令未找到”，则说明你没有安装Nodejs，你需要按 此教程 来安装运行Claude Code、Codex、Gemini所需的环境 如果你发现自己没有安装Nodejs，并且跟着教程目前已经安装..."
tags:
  - "clippings"
---
## 环境检查(通用步骤)

### （1）确认Nodejs环境已安装

1. 在windows或MacOS终端输入以下命令
```bash
npm list -g --depth-0
```

正常情况应该是如下图所示（没有任何内容也没关系），如果提示“命令未找到”，则说明你没有安装Nodejs，你需要按 [此教程](https://www.runoob.com/nodejs/nodejs-install-setup.html) 来安装运行Claude Code、Codex、Gemini所需的环境
![](assets/Pasted%20image%2020260531222102.png)
2. 如果你发现自己没有安装Nodejs，并且跟着教程目前已经安装完毕，请你重新执行上述提到的命令，如果不再提示“命令未找到”，则说明安装成功

### （2）安装CLI

1. 在windows或MacOS终端输入以下命令，一次性安装好我们目前所需的所有终端
```bash
npm i -g @anthropic-ai/claude-code@latest
npm i -g @openai/codex@latest
npm i -g @google/gemini-cli@latest
```
![](assets/Pasted%20image%2020260531222109.png)

### （3）测试安装成功

重要

**这一步很重要，请你务必运行命令进行测试，因为这一步运行命令后，你的用户目录下才会生成各CLI的配置目录，方便后续操作！**

Claude Code

在windows或MacOS终端输入以下命令，若出现图示内容，或出现选项让你选择，则Claude code安装成功

```bash
claude
```
![](assets/Pasted%20image%2020260531222121.png)

重要

**第二步十分重要，请你务必跳转链接后运行命令进行配置**

2. 点击 [claude code 无法连接到 Anthropic 服务](../常见问题/Claude Code相关问题.md#claude-code-%E6%97%A0%E6%B3%95%E8%BF%9E%E6%8E%A5%E5%88%B0-anthropic-%E6%9C%8D%E5%8A%A1) 跳转，务必根据教程运行命令，然后再继续阅读之后单独CLI的配置教程

在windows或MacOS终端输入以下命令，若出现图示内容，或出现选项让你选择，则Codex安装成功

```bash
codex
```
![](assets/Pasted%20image%2020260531222143.png)

在windows或MacOS终端输入以下命令，若出现图示内容，或出现选项让你选择，则Gemini安装成功

```bash
gemini
```
![](assets/Pasted%20image%2020260531222151.png)

## Claude Code配置

Windows

1. 键盘按下“Win+R”键，输入以下内容后回车，打开Claude Code配置目录
```bash
%userprofile%\.claude
```
![](assets/Pasted%20image%2020260531222209.png)

2. 目录内容如图所示，如果目录中没有 `settings.json` ，你需要手动创建后打开
- **settings.json** ：Claude主要的配置文件，主要用来配置中转站地址以及ApiKey，以及一些hooks，plugins等
![](assets/Pasted%20image%2020260531222204.png)

3. 将以下内容写入 `settings.json`
```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://aircode.run",
    "ANTHROPIC_AUTH_TOKEN": "xxx",
    "CLAUDE_CODE_ATTRIBUTION_HEADER": "0"
  }
}
```


4. 回顾 [创建API令牌](../快速开始/创建 API 令牌.md) ，在 aircode 中创建 **CC** 分组的令牌，替换上方 `xxx` 部分
![](assets/Pasted%20image%2020260531222226.png)

5. 在windows终端运行 `claude` ，出现对话界面后进行对话测试，能收到回复即表示配置成功
![](assets/Pasted%20image%2020260531222231.png)

MacOS

1. 在访达界面按下 “Command+Shift+G”，输入以下路径后回车，打开配置目录
```bash
~/.claude
```
![](assets/Pasted%20image%2020260531222242.png)

2. 若目录不存在 `settings.json` ，需要你手动进行创建
- **settings.json** ：Claude主要的配置文件，主要用来配置中转站地址以及ApiKey，以及一些hooks，plugins等
![](assets/Pasted%20image%2020260531222248.png)

3. 将以下内容写入 `settings.json`
```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://aircode.run",
    "ANTHROPIC_AUTH_TOKEN": "xxx",
    "CLAUDE_CODE_ATTRIBUTION_HEADER": "0"
  }
}
```


4. 回顾 [创建API令牌](../快速开始/创建 API 令牌.md) ，在 aircode 中创建 **CC** 分组的令牌，替换上方 `xxx`
![](assets/Pasted%20image%2020260531222301.png)

5. 在终端运行 `claude` ，看到对话界面并能正常回复即表示配置完成
![](assets/Pasted%20image%2020260531222307.png)

重要

**注意，如果配置完仍然有报错问题，提示你需要登录，请看如下链接解决**  
[claude-code-无法连接到-anthropic-服务](../常见问题/Claude Code相关问题.md#claude-code-%E6%97%A0%E6%B3%95%E8%BF%9E%E6%8E%A5%E5%88%B0-anthropic-%E6%9C%8D%E5%8A%A1)

## Codex配置

Windows

1. 键盘按下“Win+R”键，输入以下内容后回车，打开你的codex配置目录
```bash
%userprofile%\.codex
```
![](assets/Pasted%20image%2020260531222322.png)

2. 你的目录中可能会存在以下文件，不过我们用到的文件只有三个，需要配置的只有两个
![](assets/Pasted%20image%2020260531222328.png)

- **config.toml** ：Codex的 **核心配置** 文件，中转服务与MCP等都在此文件配置
- **auth.json** ：用来配置你在中转站获取的ApiKey秘钥
- **[AGENTS.md](http://agents.md/)** ：用来设置codex全局工作的提示词

重要

**很多人刚安装可能没有这三个文件，你需要手动去创建这三个文件，然后写入内容**

3. 配置 Config.toml

将以下配置文本复制到你的 config.toml文件中保存

```toml
disable_response_storage = true
model = "gpt-5.2"
model_provider = "packycode"
model_reasoning_effort = "xhigh"
model_verbosity = "high"

[features]
web_search_request = true

[model_providers.packycode]
base_url = "https://aircode.run/v1"
name = "packycode"
requires_openai_auth = true
wire_api = "responses"
```
4. 配置ApiKey

将以下配置文本复制到你的 auth.json文件中

```json
{
  "OPENAI_API_KEY": "xxx"
}
```
![](assets/Pasted%20image%2020260531222349.png)

回顾 [创建API令牌](../快速开始/创建 API 令牌.md) 这一步教程，我们需要在aircode中创建 **Codex** 分组的令牌，然后点击右侧的复制按钮，将key填入“xxx”部分后保存

![](assets/Pasted%20image%2020260531222354.png)

5. 测试对话

在windows终端输入以下命令，出现图示内容，进行对话测试，如果有回复，则配置成功，开始你的Codex使用之旅~

```bash
codex
```
![](assets/Pasted%20image%2020260531222401.png)

MacOS

1. 在访达界面按下 “Command+Shift+G”，输入以下路径并回车，打开 Codex 配置目录
```bash
~/.codex
```
![](assets/Pasted%20image%2020260531222411.png)

2. 你的目录中可能会存在以下文件，不过我们用到的文件只有三个，需要配置的只有两个，其它文件可忽略
![](assets/Pasted%20image%2020260531222417.png)

- **config.toml** ：Codex 的核心配置文件，中转服务与 MCP 等都在此文件配置
- **auth.json** ：存放中转站获取的 ApiKey 秘钥
- **[AGENTS.md](http://agents.md/)** ：Codex 全局工作的提示词

重要

初次安装若未自动生成，需要手动创建上述三个文件并写入内容

3. 配置 Config.toml

将以下内容保存到 `config.toml`

```toml
model_provider = "packycode"
model = "gpt-5.1-codex"
model_reasoning_effort = "high"
network_access = "enabled"
disable_response_storage = true
windows_wsl_setup_acknowledged = true
model_verbosity = "high"

[model_providers.packycode]
name = "packycode"
base_url = "https://aircode.run/v1"
wire_api = "responses"
requires_openai_auth = true
```
4. 配置 ApiKey

将以下配置文本复制到你的 auth.json文件中

```json
{
  "OPENAI_API_KEY": "xxx"
}
```
![](assets/Pasted%20image%2020260531222427.png)

回顾 [创建API令牌](../快速开始/创建 API 令牌.md) 这一步教程，我们需要在aircode中创建 **Codex** 分组的令牌，然后点击右侧的复制按钮，将key填入“xxx”部分后保存

![](assets/Pasted%20image%2020260531222448.png)

5. 测试对话

在 MacOS 终端执行以下命令，出现对话界面并能收到回复即表示配置成功

```bash
codex
```
![](assets/Pasted%20image%2020260531222444.png)

## Gemini配置

Windows

1. 键盘按下“Win+R”，输入以下内容后回车，打开 Gemini CLI 配置目录
```bash
%userprofile%\.gemini
```
![](assets/Pasted%20image%2020260531222458.png)

2. 如果目录下没有 `.env` 文件，请新建一个 `.env` ，写入以下内容
- **.env** ：Gemini CLI的配置文件，主要设置自定义端点、ApiKey跟所用模型
![](assets/Pasted%20image%2020260531222503.png)

```bash
GOOGLE_GEMINI_BASE_URL=https://aircode.run
GEMINI_API_KEY=xxx
GEMINI_MODEL=gemini-2.5-pro
```


3. 回顾 [创建API令牌](../快速开始/创建 API 令牌.md) ，在 aircode 中创建 令牌，并复制ApiKey后填入 `xxx`
![](assets/Pasted%20image%2020260531222518.png)

4. 打开终端执行 `gemini` ，看到交互界面并能正常回复即表示配置成功
![](assets/Pasted%20image%2020260531222529.png)

MacOS

1. 按下 “Command+Shift+G”，输入以下路径后回车，打开配置目录
```bash
~/.gemini
```
![](assets/Pasted%20image%2020260531222538.png)

2. 若目录中没有 `.env` 文件，创建并写入以下内容
- **.env** ：Gemini CLI的配置文件，主要设置自定义端点、ApiKey跟所用模型
![](assets/Pasted%20image%2020260531222545.png)

```bash
GOOGLE_GEMINI_BASE_URL=https://aircode.run
GEMINI_API_KEY=xxx
GEMINI_MODEL=gemini-2.5-pro
```
3. 回顾 [创建API令牌](../快速开始/创建 API 令牌.md) ，在 aircode 中创建令牌，填入 `xxx`
![](assets/Pasted%20image%2020260531222553.png)

4. 在终端运行 `gemini` ，可正常进入对话并收到回复即表示配置完成
![](assets/Pasted%20image%2020260531222601.png)