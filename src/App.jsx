import Book from "./book"
import { Route, Routes } from 'react-router-dom'
import Home from './home';
import Nav from "./components/nav";
function App() {
  return (
    <main className=" bg-zinc-50 h-screen  ">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </main>
  )
}

export default App
