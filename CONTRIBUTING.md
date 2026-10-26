# Contributing / 贡献指南

Thank you for helping improve this unofficial viewer. Bug reports, translation corrections, and focused pull requests are welcome. Please keep discussion respectful and relevant. Maintainers review contributions on a best-effort basis.

欢迎反馈错误、翻译问题及提交范围清晰的 PR。请尊重参与者，围绕可复现的问题讨论；维护以可用时间为限。

## Before opening an issue

- Use the latest release and read the README's known limitations.
- Include the viewer version, game version if known, OS/browser, and reproduction steps.
- State what you expected and what happened. For a translation correction, provide the displayed wording and a suggested correction with a source where possible.
- Describe spoilers inside a clearly marked collapsible section. Redact screenshots.
- Do not post full saves, raw game packages, localization files, credentials, personal names, or private paths. Start with a minimal description; a save is not required for an initial report.
- Use the process in `SECURITY.md` for vulnerabilities.

反馈前请阅读已知局限；提供版本、浏览器、复现步骤及预期结果。涉及剧透的说明应明确折叠标记。请不要公开分享完整存档、游戏包、语言包、凭据和个人信息。

## Pull requests

1. Explain the user-facing problem and keep changes focused.
2. Preserve internal save identifiers, spoiler filtering, read-only save handling, and HTML escaping. Keep terminology consistent with the game.
3. Do not commit generated `data/` outputs, raw game files, personal saves, secrets, `dist/`, or `node_modules/`.
4. For behavior changes, add a meaningful focused test. For wording changes, update relevant existing assertions and verify the resulting UI.
5. Run `npm run typecheck`, `npm run lint`, and appropriate tests. Use `npm test -- --run --hookTimeout=120000` for the full suite. Build with `npm run build:standalone` when changing UI or packaging.
6. Include test results and note any checks that could not be run.

By submitting a contribution, you confirm you have the right to submit it and intend it to be distributed under this project's MIT software license, subject to separately identified third-party materials. No separate contributor license agreement is currently required.

提交贡献表示你具备提交该内容的权利，并同意在本项目 MIT 软件许可及已标识第三方材料各自条款下分发。当前不要求另签贡献者协议。
