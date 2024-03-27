import { makeAutoObservable } from "mobx"
import { IData, IProduct } from "./type"

class CartProducts {
  data: IData[] = []
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

  pushData(product: IProduct) {
    const index = this._findElemById(product.id)
    if(index.flag) {
      this.data[index.curr].count += 1
    } else {
      this.data.push({...product, count: 1})
    }
  }

  onClose() {
    this.open = false
  }

  onOpen() {
    this.open = true
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
