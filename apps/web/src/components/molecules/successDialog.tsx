import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Stack } from '@mui/material'

export interface ISuccessDialogProps<T> {
  open: boolean
  onClose: () => void
}

export function SuccessDialog<T>(props: ISuccessDialogProps<T>) {
  const { open, onClose } = props

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Tudo certo!</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Stack alignItems="center" direction="column" gap={2}>
            <CheckCircleIcon style={{ color: '#008000', fontSize: 128 }} />
            Sua compra foi concluída!
          </Stack>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} autoFocus>
          Dismiss
        </Button>
      </DialogActions>
    </Dialog>
  )
}
