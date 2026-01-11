import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import SignOut from '../src/pages/SignOut'
import Signin from '../src/pages/Signin'
import Dashboard from '../src/pages/Dashboard'
import Projects from '../src/pages/Projects'
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/home' element={<Home />}>
        </Route>
        <Route path='/about' element={<About />}>
        </Route>
        <Route path='/dashboard' element={<Dashboard />}>
        </Route>
        <Route path='/signin' element={<Signin />}>
        </Route>
        <Route path='/signout' element={<SignOut />}>
        </Route>
         <Route path='/projects' element={<Projects />}>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}