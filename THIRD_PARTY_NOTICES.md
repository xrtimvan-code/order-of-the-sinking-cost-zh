# Third-party notices / 第三方来源与权利说明

## Upstream viewer software

This project is derived from [xPaw/order-of-the-sinking-cost](https://github.com/xPaw/order-of-the-sinking-cost), by Pavel Djundik / xPaw. The initial localization baseline is upstream commit `c46e073`. Upstream history and the original MIT copyright and permission notice are retained. See `LICENSE` and `README.upstream.md`.

本项目基于上述上游项目。原作者署名、MIT 授权声明和 Git 历史均予保留。中文本地化与分发构建的修改由 xrtimvan-code 维护，并在具备授权的范围内以 MIT 许可提供。

## AI-generated localization and documentation / AI生成的翻译与文档

OpenAI Codex generated this edition's interface translations and new or revised documentation, with revisions based on user feedback. These contributions were not written by a human translator or documentation author. Official game localization and existing upstream materials retain their separate attribution.

本版本的界面翻译及新增、修订文档由OpenAI Codex生成，并根据用户反馈修改，并非人工翻译或撰写。游戏官方文本与上游原有材料保留各自的来源署名。

## Game-related materials

《沉星之序》（*Order of the Sinking Star*）is a game by Thekla, Inc. Game names, trademarks, artwork, localization text, and other game materials remain subject to their respective rights. This repository is not affiliated with or endorsed by the game's developers, publishers, or the upstream viewer author.

The upstream repository includes map and icon images and schema information derived from the game. Builds also embed derived progression/navigation data and short labels required by the viewer. The localized build reads area labels and ranks from the official Simplified Chinese localization included with the game. The MIT software license covers the viewer code; it does not relicense game content.

本项目继承了上游的地图、图标及结构信息，构建时还会嵌入进度计算所需的派生数据与简短显示名称。游戏相关内容的权利归其相应权利人，MIT 软件许可不表示本项目有权将游戏内容整体重新许可。

The repository and portable release do not contain the game's executable, raw `levels.package`, full localization files, audio, or player saves. Users generating data must supply their own game files. Please do not submit game packages or saves in issues or pull requests.

本仓库及成品不包含游戏可执行文件、原始关卡包、完整语言包、音频或玩家存档。数据生成需使用用户自行提供的游戏文件；请勿在 Issues 或 PR 中上传整包游戏或存档。

## WikiTactics level-link mapping

The upstream file `data/wikitactics.txt` is copied from `data/wt.txt` in [joric/ootss](https://github.com/joric/ootss), whose repository identifies its license as the **Unlicense**. A copy is included in `LICENSES/ootss-UNLICENSE.txt`. The mapping supplies links to the external WikiTactics site; that site's content and terms are independent of this viewer.

上游关卡攻略链接映射来自上述项目。此处附带其许可文本；外部攻略网站的内容、使用规则及剧透范围由该网站自行管理。

## Development dependencies and fonts

Development dependencies are listed in `package.json` and locked in `package-lock.json`; their individual licenses continue to apply. The portable release does not bundle Node.js, npm, Vite+, Wrangler, or a font file. Font-family names in CSS refer to fonts installed on the user's system.

## Rights-related inquiries

For an attribution or rights-related concern, open a concise issue in this repository identifying the material, its location, and the basis of your concern. Do not include confidential documents or personal information in a public issue.

如对署名或相关材料权利有疑问，可在本仓库提出说明，标明材料位置、涉及内容和依据。请勿在公开 Issue 中提交机密文件或个人信息。维护者会据此核查。
