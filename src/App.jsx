import Footer from "./components/Footer"
import Header from "./components/Header"
import Notification from "./components/Notification"

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <h1>hello world</h1>
        <Notification type='success' message='Ajout échoué' loading={true} />
      </main>
      <Footer />
    </>
  )
}

export default App
