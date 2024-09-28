import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Contacts from './Contacts'
import Login from './Login'

import './Navigation.css'

function Navigation() {

    return (
        <>
        <Router>
            <nav className='nav-bar'>
                <ul className='list-reset nav-bar-list'>
                    <li><Link to={'/'}>Главная</Link></li>
                    <li><Link to={'/about'}>О нас</Link></li>
                    <li><Link to={'/contacts'}>Контакты</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </Router>
        </>
              
    )
    
}

export default Navigation