import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import './App.css';
import { Introduction } from './components/Introduction';
import { introductionBlurb, title } from './textContent';
import { RedesignProject } from './components/Projects'
import { PersonasProject } from './components/Projects/PersonasProject';
import { CssVarsProvider } from '@mui/joy';
import { IterativeProject } from './components/Projects/IterativeProject';
import CoolTitle from './components/CoolTitle/CoolTitle';
import { MidpointProject } from './components/Projects/MidpointProject';

function App() {
  return (
    <CssVarsProvider>
      <ChakraProvider>
        <div className="App">
          <div style={{display: 'flex'}}>
          <div style={{paddingLeft: '50px', paddingRight: '30px', width: '40%', marginTop: '-30px'}}>
          {CoolTitle()} 
          </div>
          <div className="portfolio-pieces" >
            <RedesignProject />
            <IterativeProject />
            <MidpointProject />
            <PersonasProject />
          </div>
          </div>
          <Introduction title={title} blurb={introductionBlurb} />
          <div className="bottom-right">
            ~ Wonderful Fruglet 🐸
          </div>
        </div>
      </ChakraProvider>
    </CssVarsProvider>
  );
}

export default App;
