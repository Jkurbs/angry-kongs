import './App.css';

import React, { useEffect, useState } from 'react';
import {Howl, Howler} from 'howler';
import logo from './logo.svg';
import discord from './assets/discord-50.png';
import twitter from './assets/twitter-50.png';
import test from './assets/test.jpg';
import scratch from './assets/scratch.svg';

const url = './kong.mp3'
const sound = 'https://firebasestorage.googleapis.com/v0/b/angry-kongs.appspot.com/o/kong.mp3?alt=media&token=83a1d6b4-dd9c-4c28-be58-9fdd546f3869';


function getTextWidth(text, font) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  context.font = font || getComputedStyle(document.body).font;

  return context.measureText(text).width + 20;
}

const calculateTimeLeft = () => {
  let year = new Date().getFullYear();
  let difference = +new Date(`10/01/${year}`) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }
  return timeLeft;
}

function App() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [audio] = useState(new Audio(sound));

  const play = (e) => {
    e.preventDefault()
    sound.play();
   }

    /*
   * STOP AUDIO
   */
  const stopAudio = () => {
    audio.pause();
  };

  /*
   * PLAY AUDIO ON HOVER
   */
  const playAudio = () => {
    audio.play();
  };

  useEffect(() => {
  const timer=setTimeout(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);
  // Clear timeout if the component is unmounted
  return () => clearTimeout(timer);
});


const timerComponents = [];

