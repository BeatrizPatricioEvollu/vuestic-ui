export const originalTheme = Object.freeze({
  context: {
    'gradient': true,
    'shadow': 'lg', // 3 states: 'sm', 'lg', undefined (no shadow).
    'invertedColor': false,
  },
  colors: {
    primary: '#29c4a9',
    secondary: '#34f5d4',
    success: '#29c4a9',
    info: '#29c4a9',
    danger: '#e34b4a',
    warning: '#ffc200',
    gray: '#A49D97',
    dark: '#414244',
  },
})

export const corporateTheme = Object.freeze({
  context: {
    'gradient': false,
    'shadow': 'sm',
    'invertedColor': true,
  },
  colors: {
    primary: '#6c7fee',
    secondary: '#6e7ff1',
    success: '#8ddc88',
    info: '#71baff',
    danger: '#f8706d',
    warning: '#ffd652',
    gray: '#8396a5',
    dark: '#34495e',
  },
})
