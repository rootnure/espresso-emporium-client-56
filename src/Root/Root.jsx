import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';


const Root = () => {
    return (
        <div className='font-raleway'>
            <NavBar />
            <Outlet />
        </div>
    );
};

export default Root;