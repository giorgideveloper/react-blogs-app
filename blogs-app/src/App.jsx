import './App.css';
import { Routes, Route } from 'react-router-dom';
import NotfoundPage from './page/NotfoundPage';
import HomePage from './page/HomePage';
import BlogPage from './page/BlogPage';
import AppBar from './components/appbar/AppBar';
import PostPage from './page/PostPage';

function App() {
	return (
		<>
			<header>
				<AppBar />
			</header>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='blog' element={<BlogPage />} />
				<Route path='blog/post/:id' element={<PostPage />} />
				<Route path='*' element={<NotfoundPage />} />
			</Routes>
		</>
	);
}

export default App;
