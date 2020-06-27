import React from 'react';
import MyNavbar from './MyNavbar';
import MyFooter from './MyFooter';
import ReactPlayer from 'react-player';

const Home = () => {
  return (
    <div>
      <MyNavbar />
      <div className='p-3'>
          Hi! My name is Jan Charatan and I'm a rising sophomore studying computer science at Pomona College in Claremont, California. 
          Although I was born in Portland, Oregon, I've also lived in Dresden, Germany and San Jose, California. I'm interested in 
          frontend development using React (what I used to make this webpage!). Some of my other interests include soccer, poker, skiing, 
          videography and vexillology. I also have a YouTube channel called Pigunas; here's one of my videos:
      </div>
      <div className='d-flex justify-content-center'>
        <ReactPlayer className='ml-4' url='https://www.youtube.com/watch?v=20qzs64g0O4' />
      </div>
      <MyFooter />
    </div>
    
  );
}

export default Home;
