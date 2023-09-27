import './App.css'
import Home from './Components/Home';
import Search from './Components/Search';
import TopBar from './TopBar'
import Upload from './Components/Upload'
import TopPage from './Components/TopPage';
import {useRoutes, RouteObject } from 'react-router-dom'
import {Box} from '@mui/material'
import type { FC } from 'react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

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


const App : FC = () => {
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
