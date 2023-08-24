import React from 'react';
import img2 from '/slide2.jpg'
import img3 from '/slide3.jpg'
import img4 from '/slide4.jpg'
import img1 from '/slide1.jpg'

const Banner = () => {
    return (
        <div className=' bg-black'>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full flex justify-center">
    <img src={img4} className="w-3/5 rounded-lg  " />
    <div className="absolute flex flex-col items-center justify-center  transform -translate-y-1/2 left-5 right-5 bottom-0  p-20  bg-black bg-opacity-60 mt-10 ">
    <h1 className=' mb-10 text-4xl font-serif'>Welcome to our Toy's<span className='text-amber-600'>G</span> ang !</h1>
    <button className="btn btn-outline btn-error">Details</button>
    </div>
    
    <div className="absolute flex gap-40 justify-center  transform -translate-y-1/2 left-5 right-5 bottom-0 bg-black bg-opacity-60 p-6">
    
      <a href="#slide4" className="btn btn-circle btn-outline  btn-error">❮</a> 
      <a href="#slide2" className="btn btn-circle btn-outline btn-error">❯</a>
      
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full flex justify-center">
    <img src={img2} className="w-1/2 rounded-lg" />

    <div className="absolute flex flex-col items-center justify-center  transform -translate-y-1/2 left-5 right-5 bottom-0 p-20  bg-black bg-opacity-60 mt-10 ">
    <h1 className=' mb-10 text-4xl font-serif'>Welcome to our Toy's<span className='text-amber-600'>G</span> ang !</h1>
    <button className="btn btn-outline btn-error">Details</button>
    
    </div>
    <div className="absolute flex justify-center gap-20 transform -translate-y-1/2 left-5 right-5 bottom-0 bg-black bg-opacity-60 p-6">
      
      <a href="#slide1" className="btn btn-circle btn-outline btn-error">❮</a> 
      <a href="#slide3" className="btn btn-circle btn-outline btn-error">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full flex justify-center">
    <img src={img3} className="w-1/2 rounded-lg" />

    <div className="absolute flex flex-col items-center justify-center  transform -translate-y-1/2 left-5 right-5 bottom-0 p-20  bg-black bg-opacity-60 mt-10 ">
    <h1 className=' mb-10 text-4xl font-serif'>Welcome to our Toy's<span className='text-amber-600'>G</span> ang !</h1>
    <button className="btn btn-outline btn-error">Details</button>
    </div>
    <div className="absolute flex justify-center gap-20 transform -translate-y-1/2 left-5 right-5 bottom-0 bg-black bg-opacity-60 p-6">
      <a href="#slide2" className="btn btn-circle btn-outline btn-error">❮</a> 
      <a href="#slide4" className="btn btn-circle btn-outline btn-error">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full flex justify-center">
    < img src={img1} className="w-1/2 rounded-lg" />

        <div className="absolute flex flex-col items-center justify-center  transform -translate-y-1/2 left-5 right-5 bottom-0 p-20  bg-black bg-opacity-60 mt-10 ">
    <h1 className=' mb-10 text-4xl font-serif'>Welcome to our Toy's<span className='text-amber-600'>G</span> ang !</h1>
    <button className="btn btn-outline btn-error">Details</button>
    </div>
    <div className="absolute flex justify-center gap-20 transform -translate-y-1/2 left-5 right-5 bottom-0 bg-black bg-opacity-60 p-6">
      <a href="#slide3" className="btn btn-circle btn-outline btn-error">❮</a> 
      <a href="#slide1" className="btn btn-circle btn-outline btn-error">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;