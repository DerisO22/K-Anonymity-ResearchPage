import { useEffect } from 'react';
import './App.css';
import { useTheme } from './stores/ThemesStore';
import { HashRouter } from 'react-router-dom';
import PageRouter from './components/PageRouter';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
	const theme = useTheme();

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);

	return (
		<>
			<HashRouter>
				<div className="app_layout">
					<Navbar />
					<PageRouter />
					<Footer />
				</div>
			</HashRouter>
		</>
	)
}

export default App;