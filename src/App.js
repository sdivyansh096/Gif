import './App.css';
import Random from './components/Random';
import Tags from './components/Tags';
function App() {
  return (
    <div className="w-full min-h-screen p-8 flex flex-col background relative overflow-x-hidden items-center">
      <h1 className=" bg-white rounded-xl text-center w-full
       px-10 py-3 text-xl lg:text-3xl font-bold ">Random Gifs Generator</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tags/>
      </div>
    </div>
  );
}

export default App;
