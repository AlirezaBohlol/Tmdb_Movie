import React from 'react'
import { CssBaseline } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import routers from './../router/router'
import NavBar from './NavBar/NavBar'
import useStyles from './styles'

function App() {
  const classes = useStyles()
  return (<div className={classes.root}>
    <CssBaseline />
    <NavBar />
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Routes>
        {routers.map((router, index) => <Route key={index} {...router} />)}
      </Routes>
    </main>
  </div>)
}

export default App
