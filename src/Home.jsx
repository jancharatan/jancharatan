import React from 'react';
import ReactPlayer from 'react-player';
import MyNavbar from './MyNavbar';
import MyFooter from './MyFooter';

const Home = () => {
  return (
    <div>
      <MyNavbar />
      <div className="p-3">
        Hi, my name is Jan Charatan! I'm a sophomore studying computer science at Pomona College in
        Claremont, California. In my free time, I enjoy playing soccer and going skiing. Some of my
        other interests include poker, videography and vexillology. I also have a YouTube channel
        called Pigunas where I make short documentaries about topics that interest me. Here's a
        video I made about border disputes:
      </div>
      <div className="d-flex justify-content-center">
        <ReactPlayer className="ml-4" url="https://www.youtube.com/watch?v=20qzs64g0O4" />
      </div>
      <MyFooter />
    </div>
  );
};

export default Home;
