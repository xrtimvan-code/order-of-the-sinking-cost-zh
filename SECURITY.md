# Security policy / 安全政策

## Supported versions

Security fixes are considered for the latest published release. Older builds are not guaranteed to receive patches. This is a community-maintained project with no response-time or patch-time commitment.

安全问题以最新发布版本为处理对象，不保证为旧版本回移补丁，也不承诺响应或修复时限。

## Reporting a vulnerability

Use this repository's GitHub **Security → Report a vulnerability** feature for private reports when available. Include the affected version, a minimal reproduction, impact, and proposed mitigation if known. If private reporting is unavailable, open an issue containing only a request for a private reporting channel, without exploit details or sensitive data.

优先使用 GitHub **Security → Report a vulnerability** 私密报告功能。若该入口不可用，可公开提出“需要私密安全报告渠道”的请求，但不要公开漏洞利用细节或敏感数据。

Do not upload real player saves, credentials, complete game files, or unredacted personal paths. Do not test against other people's systems or data. Translation corrections and ordinary model inaccuracies belong in regular Issues.

请不要上传真实玩家存档、凭据、完整游戏文件或未遮挡的个人路径；不要对他人的系统或数据进行测试。普通翻译问题、进度模型误差请使用常规 Issues。

## Scope and privacy

The portable viewer reads user-selected saves in the local browser. It does not intentionally upload or modify saves. Reports concerning unintended network requests, unsafe rendering of save-derived text, or unintended file access are in scope. This statement describes intended behavior and is not a guarantee that the software is free of vulnerabilities.
