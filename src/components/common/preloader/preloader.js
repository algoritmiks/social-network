import React from 'react';
import preloader from './preloader.svg'  //Shouldn't use this import with alternate preloader

const Preloader = (props) => {
    return (
      <div style={{backgroundColor: 'white'}}>  
        <img src={preloader} alt="preloader"/>   
      </div>

    // return <><img src={'/img/preloader.svg'} alt="preloader"></img></>  //Alternate use preloader
    )
}

export default Preloader;