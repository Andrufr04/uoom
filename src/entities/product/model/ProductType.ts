type ProductType = {
    id:           string,
    imgUrl:       string,
    price:        number,
    name:         string,
    rating:       number,
    reviewAmount: number,
    slug:         string,
    stock?:       number,
    description?: string,
    reviews?:      Review[]
}

type Review = {
    name:         string,
    message:      string,
    stars:        number
}

export type { ProductType, Review }