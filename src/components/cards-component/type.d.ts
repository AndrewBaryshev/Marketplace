export interface ICategory {
  id: number
  name: string
  slug: string
  get_image: string
  created: string
  updated: string
}

export interface IDataFetch {
  id: number
  category: ICategory
  name: string
  quantity: number
  price: string
  slug: string
  short_description: string
  long_description: string
  get_image: string
}
