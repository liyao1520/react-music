// [00:00.000] 作词 : 小驴
// [00:01.000] 作曲 : 张尧
// [00:02.000] 编曲 : 闫实@北京录顶技Studios
// [00:03.000] 制作人 : 鲍锐@北京录顶技Studios
// [00:05.52]出品：网易云音乐×云上工作室
// [00:14.91]也许偶尔如同声波
// [00:18.27]潜泳进太空
const re = /\[(\d{2}):(\d{2}).(\d{2,3})\](.*?)$/;
export function parseLyric(LyricString) {
  const lineStrings = LyricString.split("\n");
  const lyricList = [];
  for (let line of lineStrings) {
    if (line === "") continue;
    const result = re.exec(line);
    if (!result) continue;
    const time1 = result[1] * 60 * 1000;
    const time2 = result[2] * 1000;
    const time3 = result[3].length === 3 ? result[3] * 1 : result[3] * 10;
    const time = time1 + time2 + time3;
    const content = result[4].trim();
    if (content !== "") {
      lyricList.push({
        time,
        content,
      });
    }
  }

  return lyricList;
}
