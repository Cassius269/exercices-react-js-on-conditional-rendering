import Footer from "./components/Footer"
import Header from "./components/Header"
import Notification from "./components/Notification"
import Notifications from "./components/Notifications.jsx"

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <h1>hello world</h1>
        <Notifications />
      </main>
      <Footer />
    </>
  )
}

export default App
