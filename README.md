# 沉星之序进度查看器 · 简体中文版

《沉星之序》（Order of the Sinking Star）的非官方中文进度查看器。读取存档后，可查看剩余内容、可玩关卡和解锁路线。基于 [xPaw/order-of-the-sinking-cost](https://github.com/xPaw/order-of-the-sinking-cost)。

An unofficial Simplified Chinese localization of the spoiler-aware save progress viewer for *Order of the Sinking Star*, based on [xPaw/order-of-the-sinking-cost](https://github.com/xPaw/order-of-the-sinking-cost).

**[下载可用压缩包 / Download the portable ZIP](https://github.com/xrtimvan-code/order-of-the-sinking-cost-zh/releases/latest)** · [中文使用说明](#中文使用说明) · [English guide](#english-guide) · [问题反馈 / Issues](https://github.com/xrtimvan-code/order-of-the-sinking-cost-zh/issues)

存档仅在浏览器本地读取，不会上传或修改。

Saves are read locally in your browser and are not uploaded or modified.

## 中文使用说明

### 1. 下载与解压

打开 [Releases](https://github.com/xrtimvan-code/order-of-the-sinking-cost-zh/releases/latest)，在 **Assets** 中下载名称包含 `portable.zip` 的文件，例如 `order-of-the-sinking-cost-zh-v1.0.0-portable.zip`。

请选择`portable.zip`成品包。页面自动生成的`Source code`压缩包供开发者使用。

右键 ZIP →“全部解压”，将压缩包解压到任意自己可写入的文件夹，例如：

```text
D:\Tools\SinkingStarViewer\
```

工具和游戏可以放在不同磁盘，无需修改游戏文件。请先完整解压，再打开网页。

压缩包包含：

| 文件 | 用途 |
| --- | --- |
| `打开中文版.html` | 完整单文件网页；地图、图标、脚本和样式均已嵌入 |
| `README.md` | 本中英双语使用说明 |
| `LICENSE` | MIT 软件许可证及版权声明 |
| `THIRD_PARTY_NOTICES.md`、`LICENSES/` | 上游、游戏相关内容及第三方来源说明 |
| `CHANGELOG.md` | 版本记录 |

### 2. 打开工具并连接游戏存档

1. 用较新版本的 **Chrome 或 Edge** 打开 `打开中文版.html`。如果双击没有用浏览器打开，右键文件 →“打开方式”→选择浏览器。使用成品无需安装 Node.js、Python 或其他依赖。
2. 首次打开显示“**示例：新游戏**”，表示尚未读取你的实际进度。
3. 点击“**打开存档文件夹**”，选择以下目录：

   ```text
   %USERPROFILE%\Saved Games\Order of the Sinking Star
   ```

   可以在资源管理器地址栏粘贴此路径，按回车查看。普通安装下，它展开为 `C:\Users\你的Windows用户名\Saved Games\Order of the Sinking Star`。
4. 若游戏使用了其他存档位置，选择实际包含存档子文件夹的目录。关键文件是 `Status.sokoban_status` 和 `overworld.history`；后者用于迷雾和世界状态。可选择整个存档根目录，也可选择包含这些文件的单个存档目录。
5. 存档读取后，可在左上角切换不同存档。工具只申请读取权限，不会改写存档。

工具需要读取存档目录，无需访问Steam游戏安装目录。

若文件夹选择器打不开，将存档文件夹从资源管理器拖入页面；也可以使用页面提供的“读取一次”选项。浏览器或嵌入环境可能限制持续读取。在一次性读取模式下，重新选择文件夹才能更新进度。

### 3. 与游戏配合使用

工具可放在第二块屏幕或窗口中，游戏照常运行。支持持续读取的浏览器会在工具页面可见时，每隔几秒重新读取存档；也可以点击存档旁的 **↻**。显示的是游戏**已写入磁盘**的状态，可能晚于游戏中尚未保存的操作。

网页资源已包含在成品中，使用时无需联网。打开GitHub或WikiTactics链接需要网络。游戏更新后，如遇读取或进度显示问题，请检查是否有新版工具。

### 4. 功能怎么用

| 功能 | 操作与含义 |
| --- | --- |
| 防剧透 | 默认开启，按已读取存档的迷雾状态隐藏未发现内容。建议保持开启；关闭或主动“揭示”会显示更多信息 |
| 目标 | 点击左侧目标，查看该目标相关的剩余关卡；当前推进目标带有标记 |
| 全收集与区域 | 点击“全收集”展开已显示的区域，点击中文区域名缩小范围；数量旁的 `+` 表示还有内容未显示，不代表完整总数 |
| 待完成 / 已解开 | 在右侧列表切换查看剩余内容或已解开的关卡 |
| 关卡列表 | “现在可玩”“暂时无法到达”“未解锁”按模型状态分组；“暂时无法到达”不等于游戏中必然无法到达 |
| 关卡详情 | 点击条目，在地图上定位，并查看需要先解开的关卡、解锁路线、开启条件及可解锁内容；“返回”或 Esc 回到列表 |
| 地图 | 拖动平移、滚轮缩放，也可用 `+` / `−`；已发现其他层级后可切换地图层级 |
| 在地图上寻找 | 点击类别名称列出尚未完成的对应内容，点击类别旁图标显示或隐藏该类地图标记 |
| 搜索 | 输入原始关卡标识的一部分，如 `heroes1_1`；中文区域请通过左侧区域列表筛选 |
| WikiTactics | 关卡详情中的英文攻略链接会离开本工具；外部网站有自己的剧透规则 |

“必需”“多选其一”“可选”表示关卡相对于所选目标的作用。解锁路线是模型建议，不是解谜答案，也不一定涵盖所有实际可行的走法。

### 5. 兼容性与反馈

- 成品不会上传存档、修改游戏或存档，也没有账号系统。浏览器可能在本机保存显示偏好和经授权的文件夹句柄，持续读取仍受浏览器权限控制。
- 此版面向桌面浏览器；Firefox、Safari 或受限环境可能只能单次读取。未读取 `overworld.history` 时，部分迷雾及可达性功能受限。
- 模型无法完整模拟所有推移、镜面、光束及移动物体行为。游戏版本变化也可能造成读取或推算差异。
- 反馈请使用 [Issues](https://github.com/xrtimvan-code/order-of-the-sinking-cost-zh/issues)，附版本、浏览器、复现步骤及适当遮挡的截图。**不要公开上传完整存档、用户名、私人路径、凭据或整包游戏文件。**

## English guide

### Download and extract

Open [Releases](https://github.com/xrtimvan-code/order-of-the-sinking-cost-zh/releases/latest) and download the asset containing **`portable.zip`**. The automatically generated **Source code** archives are for developers; they do not contain all generated data required to run or build the viewer.

Extract the ZIP into any writable folder, for example `D:\Tools\SinkingStarViewer\`. **Do not install it into the Steam game folder or replace any game files.** Open the extracted `打开中文版.html` in a recent Chrome or Edge browser. No Node.js, Python, installer, or online account is required for the portable build. The viewer interface is Simplified Chinese; this README provides instructions in both languages. For the English viewer, see the [upstream project](https://github.com/xPaw/order-of-the-sinking-cost).

### Select your saves

The initial “示例：新游戏” screen is an example, not your actual progress. Click **打开存档文件夹** (Open save folder) and choose:

```text
%USERPROFILE%\Saved Games\Order of the Sinking Star
```

Paste that path into File Explorer to locate it. If you use a different save location, select the actual save root or a campaign folder containing `Status.sokoban_status` and `overworld.history`. The latter supplies fog and world state. **The Steam installation folder is not the save folder.**

If the folder picker is unavailable, drag the save folder onto the page or use the offered one-time snapshot option. A snapshot does not update automatically; reopen the folder to refresh it. You can select another campaign using the menu in the top-left corner.

### Use alongside the game

Keep the viewer in another window or on a second screen while playing. With a live folder, it rereads saves every few seconds while visible; **↻** refreshes manually. It shows data that the game has written to disk, which may lag behind unsaved actions. The portable page includes its resources and needs no network connection. Opening GitHub or WikiTactics links does require network access.

| Chinese control | Meaning and use |
| --- | --- |
| 防剧透 | Spoiler protection; enabled by default. Leave it on to hide undiscovered content according to your save's fog |
| 目标 / 全收集 | Select a goal or expand Completionist to browse shown areas |
| 待完成 / 已解开 | Switch between remaining and solved levels |
| 现在可玩 / 暂时无法到达 / 未解锁 | Play now / Not reachable yet / Locked; reachability is approximate |
| 解锁路线 | Suggested prerequisite chain; select a level to locate it on the map and inspect requirements |
| 在地图上寻找 | Select a category to list its items; use its adjacent icon to toggle map markers |
| 搜索关卡 | Search by part of the original internal level identifier; use area filters for Chinese area names |
| 返回 | Back to the list; Esc also closes a detail panel |

Drag to pan and scroll or use `+` / `−` to zoom. Other map layers become available when revealed. Counts with `+` indicate more hidden content, not a complete total. Required / One of several / Optional labels relate to the selected goal. Opening an external walkthrough may reveal spoilers beyond the viewer's controls.

### Privacy and limitations

The release build reads selected saves locally and does not upload or modify them. The browser may remember display preferences and a folder handle on your device, subject to browser permissions. No game-installation access is needed to use a prebuilt release.

Reachability does not fully model every pushing, mirror, beam, or moving-object interaction. Game updates can change save formats or game data. “Not reachable yet” is not proof that a location is unreachable in the game. Layout targets desktop browsers; Firefox, Safari, and restricted environments may offer snapshot loading only.

Report reproducible problems through [Issues](https://github.com/xrtimvan-code/order-of-the-sinking-cost-zh/issues). Include the release version, browser, reproduction steps, and redacted screenshots. Do not post complete saves, credentials, private paths, or game packages publicly. See [SECURITY.md](https://github.com/xrtimvan-code/order-of-the-sinking-cost-zh/blob/main/SECURITY.md) for security reports and [CONTRIBUTING.md](https://github.com/xrtimvan-code/order-of-the-sinking-cost-zh/blob/main/CONTRIBUTING.md) for contribution guidance.

## 开发构建 / Building from source

从源码构建需要Node.js 24、npm，以及自己游戏中的`data/levels.package`和`data/strings/s-cn.localization`，两份文件应来自同一游戏版本。

Building requires Node.js 24, npm, and your own `data/levels.package` and `data/strings/s-cn.localization` from the same game version.

```powershell
npm ci
$env:SOKO_GAME = 'E:\steam\steamapps\common\Order of the Sinking Star'
npm run data
npm run build:standalone
```

首次生成数据可能耗时数分钟。

Initial data generation can take several minutes.

| Command | Purpose |
| --- | --- |
| `npm run dev` | 开发预览 / Development preview at `http://127.0.0.1:8765/` |
| `npm run build` | 可静态托管的 `dist/` / Static site in `dist/` |
| `npm run build:standalone` | 生成 `dist/standalone.html` / Generate a self-contained portable HTML |
| `npm test -- --run --hookTimeout=120000` | 运行测试；缺少真实存档的用例会跳过 / Tests; real-save cases skip when fixtures are unavailable |
| `npm run typecheck` / `npm run lint` | 类型与静态检查 / Type checking and lint |

构建流程见[scripts/README.md](https://github.com/xrtimvan-code/order-of-the-sinking-cost-zh/blob/main/scripts/README.md)。技术文档保留英文。`npm run deploy`使用上游Cloudflare配置，自行部署前需修改账号和域名。

See [scripts/README.md](https://github.com/xrtimvan-code/order-of-the-sinking-cost-zh/blob/main/scripts/README.md) for the build pipeline. Technical documentation remains in English. Configure your own account and domain before using the upstream Cloudflare deployment configuration.

## 来源与许可 / Attribution and license

本项目基于Pavel Djundik（xPaw）的[order-of-the-sinking-cost](https://github.com/xPaw/order-of-the-sinking-cost)，保留原作者署名和Git历史；简体中文版本由[xrtimvan-code](https://github.com/xrtimvan-code)维护。上游项目说明见[README.upstream.md](https://github.com/xrtimvan-code/order-of-the-sinking-cost-zh/blob/main/README.upstream.md)。

软件代码采用[MIT许可证](LICENSE)。地图、图标和游戏相关文本的权利归各自权利人，详见[第三方来源说明](THIRD_PARTY_NOTICES.md)。本项目不附带游戏可执行文件、原始关卡包、完整语言包或玩家存档，与游戏开发商及发行商无隶属关系。

Based on Pavel Djundik's (xPaw) [order-of-the-sinking-cost](https://github.com/xPaw/order-of-the-sinking-cost), with upstream attribution and history preserved. The Simplified Chinese edition is maintained by [xrtimvan-code](https://github.com/xrtimvan-code).

Software code is licensed under the [MIT License](LICENSE). Game-related artwork and text remain subject to their respective rights; see [third-party notices](THIRD_PARTY_NOTICES.md). This project is not affiliated with the game's developers or publishers and does not distribute game executables, raw level packages, full localization files, or player saves.
