import { useRouter } from 'next/router';
import data from '../../data/HotelsLarge.json';
import { Title } from '../Title';

const HotelsLarge = () => {
  return (
    <div className='mt-20'>
      <Title>Hotels with large living room</Title>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {data.data.map((it, index) => (
          <div key={index} className={'relative hover:cursor-pointer hover:scale-105 duration-300'}>
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

export default HotelsLarge;
