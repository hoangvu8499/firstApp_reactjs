/* eslint-disable */
import logo from './logo.svg';
import './App.css';

const user = {
  name: 'Hoang Vu',
  age: 21,
  listProduct: [
    {
      name: 'SmartPhone',
      description: 'A smartphone is a mobile smart'
    },
    {
      name: 'Laptop',
      description: 'A laptopis a small computer (PC) '
    },
    {
      name: 'smartwatches',
      description: 'A smartwatch is a wearable computer in the form of a watch'
    },
    {
      name: 'Headphone Bluetooth',
      description: 'Bluetooth headphones may also include a microphone '
    }
  ]
}

function getName(user){
  return <p>My name is {user.name}</p>
}

function getListProduct(user){
  if(user.listProduct.length > 0){
    return user.listProduct.map(item =>
      <div className="text">
        <div className="content_bottom">
          <div className="text_heading">{item.name}</div>
          <div class="text_details">
            {item.description}
          </div>
        </div>
      </div>
    )
  } 
}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="leftPage">
        <img className="img" src="https://miro.medium.com/max/554/1*Ld1KM2WSfJ9YQ4oeRf7q4Q.jpeg" />
        <div className="textName">
          <h1>Hello</h1>
          {getName(user)}
        </div>
      </div>

      <div className="rightPage">
        <div className="topPage">
          <h3>Introducing Yourself Self</h3>
          <h3>Introduction with Text Boxes</h3>
          <hr className="line"></hr>
        </div>

        <div className="bottomPage">
          {getListProduct(user)}
        </div>
      </div>
    </div>
  );
}

export default App;
