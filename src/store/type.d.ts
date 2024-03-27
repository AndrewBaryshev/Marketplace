export interface IProduct {
  id: number
  name: string
  price: string
}

export interface IData extends IProduct {
  count: number
}
