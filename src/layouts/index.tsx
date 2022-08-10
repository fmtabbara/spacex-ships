import { Container } from "@mui/material"
import React from "react"

type TAppLayoutProps = {
  children: React.ReactNode
}

export const AppLayout = ({ children }: TAppLayoutProps) => (
  <Container fixed maxWidth={false} sx={{ p: 5 }}>
    {children}
  </Container>
)

export default AppLayout
