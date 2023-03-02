import Hero from '@/component/Hero';
import MostPicked from '@/component/MostPicked';
import BeautyHouse from '@/component/BeautyHouse';
import HotelsLarge from '@/component/HotelsLarge';
import Apartments from '@/component/Apartments';
import Story from '@/component/Story';
import Footer from '@/component/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <MostPicked />
      <BeautyHouse />
      <HotelsLarge />
      <Apartments />
      <Story />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
