import Header from './components/Header';
import Main from './components/Main';
import Ido from './components/Ido';
import Projects from './components/Projects';
import Menu from './components/Menu'

function App() {
  return (
    <div className="App">
      <Menu/>
      <Header/>
      <Main/>
      <Ido/>
      <Projects/>
    </div>
  );
  
}

export default App;
