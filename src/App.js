import './App.style.js';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import "bootstrap/dist/css/bootstrap.css";
import * as S from './App.style';
import { FaBitcoin } from 'react-icons/fa';


function App() {
  return (
    <S.apps>
      <div>
        <FaBitcoin />




      </div>
      <Header />9+
      <Footer />
    </S.apps>
  );
}

export default App;
