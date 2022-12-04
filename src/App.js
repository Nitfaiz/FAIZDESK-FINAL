// import logo from './logo.svg';
import {   Route, Routes } from "react-router-dom";
import './App.css';
import Firstpage from './Components/Firstpage';
import Secondpage from './Components/Secondpage';
import Thirdpage from "./Components/Thirdpage";


function App() {
  return (
   <>
   <Routes>
         <Route path='/' element={<Firstpage/>}/>
         <Route path='/Secondpage' element={<Secondpage/>}/>
         <Route path='/thirdpage' element={<Thirdpage/>}/>



   </Routes>




   
   

   </>
  );
}

export default App;
