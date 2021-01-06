import React, { Component } from 'react'
import  './menu-item.scss';

//使用{} 
//style={{ backgroundImage: `url(${imageUrl})` }} 串接CSS
//增加size ${size}  class 給 className='menu-item'>
const MenuItem = ({title , imageUrl , size}) => (
  <div  className={`${size} menu-item `} >
    <div style={{ backgroundImage: `url(${imageUrl})` }}
       className='background-image'/>
    <div className='content'>
      <h1 className='title'>{title}</h1>
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

export default MenuItem;