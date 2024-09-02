
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {
  return (
    <>
<Navbar title="TextUtils" />
<div className="container my-3">
<Textform heading="Enter text to analye below"/>
</div>

{/* <Navbar /> */}
    </>
    
  );
}

export default App;