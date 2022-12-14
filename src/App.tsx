import { ChakraProvider } from '@chakra-ui/react';
import { NextUIProvider } from '@nextui-org/react';
import React from 'react';
import './App.css';
import { Introduction } from './components/Introduction';
import { introductionBlurb, title } from './textContent';
import { RedesignProject } from './components/Projects'
import { PersonasProject } from './components/Projects/PersonasProject';
import { CssVarsProvider } from '@mui/joy';

function App() {
  return (
    <CssVarsProvider>
      <ChakraProvider>
        <div className="App">
          <Introduction title={title} blurb={introductionBlurb} />
          <div className="portfolio-pieces">
            <RedesignProject />
            <PersonasProject />
          </div>
        </div>
      </ChakraProvider>
    </CssVarsProvider>
  );
}

export default App;
