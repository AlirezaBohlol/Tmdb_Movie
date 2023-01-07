import React, { useState } from "react";
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from "@mui/material";
import { Menu, AccountCircle, LightMode, Brightness3, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useStyle from './styles'
import Sidebar from "../Sidebar/Sidebar";

function NavBar() {

  const [mobileOpen, setMobileOpen] = useState(false)
  const classes = useStyle()
  const isMobail = useMediaQuery('(max-width:700px)');
  const theme = useTheme()
  const isAuthenticated = true

  return (<>
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        {/* Query for mobail */}
        {isMobail &&
          <IconButton
            color='inherit'
            edge='start'
            style={{ outline: 'none' }}
            onClick={()=>setMobileOpen((prevMobailOpen)=>!prevMobailOpen)}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
        }
        {/* Button Dark mode */}
        <IconButton color="inherit" onClick={() => { }} sx={{ ml: 1 }}>
          {theme.palette.mode === 'dark' ? <Brightness3 /> : <LightMode />}
        </IconButton>
        {!isMobail && <Search><span>Search...</span></Search>}
        <div>
          {/* Authenticated  */}
          {!isAuthenticated ?
            (<Button color="inherit" onClick={() => { }}>
              Login.. &nbsp; <AccountCircle />
            </Button>) :
            (<Button
              color="inherit"
              component={Link}
              to='/profile/1234'
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
        {isMobail && <Search><span>Search...</span></Search>}
      </Toolbar>
    </AppBar>
    {/* Navbar  */}
    <div>
      <nav className={classes.drawer}>
        {isMobail ? (
          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={()=>setMobileOpen((prevMobailOpen)=>!prevMobailOpen)}
            className={classes.drawerPaper}
            ModalProps={{ keepMounted: true }}
          >
            <Sidebar setMobileOpen={setMobileOpen} />
          </Drawer>

        ) : (
          <Drawer classes={{ paper: classes.drawerPaper }} variant='permanent' open >
            <Sidebar setMobaileOpen={setMobileOpen} />
          </Drawer>
        )}
      </nav>
    </div>
  </>
  )
}

export default NavBar