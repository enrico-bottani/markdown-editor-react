import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import CodeMirror, {Editor} from "@uiw/react-codemirror";
import "codemirror/theme/monokai.css";
import './App.css';
import 'bootstrap';

const code = 'const a = 0;';

type ExcerciseProps = {
  title: string
}

function App() {
  const [code, setCode] = useState<string>("# Hello, **world**!");

  let callback = function(editor: Editor,data:any){
    console.log(editor.getValue())
    setCode(editor.getValue())
  }

  return (
    
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <div className="row editor-row">
            <div className="col-6">
              <CodeMirror value={code} onChange={callback} height={300} options={{
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
