// import React from 'react';
import AppRoutes from './AppRoutes';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;