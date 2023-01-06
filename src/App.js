import Header from './components/Header';
import Main from './components/Main';
import Ido from './components/Ido';
import Projs from './components/Projs';
import Menu from './components/Menu'
import Collab from './components/Collab';

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <Main />
      <Ido />
      <Projs />
      <Collab />
    </div>
  );

}

export default App;
