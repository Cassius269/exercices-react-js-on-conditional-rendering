import Footer from "./components/Footer"
import Header from "./components/Header"
import Notifications from "./components/Notifications.jsx"
import Basket from "./components/Basket.jsx"

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Basket />
        <Notifications />
      </main>
      <Footer />
    </>
  )
}

export default App
