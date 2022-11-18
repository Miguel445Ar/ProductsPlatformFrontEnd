export interface IOrder {
    id: number,
    totalPrice: number,
    deliveryDate: string,
    requestedUnits: number,
    product: any
}