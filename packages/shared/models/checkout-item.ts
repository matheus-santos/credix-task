export interface ICheckoutItem {
    id: number;
    checkoutId: number;
    productId: number;
    productName: string;
    imageHref: string;
    quantity: number;
    total: number;
}