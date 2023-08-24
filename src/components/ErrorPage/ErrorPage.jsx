import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const ErrorPage = () => {
  useTitle('ERROR')
    const error = useRouteError();
  console.error(error);
    return (
        <div id="error-page" className='flex justify-center items-center'>
          <img className=' w-fit' src="https://th.bing.com/th/id/R.26be5077fad9939a8a7c042b125305fb?rik=r%2f1DrAuTpHo8iQ&riu=http%3a%2f%2fthekps.ir%2f404%2f404.png&ehk=%2biSDRxhGJkrZNdDL1OfR7l3Cw5L5xwbzfV2nUyZINVI%3d&risl=&pid=ImgRaw&r=0" alt="" />
     <div className=" text-center w-96 text-amber-300 font-sans text-xl">
     <h1 className='font-bold text-3xl'>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link className='btn btn-warning mt-5' to="/">Go Back to Home!</Link>
     </div>
    </div>
    );
};

export default ErrorPage;