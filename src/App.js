import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Welcoming from './components/Welcoming';

function App() {
  return (
    <div className="main">
     <Header/>
     <Welcoming />
     <Projects/>
    </div>
  );
}

export default App;
