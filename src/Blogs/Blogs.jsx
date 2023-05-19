import React from 'react';

const Blogs = () => {
    return (
        <div className=' bg-white p-20 text-black'>
            <h1 className='text-4xl text-center font-serif'>Welcome to Blogs!</h1>
            <div tabIndex={0} className="m-5 collapse collapse-arrow  border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium bg-black text-white">
                    Focus me to see content
                </div>
                <div className="collapse-content bg-slate-400">
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabIndex={0} className="m-5 collapse collapse-arrow  border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium bg-black text-white">
                    Focus me to see content
                </div>
                <div className="collapse-content bg-slate-400">
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabIndex={0} className="m-5 collapse collapse-arrow  border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium bg-black text-white">
                    Focus me to see content
                </div>
                <div className="collapse-content bg-slate-400">
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabIndex={0} className="m-5 collapse collapse-arrow  border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium bg-black text-white">
                    Focus me to see content
                </div>
                <div className="collapse-content bg-slate-400">
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
           
        </div>
    );
};

export default Blogs;