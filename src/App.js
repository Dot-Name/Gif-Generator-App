import Tag from './components/Tag';
import Random from './components/Random';
import './App.css';
import axios from "axios";
// REACT_APP_GIPHY_API_KEY='kC0kZcGTTNZITKMQPLaxGwHeGpwYMn45'
function App() {
  return (
    <div className="relative flex flex-col items-center w-full h-screen overflow-x-hidden background">
      <h1 className="bg-white text-4xl absolute text-center mt-[40px] w-11/12 rounded-lg px-10 py-2 font-bold">RANDOM GIFS</h1>
      <div className="flex flex-col items-center w-full gap-y-10 mt-[135px]">
        <Random/>
        <Tag/>
      </div>
      
    </div>
  );
}

export default App;
