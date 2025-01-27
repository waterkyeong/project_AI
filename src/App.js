import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Navi from './Compo/Navi';
import Footer from './Compo/Footer.js';

function App() {
  return (
    <BrowserRouter>
      <div className='app-container'>
        <Routes>
          <Route path="/" element={<MainApp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function MainApp() {
  const navigate = useNavigate();
  
  return (
    <div className='flex flex-col w-full h-screen'>
      <main>
      <Navi />
      </main>
      <Footer/>
    </div>
  )
}
export default App;
