import './App.css';
import ProductList from './components/ProductList';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
     <ProductList />
     <br/>
     <Footer />
    </div>
  );
}

export default App;
