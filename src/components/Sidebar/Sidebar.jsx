import React from 'react'
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from "@mui/material";
import { Link } from 'react-router-dom';

import { useTheme } from "@mui/styles";
import useStyle from './styles'


// Link logo
const lightLogo = 'https://miro.medium.com/max/400/1*Y9-6_bh5a00rJWWoQ28NMQ.jpeg'
const darkLogo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz9ORYhX9P-QVyWmMHddgiPtreEW3rVhAGWK3G1iJzD1QpU0QzmWYOc8A4ygB7hf_HSA&usqp=CAU'
// static data
const Categories = [
  { label: 'Popular', vlaue: 'popular' },
  { label: 'Top Rated', vlaue: 'top_rated' },
  { label: 'Upcoming', vlaue: 'upcoming' },
]
const demoCategories = [
  { label: 'Comedy', vlaue: 'comedy' },
  { label: 'Actioin', vlaue: 'actioin' },
  { label: 'Horror', vlaue: 'horror' },
  { label: 'Animation', vlaue: 'animation' },
]

const Sidebar = ({ setMobaileOpen }) => {
  const theme = useTheme()
  const classes = useStyle()

  return (
    <>
      <Link to='/' className={classes.imageLink} >
        <img className={classes.image}
          src={theme.palette.mode === 'light' ? lightLogo : darkLogo}
          alt="tmdb_movie" />
      </Link>
      <Divider />
    
      <List>
        <ListSubheader>Categories</ListSubheader>
        {Categories.map(({ value, label })=>(
        <Link key={value} to='/' className={classes.links}>
          <ListItem onClick={() => { }} button>
            <ListItemText primary={label} />
          </ListItem>
        </Link>
        ))}
      </List>
      <Divider/>
    
      <List>
        <ListSubheader>Genres</ListSubheader>
        {demoCategories.map(({ value, label })=>(
        <Link key={value} to='/' className={classes.links}>
          <ListItem onClick={() => { }} button>
            <ListItemText primary={label} />
          </ListItem>
        </Link>
        ))}
      </List>
      <Divider/>
    </>
  )
}

export default Sidebar