import React from 'react';
import style from './style.module.css';
import Greeting from './Greeting';

const LoginPage = () => {
	const name = "Alex";
  return (
	<div>
	  <h1 className={style.heading}>Login Page</h1>
	  <Greeting name={name}/>
	</div>
  )
}

export default LoginPage;
