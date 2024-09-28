import { ICheckout } from "react-coding-interview-shared/models";

export const stringifyShippingLocation = (data: ICheckout) => {

    if (!data?.shippingLocation) return '';

    const {
        address1,
        address2,
        city,
        region,
        postalCode,
        country
    } = data?.shippingLocation;

    return `${address1}, ${address2} - ${city}, ${region} - ${postalCode}, ${country}`;
}