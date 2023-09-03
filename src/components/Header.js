import React, { useContext } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import  {appState} from '../App'


const Header = () => {
  const useAppState = useContext(appState);

  

  return (
    <div className='sticky z-10 header top-0 text-3xl flex justify-between items-center text-white-500 font-bold p-3 border-b-2 border-gray-500'>
      <Link to={"/"}><span>Movie<span className='text-blue-600'>Center</span></span></Link>
      
        {useAppState.login ?
          <Link to={'/addmovie'}><h1 className='text-lg cursor-pointer flex items-center'>
          <Button><AddIcon className='mr-1' color='secondary' /> <span className='text-white'>Add New</span></Button>
      </h1></Link>
      :
      <Link to={'/login'}><h1 className='text-lg bg-green-500 cursor-pointer flex items-center'>
          <Button><span className='text-white font-medium capitalize'>Login</span></Button>
      </h1></Link>
      }
     
    </div>
  )
}

export default Header