import { useEffect } from 'react';
import './App.css';
import { useTheme } from './stores/ThemesStore';
import { HashRouter } from 'react-router-dom';
import PageRouter from './components/PageRouter';
import Navbar from './components/Navbar';

function App() {
	const theme = useTheme();

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);	

	return (
		<>

			<div className="text">Hello Tests</div>

			<HashRouter>
				<PageRouter />
				<Navbar />
			</HashRouter>
		</>
	)
}

export default App;