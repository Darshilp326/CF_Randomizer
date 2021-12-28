import './App.css';
import Home from './components/Home/Home';
import ProblemList from './components/ProblemList';
import Slider from './components/Slider';
import { getPromblemsListFromStorage } from './helpers/getLocal';

const problems = getPromblemsListFromStorage();
const App = function () {
  return (
    <div className="App">
      <Home problemList={problems} />
    </div>
  );
};

export default App;
