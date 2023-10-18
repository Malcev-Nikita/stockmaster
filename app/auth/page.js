"use client"

import React, { useState } from 'react';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const options = {
    //options
};

function Auth(email, password) {
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    if(email.match(emailRegex) && password.length >= 3) {
      authUser(email, password)
    }
    else {
      document.querySelector('.auth_error').classList.add('active')
    }
}

function fancyClose() {
  document.querySelector('.auth_error').classList.remove('active')
  document.querySelector('.auth_succes').classList.remove('active')
  document.querySelector('body').style.overflow = "auto"
}

function authUser(email, password) {
  fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/auth/local`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      identifier: email,
      password: password,
    }),
  })
  .then(async (response) => {
    if (response.ok) {
      document.querySelector('.auth_succes').classList.add('active');
      return response.json();
    } else {
      throw new Error('Network response was not ok');
    }
  })
  .then((data) => {
    localStorage.setItem('User_JWT', data.jwt);

    fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/users/me?populate=avatar`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${data.jwt}`,
      },
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .then((dataUser) => {
      localStorage.setItem('User_Data', JSON.stringify(dataUser));
    })
    .catch((error) => {});
  })
  .catch((error) => {
    document.querySelector('.auth_error').classList.add('active');
  });
}


export default function Page() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("") 

  const particlesInit = useCallback(async engine => {
      await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {}, []);

  return (
    <div className='auth'>
      <Particles 
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            "particles": {
              "number": {
                "value": 110,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#ffffff"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.1,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 2,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 90,
                "color": "#b3b3b3",
                "opacity": 0.4,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "grab"
                },
                "onclick": {
                  "enable": false,
                  "mode": "repulse"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          }}
      />

      <div className='content'>
        <h2>Авторизация</h2>

        <input type="email" name="EMAIL" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="PASSWORD" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)}/>

        <button onClick={() => Auth(email, password)}>Авторизация</button>
      </div>

      <div className='auth_error'>
          <div className='fancy_close' onClick={fancyClose}></div>

          <div className='container'>
              <h6>Ошибка, повторите попытку позже!</h6>
          </div>
        </div>

        <div className='auth_succes'>
          <div className='fancy_close' onClick={fancyClose}></div>

          <div className='container'>
              <h6>Вы авторизовались в системе!</h6>
          </div>
        </div>
    </div>
  )
}
