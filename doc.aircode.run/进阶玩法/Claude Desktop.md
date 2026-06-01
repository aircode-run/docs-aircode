---
title: "Claude Desktop"
source: "https://docs.aircode.run/docs/advanced/ClaudeDesktop.html"
author:
  - "[[Packy Team]]"
published: 2026-05-22
created: 2026-05-31
description: "软件下载 点击 Claude Desktop下载链接 ，进入下载页面 在如上图 Desktop 一块，根据自己的系统，下载对应的安装包 软件安装 绕过登录并配置第三方接口 打开软件进入登录界面 开启开发者模式 配置第三方API 同样的方法打开菜单，依次进入 Developer → Configure third-party inferenc 在Gate..."
tags:
  - "clippings"
---
## 软件下载

1. 点击 [Claude Desktop下载链接](https://claude.com/download) ，进入下载页面

2. 在如上图 `Desktop` 一块，根据自己的系统，下载对应的安装包

## 软件安装

Windows

1. Windows系统下软件安装需要请求Anthropic官方，需要你用梯子挂 **全局服务（TUN模式）** ，或是用命令行来运行安装程序，使其强制走代理，否则会出现以下报错
![](assets/Pasted%20image%2020260531205929.png)

2. 如果出现以上报错无法安装，请在 Claude Desktop安装程序所在目录运行 `cmd` 命令行
3. 确认你当前使用梯子的端口号，比如我使用的是 `Clash Verge` ，则端口号为 `7897`
![](assets/Pasted%20image%2020260531205952.png)

4. 在命令行中分别输入以下命令，运行安装程序，此时能够正常安装
```bash
set HTTP_PROXY=http://127.0.0.1:7897
set HTTPS_PROXY=http://127.0.0.1:7897
"Claude Setup.exe"
```
![](assets/Pasted%20image%2020260531210003.png)

5. 正常安装
![](assets/Pasted%20image%2020260531210027.png)

MacOS

1. MacOS系统下直接正常安装即可
![](assets/Pasted%20image%2020260531210041.png)

## 绕过登录并配置第三方接口

1. 打开软件进入登录界面
![](assets/Pasted%20image%2020260531210053.png)

2. 开启开发者模式

Windows

1. 鼠标点击邮件输入框获取焦点，键盘tab跳到左上角菜单，按下回车依次进入 –> help → troubleshooting → enable developer mode
![](assets/Pasted%20image%2020260531210103.png)

2. 开启 `enable developer mode`
![](assets/Pasted%20image%2020260531210112.png)

MacOS

1. 直接在左上角菜单中依次进入 –> help → troubleshooting → enable developer mode
![](assets/Pasted%20image%2020260531210121.png)

2. 开启 `enable developer mode`
![](assets/Pasted%20image%2020260531210128.png)

3. 等待软件重启

## 配置第三方API

1. 同样的方法打开菜单，依次进入 Developer → Configure third-party inferenc
![](assets/Pasted%20image%2020260531210141.png)

2. 在Gateway base URL填入 `https://aircode.run` ，Gateway API key请填入生成的 CC分组 的APIKEY。并打开最下方 `Skip login-mode chooser` 选项
![](assets/Pasted%20image%2020260531210555.png)

3. 点击右下角 `Apply locally` 按钮使配置生效
4. 进行愉快的对话吧~
![](assets/Pasted%20image%2020260531210450.png)