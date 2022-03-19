import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import LogIn from './Components/LogIn'
import SignUp from './Components/SignUp';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



export default function App() {
  return (
    <div className='app_container'>
      <LogIn />
{/*        <SignUp />
 */}    </div>
  );
}


