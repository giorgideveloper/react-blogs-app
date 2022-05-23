import React, { useState, useEffect } from 'react';
import BlogsCard from '../blogsCard/BlogsCard';
const axios = require('axios');

function GetCard() {
	const [post, setPosts] = useState('');
	const apiEndPoint = 'https://jsonplaceholder.typicode.com/posts';
	useEffect(() => {
		const getPosts = async () => {
			const { data: res } = await axios.get(apiEndPoint);
			setPosts(res);
		};
		getPosts();
	}, []);

	const [photo, setPhoto] = useState('');
	const apiEndPointTow = 'https://jsonplaceholder.typicode.com/photos';
	useEffect(() => {
		const getPosts = async () => {
			const { data: res } = await axios.get(apiEndPointTow);
			res && res.length > 0 && res.map(elem => setPhoto(elem));
		};
		getPosts();
	}, []);
	return (
		<>
			<BlogsCard MovePost={post} MovePhoto={photo} />
		</>
	);
}

export default GetCard;
