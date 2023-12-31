import { useState } from "react"
import { Box, Stack, createTheme, ThemeProvider } from '@mui/material'
import Feed from "./components/Feed"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Rightbar from "./components/Rightbar"
import Add from "./components/Add"

function App() {
  const [mode, setMode] = useState("dark")

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
