import React, { useEffect, useState } from "react";
import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss?inline';
import Link from "@docusaurus/Link";
import "./header.css";

import toast, { Toaster } from 'react-hot-toast';

export default function HomepageHeader() {
  //const [stableVersion, setStableVersion] = useState();
  const notice = () => 
    toast('目前本站仍在开发中，遇到任何问题请在官方群向管理员反映',
    {
      duration: 6000,
      icon: '😅',
      style: {
        borderRadius: '25px',
        border: '2px solid #015f7e',
        background: '#a3e4ff',
        color: '#015f7e',
      },
    }
  );
  /*useEffect(() => {
    async function fetchData() {
      await fetch("https://api.github.com/repos/amir2mi/flatifycss/releases", {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
      })
        .then((response) => response.json())
        .then((data) => (data ? setStableVersion(data[0].tag_name.replace("v", "")) : null));
    }
    fetchData();
  }, []);*/

onload = notice;

  return (
    <div className="homepage-header">
      <div style= {{
        width: '100%',
        height: '15vh',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <img 
          style= {{
            display: 'block',
            maxWidth: '10rem',
            maxHeight: '10rem',
            borderRadius: '5vh',
            border: '1.2vh outset #a3e4ff'
          }}
          src="https://s2.loli.net/2023/07/04/IqXuD2V67iSzvjy.png"
          alt="logo"
        />
      </div>
      <h1 className="homepage-title">MSMP</h1>
      <p className="homepage-subtitle">
        MaplefallSurvivalMultiPlayer
      </p>
      <AwesomeButton cssModule={AwesomeButtonStyles} type="primary" style={{textDecoration: 'none',margin: 5}}
        href="docs/intro">
        Get Started
      </AwesomeButton>
      <AwesomeButton cssModule={AwesomeButtonStyles} type="secondary" style={{textDecoration: 'none',margin: 5}}
        href="docs/download">
        Download
      </AwesomeButton>
      <div><Toaster
          position="top-center"
        /> 
      </div>
      {/*<img src={ require('/img/logo.png')} alt="logo" />
      <Image
        source={require('/static/img/logo.svg')}
        style={{ width: 100 }}
        resizeMode="contain"
      />

      /*<a
        style={{ display: "block" }}
        href="https://github.com/amir2mi/flatifycss/releases"
        rel="nofollow"
        target="_blank"
        className={`size-sm opacity-60 color-dark`}>
        {stableVersion && <span className="anim-fade-in"> Last stable release: {stableVersion}</span>}
      </a>*/}
    </div>
  );
}