# mall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 记录学习本项目中的问题

1. `Vue`中`Key`值的作用
> 在v-if中使用key
```
由于Vue尽可能高效的渲染元素，通常会复用已有元素而不是从头开始渲染。
因此当我们使用v-if来实现元素切换的时候，如果切换前后含有相同类型的
元素，那么这个元素就会被复用。如果是相同的input元素，那么切换前后
用户的输入不会被清除掉，这样是不符合需求的。因此我们可以通过使用key
来唯一标识一个元素，这个情况下，使用Key的元素不会被复用。

这个时候key的作用是用来标识一个独立的元素。
```

> 在v-for中使用key
```
用v-for更新已渲染过的元素列表时，它默认使用“就地复用”策略。
如果数据项的顺序发生了改变，Vue不会移动DOM元素来匹配数据项
的顺序，而是简单复用此处的每个元素。因此通过为每个列表项提供
一个key值来以便Vue跟踪元素的身份，从而高效的实现复用。

这个时候key的作用是为了高效的更新渲染虚拟DOM。
```

> 综上所述：关键是实际开发过程中是否需要**复用策略**，视情况而定使用key

2. 开发中使用预定义变量保存一个默认值，方便状态管理
   - tabcontrol的切换：使用`currtentIndex`保存当前所选tab
     ```
     :class="{active: currentIndex === index}
     ```
   - 

3. 样式设置文字过多显示`...`
    ```css
    .show-ellipsis {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    ```

4. 自定义监听事件,不写参数默认传递子组件参数
   > 在商品显示流行、新款、精选时用到 `$emit('tabClick',index)`传递子组件信息

5. Vue的生命周期函数
   > 在mounted挂载后，才能拿到DOM节点

6. 组件的事件监听
   > 若要监听组件上的某些原生事件，可以在事件上加上`native`修饰符 ---> `BackTop应用场景`

7. 组件`props`参数若为驼峰命名，则使用时需要改为`-`

8. 事件总线(非父子组件通信)
   > 组件之间的层叠关系过多，但又需要监听相互之间的事件，则可以使用**事件总线**
   ```javascript
   // main.js
   vue.prototype.$bus = new Vue()

   // 某个组件内的事件
   this.$bus.$emit('eventName')

   // 其他组件上监听
   this.$bus.$on('eventName')
   ```

9. 防抖debounce函数
   > 对于refresh非常频繁的问题，进行防抖操作

10. 如何拿到子组件的`offsetTop`?
   > `this.$refs.componentName.$el.offsetTop`
   > 在tabControl实际应用中记录`offsetTop`高度值，以便于在Scroll中使用
11. 在`Better-Scroll`中控制管理下，单独控制`TabControl`吸附
   > 在此场景下很难达到预期的效果,可新增一个`TabControl`脱离`BS`的管理
   1) 记录`BS`中的`TabControl`的`offsetTop`
   2) `BS`的滚动距离与`offsetTop`进行比较
   3) 使用`v-show`控制其显示与隐藏(距离达到则显示，未到达则隐藏)

12. 在数据想过于复杂时，可以创建一个类来对数据进行过滤
   > 在DetailBaseInfo中使用该项原则
   ```js
   export class Goods {
   constructor(itemInfo, columns, services) {
      this.title = itemInfo.title
      this.desc = itemInfo.desc
      this.newPrice = itemInfo.price
      this.oldPrice = itemInfo.oldPrice
      this.discount = itemInfo.discountDesc
      this.columns = columns
      this.services = services
      this.realPrice = itemInfo.lowNowPrice
     }
   }
   ```