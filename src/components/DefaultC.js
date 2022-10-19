import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Navbar from './Navbar';
import '../config/styles/default.css';
import up_arrow from '../config/images/content/up_arrow.jpg'
const DefaultC = (props) => {
  const [isAktive, setAktive] = useState(false);
  const changeVidio = () => {
    setAktive(!isAktive);
  };

  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById('myP').style.opacity = '1';
      document.getElementById('myP').style.transition = '1s';
    } else {
      document.getElementById('myP').style.opacity = '0';
      document.getElementById('myP').style.transition = '0.8s';
    }
  }

  return (
    <div className='default_container'>
      {props.data.map((item, index) => {
        return (
          <>
            {item.navtotal ? (
              <Navbar total={item.navtotal}>{item.navcurrent}</Navbar>
            ) : item.status === 'game' ? (
              <div style={{ width: '100%' }} key={`${index}game`}>
                <item.game />
              </div>
            ) : item.status === 'vidio' ? (
              <>
                <div key={`${index}btn`} class='btn-container'>
                  <button
                    onClick={changeVidio}
                    class='btn-moving-gradient btn-moving-gradient--red'>
                    Vidéo
                  </button>
                </div>
                {isAktive ? (
                  <div
                    className='defTemp_vidio__content'
                    key={`${index}content`}>
                    <div className='defTemp_xbtn'>
                      <div onClick={changeVidio} className='defTemp_div'>
                        X
                      </div>
                    </div>
                    <iframe
                      style={{ width: '100%', height: '100vh' }}
                      src={`https://www.youtube.com/embed/${item.vidio}`}
                      title='description'
                      key={`${index}video`}></iframe>
                  </div>
                ) : (
                  ''
                )}
              </>
            ) : item.status === 'audio' ? (
              <div className='default_audio__div' key={`${index}default`}>
                <AudioPlayer
                  src={item.audio}
                  onPlay={(e) => console.log('onPlay')}
                  style={{ backgroundColor: item.color }}
                  key={`${index}audio`}
                />
              </div>
            ) : (
              <img
                key={`${index}image`}
                src={item.img}
                alt='img'
                style={{ width: '100%' }}
                draggable='false'
              />
            )}
          </>
        );
      })}
      <a href='#' id='myP' onClick={myFunction} className='icon_up_div'>
        <img src={up_arrow} alt="img"/>
      </a>
    </div>
  );
};

export default DefaultC;
