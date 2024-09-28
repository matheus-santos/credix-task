import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
  useNavigate,
} from 'react-router-dom';
import { UIProvider } from '@contexts/uiContext';
import { MainLayout } from '@components/layouts';
import { CheckoutPage } from '@components/pages';
import { Box, Button, Typography } from '@mui/material';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Box p={4} overflow="auto">

          <Box sx={{p: 1}}>
            <Typography variant="h4">
              Home Page
            </Typography>
          </Box>
        
          <Button variant="contained" onClick={() => window.location.replace("/checkout")}>
            Ir para o pagamento
          </Button>
        </Box>,
      },
      {
        path: '/checkout',
        element: <Outlet />,
        children: [
          {
            path: '/checkout',
            element: <CheckoutPage />,
          }
        ],
      },
    ],
  },
]);

function App() {
  return (
    <UIProvider>
      <RouterProvider router={appRouter} />
    </UIProvider>
  );
}

export default App;
