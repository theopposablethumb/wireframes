import { Helmet } from 'react-helmet';

import Hero from '../components/Hero';
import HomeSection from '../components/HomeSection';

const Home = () => {
  return(
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero image />
      <div className='flex wrap'>
        <HomeSection image inline bg='grey' layout='halves' />
        <HomeSection image inline layout='halves' />
      </div>
      {/* <HomeSection image />
      <HomeSection /> */}
  </>
  );
}

export default Home;