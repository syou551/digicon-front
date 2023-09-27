import './App.css'
import Home from './Components/Home';
import Search from './Components/Search';
import TopBar from './TopBar'
import Upload from './Components/Upload'
import TopPage from './Components/TopPage';
import {useRoutes, RouteObject } from 'react-router-dom'
import {Box} from '@mui/material'


const routes :RouteObject[] = [
  {
    children:[
      {path:"/eyetracking", element:<Home/> },
      {path:"/search", element:<Search/>},
      {path:"/up", element: <Upload/>},
      {path:"/", element: <TopPage/>},
    ]
  }
]


const App  = () => {
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
