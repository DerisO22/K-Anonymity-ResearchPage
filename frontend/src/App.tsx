import { useEffect } from 'react';
import './App.css';
import { useTheme } from './stores/ThemesStore';
import ThemeButton from './components/ThemeButton';
import { HashRouter } from 'react-router-dom';
import PageRouter from './components/PageRouter';

function App() {
	const theme = useTheme();

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);	

	return (
		<>

			<div className="text">Hello Tests</div>
			<ThemeButton />

			<HashRouter>
				<PageRouter />
			</HashRouter>
		</>
	)
}

export default App;