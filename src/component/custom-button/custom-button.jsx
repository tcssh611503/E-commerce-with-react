import React from 'react';

import './custom-button.scss';

//判斷有沒有登入，加入一個class當作style

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button className={ `${isGoogleSignIn? 'google-sign-in' : ''  }         custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;