type ProductType = {
    id:           string,
    imgUrl:       string,
    price:        number,
    name:         string,
    rating:       number,
    reviewAmount: number,
    slug:         string,
    stock?:       number
}

export type { ProductType }