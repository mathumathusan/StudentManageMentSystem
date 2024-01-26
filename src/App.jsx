import { BrowserRouter, Route, Routes } from "react-router-dom"
import FormInput from "./components/FormInput"
import FormRegister from "./components/FormRegister"
import Home from "./Home"
import AddStudents from "./AddStudents"
import { ToastContainer } from "react-toastify"
import UpdateStudents from "./UpdateStudents"

function App() {
  return (
    <>   

   <BrowserRouter>
   <Routes>
  <Route path="/login" element={<FormInput/>}/>
  <Route path="/register" element={<FormRegister/>}/>
  <Route path="/" element={<Home/>}/>
  <Route path="/addstudent" element={<AddStudents/>}/>
  <Route path="/update/:id" element={<UpdateStudents/>}/>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
