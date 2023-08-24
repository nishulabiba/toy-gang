import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className=' bg-black text-white p-10 '>
            <div className="flex justify-between gap-2 k">
            <div id='dd' className="text-left align-center ">
            <img className=' ms-6 w-12' src="hero.png" alt="" />
                <h4 className='font-bold m-3 fst-italic fs-5 '>Toy
                
                <span className='text-warning'>G</span>ang</h4>
                <div className="ms-3 para">
                <small className='text-slate-500 w-1/4 ' id ='para'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</small>
                <img className='mt-4 ' src="./Group.png" alt="" />
                </div>
            </div>
            <div className=" w-1/9 text-left">
                <h5 className='font-bold m-3 '>Company</h5>
                <div className="ms-3">
                <p className='text-slate-500 '><small>About Us</small></p>
                <p className='text-slate-500 '><small>Work</small></p>
                <p className='text-slate-500 '><small>Latest News</small></p>
                <p className='text-slate-500 '><small>Latest toys</small></p >
                </div>
            </div>
            <div className="">
                <h5 className='font-bold m-3 '>Product</h5>
                <div className="ms-3">
                <p className='text-slate-500 '><small>Action Toys</small></p>
                <p className='text-slate-500 '><small>Plans & Pricing</small></p>
                <p className='text-slate-500 '><small>Customers</small></p>
                <p className='text-slate-500 '><small>Integrations</small></p >
                </div>
            </div>
            <div className="">
                <h5 className='font-bold m-3 '>Support</h5>
                <div className="ms-3">
                <p className='text-slate-500 '><small>Help Desk</small></p>
                <p className='text-slate-500 '><small>Sales</small></p>
                <p className='text-slate-500 '><small>Become a Partner</small></p>
                <p className='text-slate-500 '><small>Developers</small></p >
                </div>
            </div>
            <div className="">
                <h5 className='font-bold m-3 '>Contact</h5>
                <div className="ms-3">
                <p className='text-slate-500 '><small>524 Broadway , NYC</small></p>
                <p className='text-slate-500 '><small>+1 777 - 978 - 5570</small></p>
                <div className="grid grid-flow-col gap-4 mt-2">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;