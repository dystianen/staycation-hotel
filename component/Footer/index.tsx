const Footer = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-5 px-10 md:px-24 py-16'>
      <div>
        <h1 className="text-2xl font-bold text-lightblue">
          Stay<span className='text-darkblue'>cation.</span>
        </h1>
        <p className="font-light text-lightgray">
          We kaboom your beauty holiday <br />
          instantly and memorable.
        </p>
      </div>
      <div>
        <h1 className="text-lg text-darkblue font-bold">For Beginners</h1>
        <div className="flex flex-col text-lightgray font-light">
            <a className="text-base">New Account</a>
            <a className="text-base">Start Booking a Room</a>
            <a className="text-base">Use Payments</a>
        </div>
      </div>
      <div>
        <h1 className="text-lg text-darkblue font-bold">Explore Us</h1>
        <div className="flex flex-col text-lightgray font-light text-base">
            <a className="text-base">Our Careers</a>
            <a className="text-base">Privacy</a>
            <a className="text-base">Term & Conditions</a>
        </div>
      </div>
      <div>
        <h1 className="text-lg text-darkblue font-bold">Connect Us</h1>
        <div className="flex flex-col text-lightgray font-light text-base">
            <a className="text-base">support@staycation.id</a>
            <a className="text-base">021 - 2208 - 1996</a>
            <a className="text-base">Staycation, Kemang, Jakarta</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
