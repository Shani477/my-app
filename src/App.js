import logo from './logo.svg';
import './App.css';

let name='Harry';
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      <h1>Hello {name}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta quaerat commodi, sed iste beatae perferendis saepe odit quo, laudantium maiores reprehenderit quasi possimus praesentium numquam asperiores reiciendis ullam voluptas.
      </p>
    </div>
    </>
    
  );
}

export default App;
