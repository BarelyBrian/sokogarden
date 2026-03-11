
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AddProduct from './components/AddProduct';
import GetProduct from './components/GetProducts';
import MpesaPayment from './components/MpesaPayment';
import { BrowserRouter,Routes,Route } from 'react-router';
import NavBar from './components/NavBar1';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header bg-info     ">
      <h1 className="text-center p-3 fw-bold">SokoGarden- Buy and Sell Online</h1>
      </header>
    <NavBar/>
      {/* {Create the routes} */}
      <Routes>
        {/* map a single route */}
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/' element={<GetProduct/>}/>
        <Route path='/mpesapayment' element={<MpesaPayment/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
