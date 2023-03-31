import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header'
import { Home } from './Component/Home/Home';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
    </div>
  )
}

export default App
