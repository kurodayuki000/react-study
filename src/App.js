import './App.css';
import { CssModules } from './components/CssModules';
import { InlineStyle } from './components/inlineStyle';
import { StyleComponents } from './components/styled-components';
import { StyledJsx } from './components/StyledJsx';

function App() {
  return (
    <div className="App">
     <InlineStyle />
     <CssModules />
     <StyledJsx />
     <StyleComponents />
    </div>
  );
}

export default App;
