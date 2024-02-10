import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Service from "./pages/Service/Service";





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/service" element={<Service/>}/>
            
          </Routes>
        </BrowserRouter>
        

      </header>
    </div>
  );
}

export default App;
