import React, { useState } from "react"
import { Box, List, ListItem, ListItemIcon, ListItemText, ListItemButton, Switch } from '@mui/material'
import { Home, Article, Group, Storefront, Person, Settings, AccountBox, ModeNight } from '@mui/icons-material'

const Sidebar = ({mode, setMode}) => {
  const [checked, setChecked] = useState(false)
  setMode(checked ? "dark" : "light")

  return (
    <Box flex={1} p={2} sx={{ display: { xs : "none", sm: "block" }}}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#pages">
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#groups">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Goups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#marketplace">
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#friends">
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#settings">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#profile">
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
                checked={checked}
                onClick={e => setChecked(prevCheck => !prevCheck)}
                // onChange={ e => } 
                />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
};

export default Sidebar;