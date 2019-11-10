const axios = require('axios')

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
  }，

  constructor(api,params,limit){
    this.page = 1
    this.limit = limit
    this.instance = axios.create({
      baseURL: api,
      timeout: 10000,
    })
    this.next = function(){
      return this.get(api, params, limit)
    }
  }

  /**
   * @param {string} api
   * @param {object} params
   * @return
   * {
   *  done:boolean,
   *  total:number,
   *  value:array
   * }
   */
  async get(api, params) {
    const result = await this.instance.get(api, {
      page: this.page,
      size: this.limit,
      ...params
    })
    const pageData = result.data
    const total = result.total
    if (pageData && pageData.length > 0) {
      currentPage++
    }
    const done = pageData.length === 0
    return {
      total,
      done,
      value: pageData,
    }
  }

}

exports.Iterator = Iterator
