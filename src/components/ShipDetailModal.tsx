import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Stack,
  Typography,
} from "@mui/material"
import React from "react"
import { Ship } from "../gql/types"
import { useGetShipDetail } from "../hooks"

const ShipDetailItem = ({
  label,
  value,
  divider,
}: {
  label: string
  value: string
  divider?: boolean
}) => (
  <>
    <Stack direction='row' sx={{ justifyContent: "space-between" }}>
      <Typography fontSize='smaller'>{label}</Typography>
      <Typography fontSize='smaller' fontWeight='bold'>
        {value}
      </Typography>
    </Stack>
    {divider && <Divider sx={{ my: 1, opacity: 0.5 }} />}
  </>
)

export const ShipDetailModal = ({
  shipId,
  onClose,
}: {
  shipId?: Ship["id"]
  onClose: () => void
}) => {
  const { data } = useGetShipDetail(shipId)

  if (data)
    return (
      <Dialog open={Boolean(shipId)} onClose={onClose} fullWidth maxWidth='xs'>
        <DialogTitle>
          <Typography variant='h5'>{data.ship.name}</Typography>
        </DialogTitle>
        <DialogContent dividers>
          <ShipDetailItem
            label='Home port'
            value={data.ship.home_port}
            divider
          />
          <ShipDetailItem
            label='Active'
            value={String(data.ship.active)}
            divider
          />
          <ShipDetailItem label='Type' value={data.ship.type} divider />
          <ShipDetailItem
            label='Roles'
            value={data.ship.roles.join(", ")}
            divider
          />
          <ShipDetailItem
            label='Year built'
            value={String(data.ship.year_built)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
        </DialogActions>
      </Dialog>
    )

  return null
}
