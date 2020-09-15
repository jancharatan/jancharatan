import React from 'react';
import ReactPlayer from 'react-player';
import MyNavbar from './MyNavbar';
import MyFooter from './MyFooter';

const Home = () => {
  return (
    <div>
      <MyNavbar />
      <div className="p-3">
        Hi! My name is Jan Charatan and I'm a sophomore studying computer science at Pomona College
        in Claremont, California. I'm originally from Portland, Oregon, but I've also lived in
        Dresden, Germany and San Jose, California. I'm interested in frontend development using
        React (what I used to make this webpage!). Some of my other interests include soccer, poker,
        skiing, videography and vexillology. I also have a YouTube channel called Pigunas; here's
        one of my videos:
      </div>
      <div className="d-flex justify-content-center">
        <ReactPlayer className="ml-4" url="https://www.youtube.com/watch?v=20qzs64g0O4" />
      </div>
      <MyFooter />
    </div>
  );
};

export default Home;
