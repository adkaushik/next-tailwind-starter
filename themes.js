
export const LIGHT_THEME = 'light';
export const PRIMARY_THEME = 'primary';

export const themes = {
  light: {
    transparent: 'transparent',
    current: 'currentColor',
    black: '#0b2641',
    background: '#f4f9fd',
    gray: '#4e6177',
    darkGray: '#13294a',
    blue: '#7970fc',
    white: '#edf5f7',
    primary: '#7d6ec7',
    pureWhite: '#fff',

    solidLight: '#f4f9fd',
    solidPrimary: '#8f6654',
    solidDark: '#0a1119',
    solidPink: '#bdb8b3'

  },
  primary: {
    transparent: 'transparent',
    current: 'currentColor',
    black: '#151515',
    background: '#fffbf2',
    gray: '#bdb8b3',
    darkGray: '#5f5b52',
    blue: '#bdb8b3',
    white: '#fafaf3',
    primary: '#8f6654',
    pureWhite: '#fff',

    solidLight: '#f4f9fd',
    solidPrimary: '#8f6654',
    solidDark: '#0a1119',
    solidPink: '#bdb8b3'
  },
  dark: {
    transparent: 'transparent',
    current: 'currentColor',
    black: '#fefefe',
    background: '#0a1119',
    gray: '#f2f2f2',
    darkGray: '#45505b',
    blue: '#2f6cfa',
    white: '#0c1019',
    primary: '#2d6bf3',
    pureWhite: '#fff',

    solidLight: '#f4f9fd',
    solidPrimary: '#8f6654',
    solidDark: '#0a1119',
    solidPink: '#bdb8b3'
  }
};

export const getActiveTheme = activeThemeName => {
  return themes[activeThemeName];
};

function setCSSVar(property, color) {
  document.documentElement.style.setProperty(property, color);
}

export const setThemeConfig = inputTheme => {
  if (inputTheme === 'primary') {
    const theme = themes.primary;
    Object.keys(theme).forEach(key => {
      setCSSVar(`--color-${key}`, theme[key]);
    });
    localStorage.setItem('theme', inputTheme);
  } else if (inputTheme === 'dark') {
    const theme = themes.dark;
    Object.keys(theme).forEach(key => {
      setCSSVar(`--color-${key}`, theme[key]);
    });
    localStorage.setItem('theme', inputTheme);
  } else {
    const theme = themes.light;
    Object.keys(theme).forEach(key => {
      setCSSVar(`--color-${key}`, theme[key]);
    });
    localStorage.setItem('theme', inputTheme);
  }
};

export const toggleTheme = () => {
  const currentTheme = localStorage.getItem('theme') || 'primary';

  if (currentTheme === 'light') {
    const theme = themes.primary;
    Object.keys(theme).forEach(key => {
      setCSSVar(`--color-${key}`, theme[key]);
    });
    localStorage.setItem('theme', 'primary');
  } else {
    const theme = themes.light;
    Object.keys(theme).forEach(key => {
      setCSSVar(`--color-${key}`, theme[key]);
    });
    localStorage.setItem('theme', 'light');
  }
}
