import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Card,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { useCheckout } from '@hooks/useCheckout';
import { orderClient } from '@lib/orderClient';
import { stringifyShippingLocation } from '@utils/stringifyShippingLocation';
import { SuccessDialog } from '@components/molecules';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loading } from '@components/atoms/loading';

export const CheckoutPage: React.FC = () => {
  /**
   * Navigator
   */
  const navigate = useNavigate();

  /**
   * Order creation life cycle
   */
  const [success, setSuccess] = useState(false);
  const [creating, setCreating] = useState(false);

  const createOrder = async () => {
    setCreating(true);

    const response = await orderClient.createOrder({
      id: 1,
      checkoutId: data.id,
      userId: 1,
      userInfoId: 1,
    });

    setCreating(false);

    setSuccess(true);
  };

  const handleClose = () => {
    setSuccess(false);
    navigate('/');
  };

  /**
   * Hook to fetch Checkout data
   */
  const [{ data, fetching }] = useCheckout(1);

  /**
   * Money Formatter
   */
  const money = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <Box p={4} overflow="auto">
      <Loading loading={fetching} />

      <Grid container spacing={2}>
        <Grid item xs={8}>
          {/* -------------------- Checkout Items -------------------- */}
          <Box>
            <Box sx={{ p: 1 }}>
              <Typography variant="h4">Items</Typography>
            </Box>

            {data?.items.map((checkoutItem) => (
              <Card sx={{ m: 1, p: 1 }} variant="outlined">
                <Box display="flex" flexDirection="column" alignItems="left">
                  <Avatar src={checkoutItem.imageHref} />

                  <Typography variant="subtitle1" lineHeight="1rem">
                    {checkoutItem.productName}
                  </Typography>

                  <Typography variant="caption" color="text.secondary">
                    R$ {checkoutItem.total}
                  </Typography>
                </Box>
              </Card>
            ))}
          </Box>

          {/* -------------------- CheckoutAddress -------------------- */}
          <Box>
            <Box sx={{ p: 1 }}>
              <Typography variant="h4">Endereço</Typography>
            </Box>

            <Card sx={{ m: 1, p: 1 }} variant="outlined">
              <Box display="flex" flexDirection="column" alignItems="left">
                <Typography variant="subtitle1" lineHeight="1rem">
                  {stringifyShippingLocation(data)}
                </Typography>
              </Box>
            </Card>
          </Box>

          {/* -------------------- CheckoutPaymentDetails -------------------- */}
          <Box>
            <Box sx={{ p: 1 }}>
              <Typography variant="h4">Detalhes do pagamento</Typography>
            </Box>

            <Card sx={{ m: 1, p: 1 }} variant="outlined">
              <Box display="flex" flexDirection="column" alignItems="left">
                <Typography variant="subtitle1" lineHeight="1rem">
                  Pix em 30 dias - Compre agora, pague depois
                  <ul>
                    <li>Sem juros.</li>
                    <li>Mesmo preço. Mais tempo para pagar.</li>
                    <li>Pague com facilidade usando Pix após 30 dias.</li>
                  </ul>
                </Typography>
              </Box>
            </Card>
          </Box>
        </Grid>

        <Grid item xs={4}>
          {/* ---------- CheckoutPaymentResume -------------------- */}
          <Box>
            <Box sx={{ p: 1 }}>
              <Typography variant="h4">Resumo</Typography>
            </Box>

            <Card sx={{ m: 1, p: 1 }} variant="outlined">
              <List>
                <ListItem
                  secondaryAction={<div>{money.format(data?.subtotal)}</div>}
                >
                  Subtotal
                </ListItem>
                <ListItem
                  secondaryAction={<div>{money.format(data?.discounts)}</div>}
                >
                  Discounts
                </ListItem>
                <ListItem
                  secondaryAction={<div>{money.format(data?.tax)}</div>}
                >
                  Tax
                </ListItem>
                <Divider />
                <ListItem
                  secondaryAction={<div>{money.format(data?.shipping)}</div>}
                >
                  Shipping
                </ListItem>
                <Divider />
                <ListItem
                  secondaryAction={<div>{money.format(data?.total)}</div>}
                >
                  Total
                </ListItem>
              </List>

              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{ p: 1, position: 'relative' }}
              >
                {/* <Button variant="contained" onClick={createOrder}>
                  Finalizar Compra
                  <CircularProgress sx={{ color: '#FFF' }} />
                </Button> */}

                <Button
                  variant="contained"
                  // sx={buttonSx}
                  disabled={creating}
                  onClick={createOrder}
                >
                  Accept terms
                </Button>
                {creating && (
                  <CircularProgress
                    size={24}
                    sx={{
                      color: '#FFF',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      marginTop: '-12px',
                      marginLeft: '-12px',
                    }}
                  />
                )}
              </Box>

              <SuccessDialog open={success} onClose={handleClose} />
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
