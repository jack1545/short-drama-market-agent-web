# 短剧行情监控 Agent Web

关卡 6 的公开演示网站。页面展示 Agent 定位、证据规则，以及基于 2026-08-16 已验证快照构建的 3 个完整任务实例：每日行情全景监控、题材机会评估、平台竞品对比。

公开地址：<https://short-drama-market-agent-web.vercel.app>

扣子与百度发布迁移说明见 [`docs/COZE-BAIDU-PUBLISHING.md`](docs/COZE-BAIDU-PUBLISHING.md)。

## 本地运行

```powershell
python -m http.server 4173
```

公开演示不会调用模型接口，也不会暴露任何 API Key。实例 01 复盘一次真实飞书任务，实例 02–03 基于同一快照完成专题分析；真实任务仍通过独立 Hermes Profile `short-drama-market` 和飞书机器人执行。
