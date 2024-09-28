import {
  EmojiPeople,
  SupervisedUserCircleRounded,
  SvgIconComponent,
} from '@mui/icons-material'

export interface IRouteInfo {
  id: string
  title: string
  Icon?: SvgIconComponent
}

export const routeDefinitions: Record<string, IRouteInfo> = {
  checkout: {
    id: 'checkout',
    title: 'Checkout',
    Icon: SupervisedUserCircleRounded,
  },
}
