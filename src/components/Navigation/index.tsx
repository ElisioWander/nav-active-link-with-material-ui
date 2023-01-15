import { Drawer, List, ListItemButton, ListItemText } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

const navigation = [
  {
    title: 'home',
    link: '/',
  },
  {
    title: 'products',
    link: '/products',
  },
  {
    title: 'Customers',
    link: '/customers',
  },
  {
    title: 'About Us',
    link: '/about-us',
  },
]

export function Navigation() {
  const location = useLocation()

  return (
    <Drawer variant="permanent">
      <List>
        {navigation.map((item) => (
          <Link key={item.title} to={item.link}>
            <ListItemButton selected={location.pathname === item.link}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </Drawer>
  )
}
