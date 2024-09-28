class CheckoutClient {
  private apiUrl = 'http://127.0.0.1:3001/checkout';

  async find(checkoutId: number) {
    const res = await fetch(
      `${this.apiUrl}/${checkoutId}`,
    );

    return res.json();
  }
}

export const checkoutClient = new CheckoutClient();
