import { createContext } from 'react';

export const themes = {
	light: {
		backround: '#eeeeee',
		textColor: '#444444',
	},
	dark: {
		backround: '#444444',
		textColor: '#eeeeee',
	},
};

export const ThemeContext = createContext(themes.light);
