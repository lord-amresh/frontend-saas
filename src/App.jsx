import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>This is home page</h1>}/>
      <Route path="/about" element={<h2>This is about page</h2>}/>
      <Route path="/contact" element={<div>
        <h2>This is a contact page</h2>
        <p>here will be our contact description</p>
        <p>Contact No : 9818062229</p>
        <a href="/about">Go to About Page</a>
      </div>}/>
    </Routes>
    </BrowserRouter>

  )
}

// component vaneko type of function jasle jaile ni JSX return garxa (JSX = html jasto syntax)

export default App
