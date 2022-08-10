import React, { useEffect, useRef } from "react"
import { Button, CircularProgress, Grid } from "@mui/material"
import ShipCard from "./ShipCard"
import useGetShips from "../hooks"

const DATA_LIMIT = 3

const Countries = ({
  onShipSelect,
}: {
  onShipSelect: (shipId: string) => void
}) => {
  const { loading, data, fetchMoreShips } = useGetShips(DATA_LIMIT)

  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    buttonRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [data])

  return (
    <>
      <Grid container spacing={4}>
        {data?.ships.map((ship) => (
          <Grid item md={4} xs={1} key={ship.id}>
            <ShipCard
              shipDetails={{
                name: ship.name,
                year_built: ship.year_built,
                image: ship.image,
              }}
              onShipSelect={() => onShipSelect(ship.id)}
            />
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent='end' sx={{ mt: 4 }}>
        <Grid item>
          <Button
            size='large'
            variant='contained'
            color='primary'
            onClick={fetchMoreShips}
            ref={buttonRef}
            endIcon={
              loading && <CircularProgress size={20} color='secondary' />
            }
            disabled={loading}
          >
            Load more
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Countries
