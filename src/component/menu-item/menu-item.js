// import React, { Component } from 'react'
import React from 'react'
import { withRouter } from "react-router-dom";
import  './menu-item.scss';

//使用{} 
//style={{ backgroundImage: `url(${imageUrl})` }} 串接CSS
//增加size ${size}  class 給 className='menu-item'>
// 從 className={`${size} menu-item `} 改到 style={{ backgroundImage: `url(${imageUrl})` }}
//  <div   style={{ backgroundImage: `url(${imageUrl})` }} className={`${size} menu-item `} >

// const MenuItem = ({title , imageUrl , size , history, linkUrl, match }) => (
//   <div className={`${size} menu-item `} onClick={()=> history.push(`${match.url}${linkUrl}`) } >
//     <div style={{ backgroundImage: `url(${imageUrl})` }}
//        className='background-image'/>
//     <div className='content'>
//       <h1 className='title'>{title.toUpperCase()}</h1>
//       <span className='subtitle'>SHOP NOW</span>
//     </div>
//   </div>
// );

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

//使用props
// const MenuItem = (props) => (
//     <div className='menu-item'>
//       <div className='background-image'/>
//       <div className='content'>
//         <h1 className='title'>props.title</h1>
//         <span className='subtitle'>SHOP NOW</span>
//       </div>
//     </div>
//   );

// export default MenuItem;

export default withRouter(MenuItem);