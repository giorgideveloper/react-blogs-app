import React from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import toast from '../../helpers/toast';
import axios from 'axios';
import './blogsCard.css';
function deleteComment(id) {
	axios
		.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
		.then(res => {
			toast('success', 'delete');
		})
		.catch(console.error());
}
function BlogsCard({ MovePost, MovePhoto }) {
	return (
		<div>
			<Container>
				<Row>
					{MovePost &&
						MovePost.length > 0 &&
						MovePost.map(post => (
							<div key={post.id} className='col-12 col-md-6 col-lg-4 card-my'>
								<Card style={{ width: '100%', height: 'auto' }}>
									<Card.Img variant='top' src={MovePhoto.url} />
									<Card.Body>
										<Card.Title className='text-uppercase'>
											{post.title}
										</Card.Title>
										<Card.Text>{post.body} </Card.Text>
										<Link to={`post/${post.id}`}>
											<Button variant='primary'>Go somewhere</Button>
										</Link>{' '}
										<i className='bi bi-trash'></i>
										<i className='bi bi-pencil-square'></i>
									</Card.Body>
								</Card>
							</div>
						))}
				</Row>
			</Container>
		</div>
	);
}

export default BlogsCard;
