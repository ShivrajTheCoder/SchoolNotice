import {BrowserRouter} from "react-router-dom"
import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import HomeScreen from './Screens/HomeScreen';
import Footer from "./components/Footer";
import NoticeScreen from "./Screens/NoticeScreen";
import ContactUs from "./Screens/ContactUs";
import AdminPanel from "./Screens/AdminPanel";
import UpdateScreen from "./Screens/UpdateScreen";
import CreateNotice from "./Screens/CreateNotice";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/notification' element={<NoticeScreen/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/admin' element={<AdminPanel/>}/>
      <Route path='/newnotice' element={<CreateNotice/>}/>
      <Route path='/updatenotice/:id' element={<UpdateScreen/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
