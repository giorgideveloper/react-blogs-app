import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AppBar.css';
function AppBar() {
	return (
		<div>
			<Navbar bg='dark' variant='dark'>
				<Container>
					<Navbar.Brand href='/'>Navbar</Navbar.Brand>
					<Nav className='me-auto'>
						{' '}
						<div className='nav-link'>
							<Link to='/'>მთავარი</Link>
							<Link to='/blog'>ბლოგები</Link>
						</div>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
}

export default AppBar;
