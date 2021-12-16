import React from 'react';
import ReactMarkdown from 'react-markdown'
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/theme/monokai.css";
import './App.css';
import 'bootstrap';

const code = 'const a = 0;';


function App() {
  let code = "# Hello, **world**!";
  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <div className="row">
            <div className="col-6">
              <CodeMirror value={code} height={"100%"} options={{
                theme: "monokai",
                mode: "markdown"
              }}
              />
            </div>
            <div className="col-6">
              <ReactMarkdown>{code}</ReactMarkdown>
            </div>
          </div>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
