import {
  Button,
  Chip,
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

const ActiveStatusChip = ({ isActive }: { isActive: boolean }) => (
  <Chip
    label={isActive ? "Active" : "Inactive"}
    color={isActive ? "success" : "error"}
  />
)

const ShipDetailItem = ({
  label,
  value,
  divider,
}: {
  label: string
  value: string | React.ReactElement
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
  // errors need to be captured and managed
  // loading state should be captured and managed
  const { data } = useGetShipDetail(shipId)

  if (data)
    return (
      <Dialog open={Boolean(shipId)} onClose={onClose} fullWidth maxWidth='sm'>
        <DialogTitle>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
          >
            <Typography variant='h5'>{data.ship.name}</Typography>
            <ActiveStatusChip isActive={data.ship?.active} />
          </Stack>
        </DialogTitle>
        <DialogContent dividers>
          <ShipDetailItem
            label='Home port'
            value={data.ship.home_port}
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
