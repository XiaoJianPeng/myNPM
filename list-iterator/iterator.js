class Iterator {
  constructor(arr, limit) {
    this.arr = arr
    this.limit = limit
    this.currentIndex = 0
    this.next = function() {
      let result = []
      if (this.currentIndex + this.limit <= this.arr.length) {
        result = this.arr.slice(this.currentIndex, this.currentIndex + this.limit)
      } else if (this.currentIndex < this.arr.length) {
        result = this.arr.slice(this.currentIndex, this.arr.length)
      }
      this.currentIndex += this.limit
      return result
    }
  }
}

exports.Iterator = Iterator
