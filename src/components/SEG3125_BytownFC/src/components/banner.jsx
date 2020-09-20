import React from 'react';
import '../styles/banner.scss'

function Banner(props){      
   return(
      <div id="banner">
         <p>{props.section}</p>
      </div>
   );
      
}

export { Banner };