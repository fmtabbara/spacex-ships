import React from "react"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from "@mui/material"
import { Ship } from "../gql/types"

interface TShipCardProps {
  shipDetails: Pick<Ship, "name" | "image" | "year_built">
  onShipSelect: () => void
}

const ShipCard = ({ shipDetails, onShipSelect }: TShipCardProps) => {
  return (
    <Card>
      <CardHeader
        title={shipDetails.name}
        subheader={`Year built: ${shipDetails.year_built || "-"}`}
      />
      <CardMedia
        image={
          shipDetails.image ||
          "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png"
        }
        component='img'
        height='200'
        alt={`image of the ship ${shipDetails.name}`}
      />
      <CardContent></CardContent>
      <CardActions sx={{ justifyContent: "end" }}>
        <Button onClick={onShipSelect}>More info</Button>
      </CardActions>
    </Card>
  )
}

export default ShipCard
