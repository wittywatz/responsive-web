import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import SideBar from '../../components/Sidebar/SideBar';
import WelcomePage from '../../components/WelcomePage/WelcomePage';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleState = () => setIsOpen(!isOpen);
  return (
    <div>
      <SideBar isOpen={isOpen} toggle={toggleState} />
      <Navbar isOpen={isOpen} toggle={toggleState} />
      <WelcomePage />
    </div>
  );
};

export default HomePage;
