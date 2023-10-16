import { Link } from 'react-router-dom';
import somethingWentWrong from '../../assets/animation_lns182vw.json';
import Lottie from "lottie-react";
import { Helmet } from 'react-helmet-async';


const ErrorPage = () => {
    return (
        <div className='w-full flex flex-col h-screen items-center justify-center'>
            <Helmet>
                <title>Error!!!</title>
            </Helmet>
            <Lottie className='w-72' animationData={somethingWentWrong} loop={true} />
            <Link to="/"><button className='btn'>Back to home</button></Link>
        </div>
    );
};

export default ErrorPage;