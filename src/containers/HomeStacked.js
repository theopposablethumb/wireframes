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
      <HomeSection image  bg='grey' layout='flex wrap' />
      <HomeSection image layout='flex wrap' />
      {/* <HomeSection image />
      <HomeSection /> */}
  </>
  );
}

export default Home;