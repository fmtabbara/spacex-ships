import React from "react"
import { AppBar, Container, Toolbar, Typography } from "@mui/material"

export const AppHeader = () => (
  <AppBar position='sticky'>
    <Toolbar>
      <Container fixed maxWidth={false}>
        <Typography variant='h5' fontWeight={800} fontStyle='italic'>
          SpaceX Ships
        </Typography>
      </Container>
    </Toolbar>
  </AppBar>
)
