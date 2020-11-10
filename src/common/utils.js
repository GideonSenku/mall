export function debounce(func, delay) { // 防抖函数
  let timer = null
  if (timer) clearInterval(timer)
  return function(...args) {
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}