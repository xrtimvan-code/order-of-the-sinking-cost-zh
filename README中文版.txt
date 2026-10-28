沉星之序进度查看器 · 简体中文版

《沉星之序》（Order of the Sinking Star）的非官方中文进度查看器。读取存档后，可查看剩余内容、可玩关卡和解锁路线。基于 xPaw/order-of-the-sinking-cost（https://github.com/xPaw/order-of-the-sinking-cost）。


下载：https://github.com/xrtimvan-code/order-of-the-sinking-cost-zh/releases/latest
问题反馈：https://github.com/xrtimvan-code/order-of-the-sinking-cost-zh/issues

存档仅在浏览器本地读取，不会上传或修改。


中文使用说明

1. 下载与解压

打开 Releases（https://github.com/xrtimvan-code/order-of-the-sinking-cost-zh/releases/latest），在 Assets 中下载名称包含 portable.zip 的文件，例如 order-of-the-sinking-cost-zh-v1.0.0-portable.zip。

请选择portable.zip成品包。页面自动生成的Source code压缩包供开发者使用。

右键 ZIP →“全部解压”，将压缩包解压到任意自己可写入的文件夹，例如：
D:\Tools\SinkingStarViewer\

工具和游戏可以放在不同磁盘，无需修改游戏文件。请先完整解压，再打开网页。

压缩包包含：

文件：用途
打开中文版.html：完整单文件网页；地图、图标、脚本和样式均已嵌入
README中文版.txt：完整中文使用说明
LICENSE：MIT 软件许可证及版权声明
THIRD_PARTY_NOTICES.md、LICENSES/：上游、游戏相关内容及第三方来源说明
CHANGELOG.md：版本记录

2. 打开工具并连接游戏存档

1. 用较新版本的 Chrome 或 Edge 打开 打开中文版.html。如果双击没有用浏览器打开，右键文件 →“打开方式”→选择浏览器。使用成品无需安装 Node.js、Python 或其他依赖。
2. 首次打开显示“示例：新游戏”，表示尚未读取你的实际进度。
3. 点击“打开存档文件夹”，选择以下目录：
   C:\Users\你的用户名\保存的游戏\Order of the Sinking Star

   请将“你的用户名”替换为自己的 Windows 用户名，再在资源管理器中找到此目录。
4. 若游戏使用了其他存档位置，选择实际包含存档子文件夹的目录。关键文件是 Status.sokoban_status 和 overworld.history；后者用于迷雾和世界状态。可选择整个存档根目录，也可选择包含这些文件的单个存档目录。
5. 存档读取后，可在左上角切换不同存档。工具只申请读取权限，不会改写存档。

工具需要读取存档目录，无需访问Steam游戏安装目录。

若文件夹选择器打不开，将存档文件夹从资源管理器拖入页面；也可以使用页面提供的“读取一次”选项。浏览器或嵌入环境可能限制持续读取。在一次性读取模式下，重新选择文件夹才能更新进度。

3. 与游戏配合使用

工具可放在第二块屏幕或窗口中，游戏照常运行。支持持续读取的浏览器会在工具页面可见时，每隔几秒重新读取存档；也可以点击存档旁的 ↻。显示的是游戏已写入磁盘的状态，可能晚于游戏中尚未保存的操作。

网页资源已包含在成品中，使用时无需联网。打开GitHub或WikiTactics链接需要网络。游戏更新后，如遇读取或进度显示问题，请检查是否有新版工具。

4. 功能怎么用

功能：操作与含义
防剧透：默认开启，按已读取存档的迷雾状态隐藏未发现内容。建议保持开启；关闭或主动“揭示”会显示更多信息
目标：点击左侧目标，查看该目标相关的剩余关卡；当前推进目标带有标记
全收集与区域：点击“全收集”展开已显示的区域，点击中文区域名缩小范围；数量旁的 + 表示还有内容未显示，不代表完整总数
待完成 / 已解开：在右侧列表切换查看剩余内容或已解开的关卡
关卡列表：“现在可玩”“暂时无法到达”“未解锁”按模型状态分组；“暂时无法到达”不等于游戏中必然无法到达
关卡详情：点击条目，在地图上定位，并查看需要先解开的关卡、解锁路线、开启条件及可解锁内容；“返回”或 Esc 回到列表
地图：拖动平移、滚轮缩放，也可用 + / −；已发现其他层级后可切换地图层级
在地图上寻找：点击类别名称列出尚未完成的对应内容，点击类别旁图标显示或隐藏该类地图标记
搜索：输入原始关卡标识的一部分，如 heroes1_1；中文区域请通过左侧区域列表筛选
WikiTactics：关卡详情中的英文攻略链接会离开本工具；外部网站有自己的剧透规则

“必需”“多选其一”“可选”表示关卡相对于所选目标的作用。解锁路线是模型建议，不是解谜答案，也不一定涵盖所有实际可行的走法。

5. 兼容性与反馈

- 成品不会上传存档、修改游戏或存档，也没有账号系统。浏览器可能在本机保存显示偏好和经授权的文件夹句柄，持续读取仍受浏览器权限控制。
- 此版面向桌面浏览器；Firefox、Safari 或受限环境可能只能单次读取。未读取 overworld.history 时，部分迷雾及可达性功能受限。
- 模型无法完整模拟所有推移、镜面、光束及移动物体行为。游戏版本变化也可能造成读取或推算差异。
- 反馈请使用 Issues（https://github.com/xrtimvan-code/order-of-the-sinking-cost-zh/issues），附版本、浏览器、复现步骤及适当遮挡的截图。不要公开上传完整存档、用户名、私人路径、凭据或整包游戏文件。


AI使用声明

本简体中文版本的界面翻译及新增、修订的文档由OpenAI Codex生成，并根据用户反馈修改，并非由人工译者或文档作者撰写。游戏官方中文文本及上游原有文档另有来源，不属于本声明所指的AI创作内容。

来源与许可

本项目基于Pavel Djundik（xPaw）的order-of-the-sinking-cost（https://github.com/xPaw/order-of-the-sinking-cost），保留原作者署名和Git历史；简体中文版本由xrtimvan-code（https://github.com/xrtimvan-code）维护。上游项目说明见readme.md（https://github.com/xrtimvan-code/order-of-the-sinking-cost-zh/blob/main/readme.md）。

软件代码采用MIT许可证（LICENSE）。地图、图标和游戏相关文本的权利归各自权利人，详见第三方来源说明（THIRD_PARTY_NOTICES.md）。本项目不附带游戏可执行文件、原始关卡包、完整语言包或玩家存档，与游戏开发商及发行商无隶属关系。
