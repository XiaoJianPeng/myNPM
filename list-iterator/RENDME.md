## list-iterator

一个简单实用的数组迭代器，可以自定义步长，适用于分页加载数组数据。数组支持简单数组如`[1,2,3,4,5,6,7,8,9,10]`,
也支持复杂的对象数组如
```
[
    {name:'aa', age: 19},
    {name:'bb', age: 23},
    {name:'cc', age: 67},
]

```

### 安装命令

`npm install list-iterator`

### 调用示例

根据你的数组和你所需的步长（limit）初始化一个迭代器对象iterator，
每次调用next方法，获取下一页的数据。
```
const {Iterator} = require('../iterator')
const arr = [1,2,3,4,5,6,7,8,9,10]
const iterator = new Iterator(arr,3)
iterator.next()
```
[有兴趣了解js中的迭代器模式的朋友可以点击这里](https://juejin.im/entry/5b815e97e51d4538dc2bf673/detail)

### 升级计划
支持迭代发起网络请求
