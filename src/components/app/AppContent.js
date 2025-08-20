 import { Routes, Route } from 'react-router-dom'
 import Home from '../pages/Home'
   import QrPage from '../pages/QrPage'

const AppContent = () => {


    return (

        <>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/web' element={<QrPage />}></Route>
        </Routes>

       
        
        </>
    )
}


export default AppContent