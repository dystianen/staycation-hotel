import Hero from '@/component/Hero';
import MostPicked from '@/component/MostPicked';
import BeautyHouse from '@/component/BeautyHouse';
import HotelsLarge from '@/component/HotelsLarge';
import Apartments from '@/component/Apartments';
import Story from '@/component/Story';
import { createRef, useRef } from 'react';

const Home = () => {
  const myRef = useRef<HTMLInputElement>(null);

  function showMostPicked() {
    if (myRef.current != null) {
      myRef.current.scrollIntoView({
        behavior: 'smooth' 
      });
    }
  }

  return (
    <>
      <Hero onClickShow={showMostPicked} />
      <MostPicked mostPicked={myRef} />
      <BeautyHouse />
      <HotelsLarge />
      <Apartments />
      <Story />
    </>
  );
};

export default Home;
