import React, { useContext, useState } from 'react'
import { TailSpin } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import {query, where, getDocs} from 'firebase/firestore'
import { usersRef } from '../firebase/Firebase';
import bcrypt from 'bcryptjs'
import swal from 'sweetalert';
import { appState } from '../App';

function Login() {
  const navigate = useNavigate()
  const useAppState = useContext(appState)
    const [form , setform] = useState({
        mobile : "",
        password : "",
    }); 
const [loading ,setLoading] = useState(false)
const login = async () => {
  setLoading(true);
  try {
    const quer = query(usersRef, where('mobile', '==', form.mobile))
      const querySnapshot = await getDocs(quer);

      querySnapshot.forEach((doc) => {
        const _data = doc.data()
        const isUser = bcrypt.compareSync(form.password,_data.password);
        if(isUser){
          useAppState.setLogin(true)
          useAppState.setUsername(_data.name)
         
          swal({
            title: "Logged In",
            icon: "success",
            buttons: false,
            timer: 3000
          })
          navigate('/')

        } else {
          swal({
            title: "Invalid Credentials",
            icon: "error",
            buttons: false,
            timer: 3000
          })
        }
      })
    } catch (error) {
      swal({
        title: error.message,
        icon: "error",
        buttons: false,
        timer: 3000
      })
    }
      

    
    
  
    
    
  
  setLoading(false);
}
  return ( 
    <div className='w-full flex flex-col mt-4 items-center'> <h1 className='text-lg font-bold'>Log<span className='text-blue-500'>in</span></h1>
    <div className="p-2 w-1/3">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-300">
                    Mobile Number
                  </label>
                  <input
                    type={'number'}
                    id="email"
                    name="email"
                    value={form.mobile}
                    onChange={(e) => setform({...form, mobile: e.target.value})}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/3">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-300">
                    Password
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.password}
                    onChange={(e) => setform({...form, password: e.target.value})}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              
              <div className="p-2 w-full">
                <button  onClick={login} 
                className="flex mx-auto text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 rounded text-lg">{loading ? <TailSpin height={25} color="white" /> : 'Login'}
                </button>
              </div>
              <div>
                <p>
                    Do not have account ? <Link to={'/signup'}><span  className='text-blue-500'> Sign Up</span></Link>
                </p>
              </div>
    </div>
  )
}

export default Login