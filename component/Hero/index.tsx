import { Button } from '@/component/Button';
import React, { PropsWithRef } from 'react';
import Image from 'next/image';

const Hero = (props: PropsWithRef<any>) => {

  return (
    <div className='flex flex-col-reverse lg:flex-row pt-20 lg:pt-0 justify-end lg:justify-between lg:items-center h-screen'>
      <div className='flex flex-col gap-5 md:gap-10'>
        <h1 className='text-3xl md:text-5xl mt-5 lg:mt-0 text-darkblue font-bold'>
          Forget Busy Work, <br className='hidden md:block'/>
          Start Next Vacation
        </h1>
        <p className='text-lightgray font-light text-xl'>
          We provide what you need to enjoy your <br className='hidden md:block'/> holiday with family. Time to make another <br className='hidden md:block'/> memorable moments.
        </p>
        <Button onClick={props.onClickShow}>Show Me Now</Button>

        <div className='flex flex-row justify-between w-full md:w-4/5 mt-10'>
          <div className='flex flex-col justify-between gap-2'>
            <Image src={'/assets/icons/traveler.svg'} width={20} height={20} alt='traveler' />
            <p>
              <span className='text-darkblue font-bold'>80,409</span> <span className='text-lightgray font-light'>travelers</span>
            </p>
          </div>
          <div className='flex flex-col justify-between gap-2'>
            <Image src={'/assets/icons/treasure.svg'} width={45} height={50} alt='treasure' />
            <p>
              <span className='text-darkblue font-bold'>862</span> <span className='text-lightgray font-light'>treasure</span>
            </p>
          </div>
          <div className='flex flex-col justify-between gap-2'>
            <Image src={'/assets/icons/cities.svg'} width={25} height={25} alt='cities' />
            <p>
              <span className='text-darkblue font-bold'>1492</span> <span className='text-lightgray font-light'>cities</span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <Image src={'/assets/images/banner.png'} width={600} height={600} alt='banner' />
      </div>
    </div>
  );
};

export default Hero;
