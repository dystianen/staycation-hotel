import { useRouter } from 'next/router';
import data from '../../data/MostPicked.json';
import { Title } from '../Title';

const MostPicked = () => {

  return (
    <>
      <Title>Most Picked</Title>
      <div className='grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6'>
        {data.data.map((it, index) => (
          <div key={it.id} className={`md:${it.id === 1 ? 'row-span-2' : 'row-span-1'} relative overflow-hidden rounded-2xl`}>
            <div className='z-10 absolute top-0 right-0 bg-pink px-10 py-2 text-white rounded-tr-2xl rounded-bl-2xl'><span className={'font-bold'}>${it.price}</span> per night</div>
            <div className='z-10 absolute w-full bottom-0 pl-4 pb-4 text-white bg-gradient-to-t from-black/90 to-transparent'>
              <h1 className='text-lg'>{it.title}</h1>
              <p className='font-light text-base'>{it.address}</p>
            </div>
            <img src={it.img} alt={'img'} className={'w-full h-full hover:cursor-pointer hover:scale-105 duration-1000'} />
          </div>
        ))}
      </div>
    </>
  );
};

export default MostPicked;
