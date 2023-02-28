import { useRouter } from 'next/router';
import react, { PropsWithChildren } from 'react';

export const Button = ({ children, onClick= () => {} }: PropsWithChildren<any>) => {
  const router = useRouter();

  return (
    <button onClick={onClick} className='bg-lightblue text-white rounded shadow-lg w-max py-2 px-10 text-lg'>
      {children}
    </button>
  );
};
