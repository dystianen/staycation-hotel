import { useRouter } from 'next/router';
import data from '../../data/BeautyHouse.json';
import { Title } from '../Title';

const BeautyHouse = () => {
  return (
    <div className='mt-20'>
      <Title>Houses with beauty backyard</Title>
      <div className='grid grid-cols-4 gap-6'>
        {data.data.map((it, index) => (
          <div key={index} className={'relative'}>
            {it.isPopular && (
              <div className='absolute top-0 right-0 bg-pink px-10 py-2 text-white rounded-tr-2xl rounded-bl-2xl'>
                <span className={'font-bold'}>Popular</span> Choice
              </div>
            )}
            <img src={it.img} alt={'img'} className={'w-full h-48'} />
            <div className='mt-3'>
              <h1 className='text-lg'>{it.title}</h1>
              <p className='font-light text-lightgray'>{it.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeautyHouse;
