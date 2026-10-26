# Order of the Sinking Cost · 简体中文版

《Order of the Sinking Star》的非官方、无剧透进度查看器，基于 [xPaw/order-of-the-sinking-cost](https://github.com/xPaw/order-of-the-sinking-cost) 汉化。

指定存档文件夹后，可查看尚未完成的内容、接下来能玩的关卡及解锁路线。存档只在浏览器本地读取，不会上传或修改。

[English upstream documentation](README.en.md) · [原项目](https://github.com/xPaw/order-of-the-sinking-cost)

## 使用方法

下载已构建的单文件版本 `standalone.html`，用最新版 Chrome 或 Edge 打开。无需安装 Node.js 或游戏，也不需要联网下载页面资源。

1. 点击“打开存档文件夹”，或将文件夹拖到页面上。
2. 选择存档目录，而非 Steam 游戏安装目录：

   ```text
   %USERPROFILE%\Saved Games\Order of the Sinking Star
   ```

3. 保持“防剧透”开启。可点击目标或“全收集”查看关卡，点击关卡查看所需条件和解锁路线。

页面初次打开时显示“示例：新游戏”，这是示例状态，不是已读取你的存档。若文件夹选择器受到浏览器或嵌入页面限制，可拖入文件夹，或选择“读取一次”。单次读取模式不会自动更新进度，需要重新打开文件夹。

## 汉化范围

- 界面按钮、筛选、目标、地图标记、统计、动态解锁提示、可访问性标签及读取错误提示。
- 区域名使用游戏 `data/strings/s-cn.localization` 的官方简体中文文本，称号也与该文件一致。
- 关卡保留内部英文名称，如 `heroes1_1`，用于与存档和原攻略对应；原项目没有游戏中的中文关卡标题可供映射。
- 地图底图中的英文美术字保持原样；叠加在地图上的区域标签及提示已汉化。
- 高塔组合保留 H/M/S/B 字母，分别表示英雄、魔镜、飞石和光束发射器。成就标题为本查看器译名，尚未核对 Steam 官方中文成就标题。
- 防剧透规则沿用上游：开启时，迷雾中的名称、数量、区域、层级、高塔、成就及未发现机制均按存档状态隐藏。主动点击“揭示”或关闭“防剧透”会显示更多内容。

## 功能与局限

支持目标进度、关卡状态、地图、解锁路线、收集品及区域完成度。支持持续读取的浏览器会定时刷新存档；Firefox、Safari 或受限环境可能只能读取快照。

可达性是近似推算，未完整模拟所有游戏机制。“暂时无法到达”不表示游戏中一定无法到达。游戏更新改变存档格式或关卡数据后，需要重新生成数据并重新验证。布局以桌面浏览器为主。

上游说明：原项目的代码和逆向分析由 AI 完成，并经人类指导、审阅及测试，仍可能误判游戏机制。本汉化也使用 AI 辅助，不代表游戏官方。

## 从源码构建

需要 Node.js 24 和 npm。使用自己拥有的游戏文件；不要把完整游戏语言包、关卡包或个人存档提交到仓库。

```powershell
npm ci
$env:SOKO_GAME = 'E:\steam\steamapps\common\Order of the Sinking Star'
npm run data
npm run build:standalone
```

生成数据至少需要游戏的 `data/levels.package` 和 `data/strings/s-cn.localization`；已提交的地图、图标及 schema 由上游提供。首次 `npm run data` 的房间搜索可能耗时数分钟。

- `npm run dev`：本地开发预览，地址为 `http://127.0.0.1:8765/`。
- `npm run build`：生成可静态托管的 `dist/`。资源采用相对路径，支持部署到 GitHub Pages 的仓库子目录。
- `npm run build:standalone`：另生成 `dist/standalone.html`，将脚本、样式、地图和图标打包为单个文件，可直接打开。
- `npm test -- --run`、`npm run typecheck`、`npm run lint`：运行测试和检查。有些上游测试需要真实存档，仅在设置 `SOKO_SAVES` 时运行。

详细生成流程见 [scripts/README.md](scripts/README.md)，技术文档保留英文。`npm run deploy` 及 `wrangler.jsonc` 为上游 Cloudflare 部署配置，发布到自己的站点前应改为自己的配置。

## 许可与来源

代码沿用 [MIT 许可证](LICENSE)，保留原作者 Pavel Djundik 的版权声明。允许在遵守许可证的前提下修改、发布和再分发。本汉化仓库不包含游戏可执行文件、完整语言包、关卡包或玩家存档；构建网页只嵌入运行所需的派生数据、地图和简短显示名称。

游戏名称及相关内容归各自权利人所有。此工具及其汉化与游戏开发商、发行商无隶属关系。