Object.keys(timeLeft).forEach((interval) => {
  if (!timeLeft[interval]) {
    return;
  }

  timerComponents.push(
    <span id="time">
      {timeLeft[interval]} {interval}{" "}
    </span>
  );
});

  return (
    <div class="body">
      <div class="background"></div>
      <header class="header">
        <a onClick={(e)=> playAudio()} class="logo">Angry Kongs</a>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
          <li><a href="#about">Overview</a></li>
          <li><a href="#roadmap">Roadmap</a></li>
          <li><a id="discord" href="https://discord.gg/4mTGWZXbrc" target="_blank"><img src={discord} alt="discord"/></a></li>
          <li> <a href="https://twitter.com/angrykongsnft?s=21" target="_blank"><img src={twitter} alt="twitter"/></a></li>
        </ul>
      </header>
      <div class="countdown">
          <h1>Presale in</h1>
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
          <a href="https://discord.gg/4mTGWZXbrc" target="_blank"  style={{display: "inline", color: "white",display: "block", margin: "auto", marginTop: 40, padding: 10, backgroundColor: "red", width: "50vw", borderRadius: 2.5, textDecoration: "none"}}>Join Angry Kongs Discord</a>
      </div> 
       <div class="row">
        <div class="about column" id="about">
          <h1>WELCOME TO THE ANGRY <br/> KONGS PRIVATE JUNGLE</h1>
          <div class="about-details">
            <h2>Overview</h2>
            <p>10,000 unique collectible characters with proof of ownership stored on the Ethereum blockchain.<br/>
              Each Angry Kong is unique and programmatically generated<br/>from over 100 possible traits, including clothing, mane, expression, and more.</p>
          </div>
        </div>
        
      <div class="image-grid column">
        <div class="outer-grid">
          <div class="inner-grid">
            <img
            src={test}
            />
            <img
              src={test}
            />
            </div>
            <div class="inner-grid">
            <img
              src={test}
            />
            <img
              src={test}
            />
          </div>
        </div>
      </div>
      </div> 
     <div class="about column" id="about">
      <div class="about-details">
            <h2>The story</h2>
            <p>Somewhere in a faraway jungle, KONGs are captured and used for entertainment in gladiator like pits to fight for their live.
Throughout the years, many have died while fighting all kind of foes, machine and wild like constructs.<br/> <br/>
              The mission is simple: Help them escape and reclaim their once glorious freedom as KING KONGs.
First tasks, we need to help escape 1000 and continue from there.
<br/><br/>This won't be an easy task, many obstacles will stand in our way!
But with perseverance, the right team and timing we'll be victorious. <br/><br/><b>The great escape begins!</b></p>
          </div>
          <div class="about-details">
            <h2>Facts</h2>
            <p class="title">When will we begin?</p>
            <p class="answer">The first mission is on October 27, get ready.</p>
            <p class="title">How many will be release?</p> 
            <p class="answer">The goal is to try to release a total of 10000 kongs but 1000 at a time.</p>
            <p class="title">What's the cost to save a single Kong?</p>
            <p class="answer"> 0.07 ETH + gas.</p>
            <p class="title">Will there be a pre-sale?</p>
            <p class="answer"> We will make sure that active community members will be rewarded.</p>
            <p class="concerns">Have concerns or questions? Come through to our <a href="https://discord.gg/4mTGWZXbrc" target="_blank" style={{color: "white"}}>Discord</a> to discuss.</p>
          </div>
      </div>
      <div class="roadmap" id="roadmap">
          <h1>The masterplan</h1>
          <p style={{marginTop: 40}}>
            AngryKongs has been in the works by our team for the past 3 months and we're giving it all we got!
            Alongside our amazing team, we also have an abundance of ideas and partnerships that we can't wait to reveal! 
            Our masterplan below illustrates exactly what we're working towards in the short term. Each checkpoint unlocks when a certain % of AngryKongs have been minted.
            Additional future developments will be decided and voted upon by the AngryKongs community as a whole.
          </p>
          <div class="roadmap-item">
            <p><span>10%</span>Help release 1000 kongs.
            Some of the Kongs NFTs will be airdropped to our early adopters and supporters. 
            We will put large focus on our social medias, discord, and connections in order to ramp up the project and send AngryKongs to the moon. 
            </p>
          </div>
          <div class="roadmap-item">
            {/* <img src={scratch} style={{width: getTextWidth("Drop team uniform, t-shirt and other merchs.")}}/> */}
            <p><span>30%</span>A $10,000 donation to help protect Gorillas will be established with the help of the community. Of course, the community will decide on a reputable Foundation </p>
          </div>
          <div class="roadmap-item">
            {/* <img src={scratch} style={{width: getTextWidth("Drop team uniform, t-shirt and other merchs.")}}/> */}
            <p><span>60%</span>A $10,000 donation to help protect Gorillas will be established with the help of the community. Of course, the community will decide on a reputable Foundation </p>
          </div>
          <div class="roadmap-item">
            {/* <img src={scratch} style={{width: getTextWidth("Drop team uniform, t-shirt and other merchs.")}}/> */}
            <p><span>90%</span>A $10,000 donation to help protect Gorillas will be established with the help of the community. Of course, the community will decide on a reputable Foundation </p>
          </div>
          <div class="roadmap-item">
            <p><span>100%</span>Who knows? anything can happen ;)</p>
          </div>
      </div>
    <footer>
      <section style={{padding: 40, textAlign: "center"}}>
        <h1 style={{marginBottom: 8}}>Join the community</h1>
        <p>Join the discord for giveaways and more information.</p>
        <a href="https://discord.gg/4mTGWZXbrc" target="_blank"  style={{display: "inline", color: "white",display: "block", margin: "auto", marginTop: 40, marginBottom: 10, padding: 10, backgroundColor: "red", width: "50vw", borderRadius: 2.5, textDecoration: "none"}}>Join Angry Kongs Discord</a>
        <div class="countdown" style={{marginTop: 20, backgroundColor: "#333"}}>
          <h1>Presale in</h1>
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
        
      </section>
      <section class="ft-social">
        <ul class="ft-social-list">
          <li><a id="discord" href="https://discord.gg/4mTGWZXbrc" target="_blank"><img src={discord} alt="discord" style={{width: 20, height: 20}}/></a></li>
          <li> <a href="https://twitter.com/angrykongsnft?s=21" target="_blank"><img src={twitter} alt="twitter" style={{width: 20, height: 20}}/></a></li>
        </ul>
      </section>
      <section class="ft-legal">
        <ul class="ft-legal-list">
          <li>&copy; 2021 Angry Kongs | 10,000 Generated NFT's</li>
        </ul>
      </section>
    </footer>
    </div>
  );
}

export default App;
