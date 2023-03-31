import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header'
import { Home } from './Component/Home/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
