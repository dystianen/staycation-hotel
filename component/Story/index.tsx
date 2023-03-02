import Image from 'next/image';
import React from 'react';
import { Button } from '../Button';

const Story = () => {
  return (
    <div className='flex flex-col md:flex-row gap-5 lg:gap-20 mt-20 pb-20'>
      <Image src={'/assets/images/family.png'} width={300} height={350} alt={'story'} />
      <div className='flex flex-col justify-center gap-5 lg:gap-14 text-darkblue'>
        <h3 className='text-xl'>Happy Family</h3>
        <div>
          <div></div>
          <h1 className='text-2xl lg:text-3xl'>
            What a great trip with my family and <br className='hidden md:block'/> I should try again next time soon ...
          </h1>
          <p className='text-lightgray'>Angga, Product Designer</p>
        </div>
        <Button>Read Their Story</Button>
      </div>
    </div>
  );
};

export default Story;
