import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MyCartPage from "./pages/MyCartPage"
import BookingPage from "./pages/BookingPage"
import PaymentPage from "./pages/paymentPage"
import SuccessBookingPage from "./pages/SuccessBookingPage"
import MyBookingPage from "./pages/MyBookingPage"
import DetailsPage from "./pages/DetailsPage"
import CategoryPage from "./pages/CategoryPage"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/cart" element={<MyCartPage></MyCartPage>}></Route>
      <Route path="/booking" element={<BookingPage></BookingPage>}></Route>
      <Route path="/payment" element={<PaymentPage></PaymentPage>}></Route>
      <Route path="/success-booking" element={<SuccessBookingPage></SuccessBookingPage>}></Route>
      <Route path="/my-booking" element={<MyBookingPage></MyBookingPage>}></Route>
      
      <Route path="/service/:slug" element={<DetailsPage></DetailsPage>}></Route>
      <Route path="/category/:slug" element={<CategoryPage></CategoryPage>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
