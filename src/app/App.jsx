import React, { Component } from 'react';
import bear from '../assets/images/bear.jpg';
import cat from '../assets/images/cat.png';


const hello = () => {
	return (
		<div className="container">
			<div className="image-wrapper">
				<img src={cat} className="image-wrapper__image" />
			</div>

			<div className="image-wrapper">
				<img src={bear} className="image-wrapper__image" />
			</div>
		</div>
	)
}

export default hello;