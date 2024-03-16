// src/theme.js
import { createTheme } from '@mui/material/styles';

const primaryColor = '#439af0';

const headerStyles = {
    h1: { color: primaryColor, fontWeight: 'bold' },
    h2: { color: primaryColor, fontWeight: 'bold' },
    h3: { color: primaryColor, fontWeight: 'bold' }, // Different color for h3 as an example
    h4: { color: primaryColor, fontWeight: 'bold' },
    h5: { color: primaryColor, fontWeight: 'bold' },
    h6: { color: primaryColor, fontWeight: 'bold' },
};

const theme = createTheme({
    palette: {
        mode: 'light', // Switches the theme to dark mode
        // You can customize the colors for your dark theme here.
        primary: {
            main: '#1976d2', // Example blue color, adjust as needed
        },
    },
    // You can extend the theme with custom properties here.
    components: {
        // Style every instance of MUI's CssBaseline component
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: '', // Example background color
                    // You can include more global styles here
                },
            },
        }
    },
    typography: {
        ...headerStyles
    },
});

export default theme;
