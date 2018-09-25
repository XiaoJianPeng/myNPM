const {Iterator} = require('../iterator')
const arr = [1,2,3,4,5,6,7,8,9,10]
const iterator = new Iterator(arr,3)
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
