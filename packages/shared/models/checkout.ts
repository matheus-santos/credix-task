import { ICheckoutItem } from "./checkout-item";
import { IShippingLocation } from "./shipping-location";

export interface ICheckout {
  id: number;
  userId: number;
  userInfoId: number;
  subtotal: number;
  discounts: number;
  tax: number;
  shipping: number;
  total: number;
  items: Array<ICheckoutItem>;
  shippingLocation: IShippingLocation;
}
