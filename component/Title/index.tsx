import { PropsWithChildren } from 'react';

export const Title = ({ children }: PropsWithChildren<any>) => {

  return (
    <div className='mb-5'>
      <h1 className='text-2xl text-darkblue font-bold'>{children}</h1>
    </div>
  );
};
