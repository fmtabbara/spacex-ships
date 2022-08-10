import { createTheme, ThemeProvider } from "@mui/material"
import React from "react"

type TAppThemeProps = {
  children: React.ReactNode
}

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#6fdc18",
    },
  },
  typography: {
    fontFamily: "Sans",
  },
})

const AppTheme = ({ children }: TAppThemeProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default AppTheme
