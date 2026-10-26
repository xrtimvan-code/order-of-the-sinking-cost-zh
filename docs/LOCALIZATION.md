# Localization verification / 本地化核对

Verified on 2026-10-27 using user-supplied game files; this is not a claim of compatibility with every game version.

| Check | Result |
| --- | --- |
| English localization keys | 935 |
| Simplified Chinese localization keys | 931 |
| Used area labels matched to official Chinese text | 82 / 82 |
| Used area keys present in both supplied files | 82 / 82 |
| Rank names matched to official Chinese text | 6 / 6 |
| Overworld level identifiers checked | 920 |
| Official level title mappings found under those identifiers or as exact values | 0 |

The four English-only keys are unrelated game sign/system strings that the viewer does not display. They do not leave a required area or rank label untranslated. Neither language file provides a title mapping for the viewer's internal level identifiers. Technical documentation from upstream likewise describes level names as internal names. Therefore those identifiers are retained rather than presenting invented translations as official titles.

英文文件比中文文件多出的四个键属于工具不显示的游戏告示/系统文本，不涉及本工具使用的区域或称号。本次逐键核对没有发现需修正的官方区域名或称号；工具自行生成的界面及路线文案则属于本项目翻译，不是从游戏中直接照搬。

Achievement titles remain viewer translations rather than verified Steam Simplified Chinese titles. Baked map lettering is unchanged. H/M/S/B tower letters are retained for correspondence with upstream resources. See the README for usage and limitations.

Full localization files and raw game packages are not committed or distributed. The software's MIT license does not relicense the original game content; see `THIRD_PARTY_NOTICES.md`.
