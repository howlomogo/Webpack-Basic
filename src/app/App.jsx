import React, { Component } from 'react';
import bear from 'images/bear.jpg'; // Use alias
import cat from 'images/cat.png';

// webpack
//webpack production
// or npm start -- npm start will NOT compoile files into public folder! you need to webpack for that.
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