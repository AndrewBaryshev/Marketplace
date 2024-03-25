import { makeAutoObservable } from "mobx"

class CartProducts {
  data: any[] = []
  open: boolean = false
  constructor() {
    makeAutoObservable(this)
  }

  _findElemById(id: number) {
    for(const elem of this.data) {
      if(elem.id === id) {
        return {
          curr: this.data.indexOf(elem),
          flag: true
        }
      }
    }
    return {
      curr: null,
      flag: false
    }
  }

  pushData(product: any) {
    const index = this._findElemById(product.id)
    if(index.flag) {
      this.data[index.curr].count += 1
      console.log("awdazzc ", this.data)
    } else {
      this.data.push({...product, count: 1})
    }
  }

  onClose() {
    this.open = false
    console.log(this.open)
  }

  onOpen() {
    this.open = true
    console.log(this.open)
  }

  onPlusAmount(id: number) {
    const index = this._findElemById(id)
    this.data[index.curr].count += 1
  }

  onMinusAmount(id: number) {
    const index = this._findElemById(id)
    if(this.data[index.curr].count <= 1) {
      this.data.splice(index.curr, 1)
      return
    }
    this.data[index.curr].count -= 1
  }

}

export default new CartProducts()
