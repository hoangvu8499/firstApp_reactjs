import logo from './logo.svg';
import './App.css';

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
          <p>My name is...</p>
        </div>
      </div>

      <div className="rightPage">
        <div className="topPage">
          <h3>Introducing Yourself Self</h3>
          <h3>Introduction with Text Boxes</h3>
          <hr className="line"></hr>
        </div>

        <div className="bottomPage">
          <div className="text">
            <div className="content_bottom">
              <div className="text_heading">TextHere 01</div>
              <div class="text_details">
                This slide is 100% editable. Adapt it to your needs and capture
                your audience's attention.
              </div>
            </div>
          </div>

          <div className="text">
            <div className="content_bottom">
              <div className="text_heading">TextHere 02</div>
              <div class="text_details">
                This slide is 100% editable. Adapt it to your needs and capture
                your audience's attention.
              </div>
            </div>
          </div>

          <div className="text">
            <div className="content_bottom">
              <div className="text_heading">TextHere 03</div>
              <div class="text_details">
                This slide is 100% editable. Adapt it to your needs and capture
                your audience's attention.
              </div>
            </div>
          </div>

          <div className="text">
            <div className="content_bottom">
              <div className="text_heading">TextHere 04</div>
              <div class="text_details">
                This slide is 100% editable. Adapt it to your needs and capture
                your audience's attention.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
