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
      <HomeSection image inline bg='grey' alignment='centered' />
      <HomeSection image inline />
      {/* <HomeSection image />
      <HomeSection /> */}
  </>
  );
}

export default Home;