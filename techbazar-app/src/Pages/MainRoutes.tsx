import { Route, Routes } from 'react-router-dom'
import { HomePage } from './Homepage'
import { ProductPage } from './ProductPage'
import { Login } from './LoginPage'
import { CartPage } from './CartPage'
import { Signup } from './SignUpPage'

export const MainRoutes=()=>{
   return (
    <Routes>
   <Route path='/' element={<HomePage/>}/>
   <Route path='/products' element={<ProductPage/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/signup' element={<Signup/>} />
   <Route path='/cart' element={<CartPage/>}/>
    </Routes>
   ) 
}

