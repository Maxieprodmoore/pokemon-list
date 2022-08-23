import './styles/master.css';
import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
import PokedexPage from './pages/PokedexPage';
setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.81/dist');


function App() {
  return (
    <div className="App">
      <PokedexPage />
    </div>
  );
}

export default App;
