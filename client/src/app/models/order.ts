export interface Order{
    id: number
    basketId: string
    shippingAddress: ShippingAddress
    orderDate: Date
    orderStatus: string
    subTotal: number
    deliveryFee: number
    total: number
}

export interface ShippingAddress{
    name: string
    address1: string
    address2: string
    city: string
    state: string
    zipcode: string
    country: string
}