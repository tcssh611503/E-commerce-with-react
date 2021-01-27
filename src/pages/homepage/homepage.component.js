import React from 'react';
import Directory from '../../component/directory/directory';
import  './homepage.styles.scss';

//箭頭函數使用 () 而不是{}
//串Directory資料
const HomePage = () => (
    <div className='homepage'>
      <Directory />
    </div>
  );


export default HomePage;



//箭頭函數使用 () 而不是{}
//自己刻資料
// const HomePage = () => (
//     <div className='homepage'>
//         <div className='directory-menu'>
//             <div className='menu-item'>
//                 <div className='content'>
//                     <h1 className='title'>HATS</h1>
//                     <span className='title'>SHOP NOW</span>
//                 </div>
//             </div>
//             <div className='menu-item'>
//                 <div className='content'>
//                     <h1 className='title'>JACKET</h1>
//                     <span className='title'>SHOP NOW</span>
//                 </div>
//             </div>
//             <div className='menu-item'>
//                 <div className='content'>
//                     <h1 className='title'>SHEAERS</h1>
//                     <span className='title'>SHOP NOW</span>
//                 </div>
//             </div>
//             <div className='menu-item'>
//                 <div className='content'>
//                     <h1 className='title'>WOMENS</h1>
//                     <span className='title'>SHOP NOW</span>
//                 </div>
//             </div>
//             <div className='menu-item'>
//                 <div className='content'>
//                     <h1 className='title'>MENS</h1>
//                     <span className='title'>SHOP NOW</span>
//                 </div>
//             </div>
//         </div>
//     </div>
// )