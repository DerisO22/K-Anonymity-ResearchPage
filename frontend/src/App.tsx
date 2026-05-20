import { useEffect } from 'react';
import './App.css';
import { useTheme, useThemeToggle } from './stores/ThemesStore';

function App() {
	const theme = useTheme();
	const toggleTheme = useThemeToggle();

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);	

	return (
		<>
			<div className="text">Hello Tests</div>
			<button className='toggle_theme_button' onClick={toggleTheme}>
				{theme}
			</button>
		</>
	)
}

export default App;