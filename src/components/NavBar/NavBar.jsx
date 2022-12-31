import React from "react";
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from "@mui/material";
import { Menu, AccountCircle, LightMode, Brightness3, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useStyle from './styles'
function NavBar() {
  const classes = useStyle()
  const isMobail = useMediaQuery('(max-width:700px)');
  const theme = useTheme()
  const isAuthenticated = true
  return (<>
    <AppBar position="flex">
      <Toolbar className={classes.toolbar}>
        {isMobail &&
          <IconButton
            color='inherit'
            edge='start'
            style={{ outline: 'none' }}
            onClick={() => { }}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
        }
        <IconButton color="inherit" onClick={() => { }} sx={{ ml: 1 }}>
          {theme.palette.mode === 'dark' ? <Brightness3 /> : <LightMode />}
        </IconButton>
        {!isMobail && 'Search...' }
        <div>
          {!isAuthenticated ?
            (<Button color="inherit" onClick={() => { }}>
              Login.. &nbsp; <AccountCircle />
            </Button>) :
            (<Button
              color="inherit"
              component={Link}
              to='/profile/1332'
              onClick={() => { }}
              className={classes.linkButton}
            >
              {!isMobail && <>My Movie &nbsp;</>}
              <Avatar
                style={{ width: 30, height: 30 }}
                alt='profile'
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJs7sqSlX2UvPpVvn6InP8VY489SVHfXSNSA&usqp=CAU"
              >
              </Avatar>
            </Button>)}
        </div>
        {isMobail && 'Search...'}
      </Toolbar>
    </AppBar>
  </>
  )
}

export default NavBar