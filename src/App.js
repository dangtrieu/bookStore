import './App.style.js';
import "bootstrap/dist/css/bootstrap.css";
import * as S from './App.style';
import Router from './Router'


function App() {
  return (
    <S.apps>
      <h2>Trieu oc</h2>
      <Router />
    </S.apps>
  );
}

export default App;
