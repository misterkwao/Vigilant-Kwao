import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Layout = () =>{
    return(
        <>
        <Navbar/>
        <main className='container mx-auto p-2'>
            <Outlet/>
        </main>
        <Footer/>
        </>
    )
}

export default Layout