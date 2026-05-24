import { useEffect } from 'react';
import './App.css';
import { useTheme } from './stores/ThemesStore';
import ThemeButton from './components/ThemeButton';

function App() {
	const theme = useTheme();

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);	

	return (
		<>
			<div className="text">Hello Tests</div>
			<ThemeButton />
		</>
	)
}

export default App;