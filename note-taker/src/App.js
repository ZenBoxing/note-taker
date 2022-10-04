import './App.css';

function App() {
  return (
    <div className="App">
      <p className="Test">Text to testing</p>
      <button className="MainButton" onClick={onButtonClick()}>
        Click Here
      </button>
    </div>
  );
}


function onButtonClick(){
  // const selectedText = window.getSelection().toString();
   alert("hello!");
}

export default App;
