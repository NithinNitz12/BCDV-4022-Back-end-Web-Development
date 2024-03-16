


import Blocks from './components/blocks'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/theme'; 
import CssBaseline from '@mui/material/CssBaseline';

function App() {


  return (
    <ThemeProvider theme={theme}>
          <CssBaseline /> 
                  <BrowserRouter>
                      <Routes>
                          <Route path="/" element={<Blocks />} />
                      </Routes>
                  </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
