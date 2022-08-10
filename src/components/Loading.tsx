import { CircularProgress } from '@mui/material'
import React from 'react'

type TLoadingProps = {
  size?: 'small' | 'large'
}

const mapSize = (size: TLoadingProps['size']) => {
  switch (size) {
    case 'small':
      return 15
    case 'large':
      return 45
    default:
      return 30
  }
}
export const Loading = ({ size }: TLoadingProps) => (
  <CircularProgress size={mapSize(size)} />
)
