import { Backdrop, Box, CircularProgress, styled } from '@mui/material';

export interface ILoadingProps<T> {
  loading: boolean;
}

export function Loading<T>(props: ILoadingProps<T>) {
    return <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={props.loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>;
}