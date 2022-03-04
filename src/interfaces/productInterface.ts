export interface Product {
  name: string,
  amount: string,
}

export interface IprodComp extends Product {
  id: number,
  orderId?: number,
  message?: string,
}