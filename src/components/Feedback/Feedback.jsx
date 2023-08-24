import React from 'react';

const Feedback = () => {
    return (
        <div className=' bg-black'>
            <div className="hero min-h-screen bg-black">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Please , give us your valuable feedback</h1>
      <p className="py-6"><small>We value our customer's opinion..</small></p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-black ms-24">
      <div className="card-body p-10">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered input-error" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Feedback</span>
          </label>
          <input type='text'  placeholder="Type here..." className="input input-bordered input-error p-20" />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-error btn-outline">Send</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Feedback;