import React, { useState } from "react"
import { CssBaseline } from "@mui/material"
import { AppHeader } from "./components/AppHeader"
import Ships from "./components/Ships"
import AppLayout from "./layouts"
import AppTheme from "./theme"
import { ShipDetailModal } from "./components/ShipDetailModal"
import { Ship } from "./gql/types"

export const App = () => {
  const [selectedShipId, setSelectedShipId] = useState<Ship["id"]>()

  return (
    <AppTheme>
      <CssBaseline />
      <AppHeader />
      <AppLayout>
        <Ships
          onShipSelect={(shipId: string) => {
            setSelectedShipId(shipId)
          }}
        />
        <ShipDetailModal
          shipId={selectedShipId}
          onClose={() => setSelectedShipId(undefined)}
        />
      </AppLayout>
    </AppTheme>
  )
}
