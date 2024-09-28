import { checkoutClient } from '@lib/checkoutClient';
import { useEffect, useState } from 'react';
import { ICheckout } from 'react-coding-interview-shared/models';

type CheckoutState = {
  fetching: boolean;
  data: ICheckout;
};

export type CheckoutResult = [CheckoutState];

export function useCheckout(checkoutId: number): CheckoutResult {
  const [state, setState] = useState<CheckoutState>({
    fetching: false,
    data: null,
  });

  const initializePage = async () => {
    if (!state.fetching) {

      setState((s) => ({ ...s, fetching: true }));

      const resp = await checkoutClient.find(checkoutId);

      setState({
        fetching: false,
        data: resp,
      });
    }
  };

  useEffect(() => {
    initializePage();
  }, []);

  return [state];
}
