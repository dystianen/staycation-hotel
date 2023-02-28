import { useRouter } from 'next/router';
import data from '../../data/MostPicked.json';
import { Title } from '../Title';

const MostPicked = () => {

  return (
    <>
      <Title>Most Picked</Title>
      <div className='grid grid-cols-3 grid-rows-2 gap-6'>
        {data.data.map((it, index) => (
          <div key={index} className={`${index === 0 && 'row-span-2'} relative`}>
            <div className='absolute bg-gradient-to-t from-black/40 to-transparent h-full w-full rounded-2xl'></div>
            <div className='absolute top-0 right-0 bg-pink px-10 py-2 text-white rounded-tr-2xl rounded-bl-2xl'><span className={'font-bold'}>${it.price}</span> per night</div>
            <div className='absolute bottom-2 left-4 text-white'>
              <h1 className='text-lg'>{it.title}</h1>
              <p className='font-light text-base'>{it.address}</p>
            </div>
            <img src={it.img} alt={'img'} className={'w-full h-full'} />
          </div>
        ))}
      </div>
    </>
  );
};

export default MostPicked;
