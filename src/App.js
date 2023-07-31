import logo from './logo.svg';
import './App.css';

import Button from './component/useButton';
import ButtonGroup from './component/useButtonGroup';
import SwiperSlide from './component/useSwiperSlide';


function App() {
  return (
    <div className="App">
      <header >
      </header>
        <article>
            <Button/>
            <ButtonGroup/>
            <SwiperSlide/>
        </article>

    </div>



  );
}

export default App;
