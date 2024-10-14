import logo from './logo.svg';  
import './App.css';

function App() {
  let name = 'Suman Maity'
  return (
    <>
      <nav>
          <li className="liCss">Home</li>
          <li className="liCss">About</li>
          <li className="liCss">Contact</li>
      </nav>
      <div className="container">
        <h1>Hello {name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vel similique quae! Nihil dolorum facilis quisquam labore et neque sequi, eos veniam illum fuga tempora itaque consequatur, in molestiae, impedit deleniti vitae magnam nemo ratione.</p>
      </div>
    </>
  );
}

export default App;
