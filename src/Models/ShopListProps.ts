import { FoodListProps } from "./FoodListProps"
import { ProductProps } from "./ProductProps"
import { ReceiptProps } from "./ReceiptProps"

export interface ShopListProps {
    shopListId: number,
    createdBy: string,
    shopListName?: string,
    shopListDescription?: string
    foodList: FoodListProps
    products: ProductProps[]
    receipt: ReceiptProps
}