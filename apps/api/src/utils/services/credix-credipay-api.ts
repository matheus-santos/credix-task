const CREDIX_PAY_URL = 'https://api.pre.credix.finance';
const CREDIX_PAY_VERSION = 'v1';

export class CredixCrediPayApi {
  static async postCreateOrder(payload): Promise<Response> {
    return fetch(`${CREDIX_PAY_URL}/${CREDIX_PAY_VERSION}/orders`, {
      method: 'POST',
      headers: {
        'X-CREDIPAY-API-KEY':
          'OTAyNjUyNmUtMGNmZi00NjdmLTg2YzYtY2YxNDc5MjhlMTIyOml3V093ME52V2dUdVp6eUd5SWdqKysybXFGNHFRUXZCUWZOcnRIZnVtZHM9',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  }
}
