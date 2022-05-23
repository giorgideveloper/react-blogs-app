import React from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PostPage from '../../page/PostPage';
import './blogsCard.css';

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
										<Card.Title>{post.title}</Card.Title>
										<Card.Text>{post.body}</Card.Text>
										<Link to='post' onClick={<PostPage MovePost={MovePost} />}>
											<Button variant='primary'>Go somewhere</Button>
										</Link>
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
