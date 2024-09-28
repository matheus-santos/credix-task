class OrderClient {
  private apiUrl = 'http://127.0.0.1:3001/orders';

  async createOrder(payload: object) {
    const res = await fetch(this.apiUrl, {
        method: 'POST',
        body: JSON.stringify(payload)

      }
    );
    return res.json();
  }
}

export const orderClient = new OrderClient();
