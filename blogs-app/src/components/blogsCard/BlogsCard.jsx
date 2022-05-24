import React from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import toast from '../../helpers/toast';
import axios from 'axios';
import './blogsCard.css';

function BlogsCard({ MovePost, MovePhoto }) {
	function deleteComment(id, e) {
		axios
			.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(res => {
				if (res.status === 200) {
					toast('success', 'delete');
				} else {
					toast('warning', "can't delete");
				}
			})
			.catch(console.error());
	}
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
										<i
											className='bi bi-trash'
											onClick={e => deleteComment(post.id, e)}
										></i>
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
