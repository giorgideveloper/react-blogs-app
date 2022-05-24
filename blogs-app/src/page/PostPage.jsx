import axios from 'axios';

import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './PostPage.css';

function PostPage({ MovePost }) {
	let { id } = useParams();
	const [post, setPosts] = useState('');
	const apiEndPoint = `https://jsonplaceholder.typicode.com/posts/${id}`;
	useEffect(() => {
		const getPosts = async () => {
			const { data: res } = await axios.get(apiEndPoint);
			setPosts(res);
		};
		getPosts();
	}, []);

	const [photo, setPhoto] = useState('');
	const apiEndPointTow = `https://jsonplaceholder.typicode.com/photos/${id}`;
	useEffect(() => {
		const getPosts = async () => {
			const { data: res } = await axios.get(apiEndPointTow);
			setPhoto(res);
		};
		getPosts();
	}, []);
	const [comments, setComments] = useState('');

	const apiCommnets = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
	useEffect(() => {
		const getComments = async () => {
			const { data: res } = await axios.get(apiCommnets);
			setComments(res);
		};
		getComments();
	}, []);

	return (
		<div>
			<Container>
				<Row>
					<Col lg={8} className='pt-3 pb-3'>
						<Card style={{ width: '100%', height: 'auto' }}>
							<Card.Img variant='top' src={photo.url} />
							<Card.Body>
								<Card.Title className='text-uppercase'>{post.title}</Card.Title>
								<Card.Text>{post.body}</Card.Text>
							</Card.Body>
							<Card.Footer></Card.Footer>
						</Card>
					</Col>
				</Row>
				<Row>
					{comments &&
						comments.length > 0 &&
						comments.map(item => (
							<Col lg={8} key={item.id}>
								<div className='text-uppercase'>
									<Card style={{ width: '100%', height: 'auto' }}>
										<Card.Header as='h5'>
											{item.email}

											<i className='bi bi-pencil-square'></i>
										</Card.Header>
										<Card.Body style={{ height: '200px' }}>
											<Card.Title className='text-uppercase'>
												{item.name}
											</Card.Title>
											<Card.Text>{item.body}</Card.Text>
										</Card.Body>
										<Card.Footer></Card.Footer>
									</Card>
								</div>
							</Col>
						))}
				</Row>
			</Container>
		</div>
	);
}

export default PostPage;
