import './App.css'
import Home from './Components/Home';
import Search from './Components/Search';
import TopBar from './TopBar'
import Upload from './Components/Upload'
import {useRoutes, RouteObject } from 'react-router-dom'
import {Box} from '@mui/material'

const routes :RouteObject[] = [
  {
    children:[
      {path:"/", element:<Home/> },
      {path:"/search", element:<Search/>},
      {path:"/upload", element: <Upload/>}
    ]
  }
]


function App() {
  const route = useRoutes(routes);

  return (
    <>
    <Box>
      <TopBar/>
      {route}
    </Box>
    </>
  )
}

export default App;
