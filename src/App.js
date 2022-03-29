import './App.style.js';
import "bootstrap/dist/css/bootstrap.css";
import * as S from './App.style';
import Router from './Router'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBooks } from './Redux/Action.jsx';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBooks());
  }, [])
  return (
    <S.apps>
      <Router />
    </S.apps>
  );
}

export default App;
