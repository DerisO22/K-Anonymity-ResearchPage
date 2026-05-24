import { useThemeStore, useThemeToggle } from '../stores/ThemesStore';
import './ThemeButton.css';

const ThemeButton = () => {
    const {theme} = useThemeStore();
    const toggleTheme = useThemeToggle();

    return (
        <button className='theme_toggle_button' onClick={toggleTheme} />
    )
}

export default ThemeButton
