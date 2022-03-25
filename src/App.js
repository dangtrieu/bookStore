import './App.style.js';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import "bootstrap/dist/css/bootstrap.css";
import * as S from './App.style';
import LatePage from './components/LatePage/LatePage.jsx';



function App() {
  return (
    <S.apps>
      <Header />
      <Footer />
      <LatePage />
    </S.apps>
  );
}

export default App;
