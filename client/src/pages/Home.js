import React, { useState, useEffect } from 'react';
import Editor from '../components/Editor'
import Timer from "../components/Timer";
import useLocalStorage from '../components/Storage'
import "./Home.css"

function Home() {
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
    }, [js])

    return (
      <>
      <div className="pane top-pane">
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
      <Timer />
      <button className="go-btn">GO</button>
    </>
  );
}

export default Home;
