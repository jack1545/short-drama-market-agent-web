# 短剧行情监控 Agent Web

关卡 6 的公开演示网站。页面展示 Agent 定位、证据规则、2026-08-16 真实运行快照和可下载产出。

公开地址：<https://short-drama-market-agent-web.vercel.app>

扣子与百度发布迁移说明见 [`docs/COZE-BAIDU-PUBLISHING.md`](docs/COZE-BAIDU-PUBLISHING.md)。

## 本地运行

```powershell
python -m http.server 4173
```

公开演示不会调用模型接口，也不会暴露任何 API Key。真实任务仍通过独立 Hermes Profile `short-drama-market` 和飞书机器人执行。
