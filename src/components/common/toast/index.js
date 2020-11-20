import Toast from './Toast'
const obj = {}

obj.install = (Vue) => {
  console.log('toast install')
  // 1. 创建组件构造器并实例化
  const toastPlugin = Vue.extend(Toast)
  // 2. new的方式，根据组件构造器，可以创建一个组件对象
  const toast = new toastPlugin()
  // 3. 将组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))
  // 4. toast.$el就是对应的div
  document.body.appendChild(toast.$el)
  // 5. 挂载到原型上
  Vue.prototype.$toast = toast
}

export default obj
