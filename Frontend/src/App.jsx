
import "prismjs/themes/prism-tomorrow.css"
import prism from "prismjs"
import { useEffect, useState } from "react"
import Editor from 'react-simple-code-editor'
import "./App.css" 
import axios from "axios"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css"


const App = () => {

  const [code, setCode] = useState(`
    function sum(a, b) {
    
  }`)

  const [review, setReview] = useState(``)

  async function reviewCode(code) {
    const response = await axios.post('http://localhost:3000/ai/get-review', { code })

    setReview(response.data)
  }


  useEffect(() => {
    prism.highlightAll()
  }, [])





  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) => prism.highlight(code, prism.languages.javascript, 'javascript')}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                borderRadius: "5px",
                border: "1px solid #ddd",
                height: "100%",
                width: "100%"
              }}
              />
          </div>
          <div
          onClick={() => reviewCode(code)}
          className="review">Review</div>
        </div>


        <div className="right">
             <Markdown 
             rehypePlugins={[rehypeHighlight]}
             >
              {review}
             </Markdown>
        </div>

      </main>

    </>
  )
}



export default App