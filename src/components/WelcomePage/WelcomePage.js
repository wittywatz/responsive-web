import React from 'react';
import Video from '../../static/video.mp4';
import {
  HeroContainer,
  HeroBackground,
  VideoBackground,
} from './WelcomePageStyles';

const WelcomePage = () => {
  return (
    <div>
      <HeroContainer>
        <HeroBackground>
          <VideoBackground autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBackground>
      </HeroContainer>
    </div>
  );
};

export default WelcomePage;
