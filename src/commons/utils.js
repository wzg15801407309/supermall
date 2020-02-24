// 获取最小值到最大值之前的整数随机数
export function getRandomNum(Min, Max) {
  var Range = Max - Min;
  var Rand = Math.random();
  return Min + Math.round(Rand * Range);
}
