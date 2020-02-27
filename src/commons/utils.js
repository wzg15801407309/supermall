/**
 * 获取最小值到最大值之前的整数随机数
 */
export function getRandomNum(Min, Max) {
  var Range = Max - Min;
  var Rand = Math.random();
  return Min + Math.round(Rand * Range);
}

 /**
  * 防抖函数的实现：主要是让加载的图片刷新没有那么频繁
  * 参数一：要执行的函数回调 
  * 参数二：回调时间
  * 
  * 函数放到一个js文件中以后的项目可以用
*/
export function debounce(fn,wait){
      //设置一个定时器
      let timer=null;
      return (...arge)=>{
        if(timer) clearTimeout(timer);
        timer=setTimeout(() =>{
          fn.apply(this,arge);
        },wait);
      }
}