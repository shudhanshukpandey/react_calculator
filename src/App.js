// import logo from './logo.svg';
import './App.css';
import Routes from './routes/routes';
import Navbar from './pages/navbar/navbar';


// import Home from './pages/home/home';

function App() {
  return (
   <>
   <Navbar/>
   
   <div className="container">
      {/* <Home/> */}
      <Routes/>
   </div>
   </>
  );
}

export default App;
