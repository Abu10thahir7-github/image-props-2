import "./App.css";
import img1 from './img/img-1.png'
import img2 from './img/img-2.png'
import img3 from './img/img-3.png'
import Main from "./main";
function App() {
  return (
    <div className="App">
      
      <Main
       img1={img1}
       img2={img2}
       img3={img3}
        />
   
    </div>
  );
}

export default App;
