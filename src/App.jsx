import Footer from "./components/Footer"
import Header from "./components/Header"
import Notification from "./components/Notification"

function App() {
  return (
    <>
      <Header />
      <main>
        <h1>hello world</h1>
        <Notification type='success' message='Ajout réussi' loading={true} />
      </main>
      <Footer />
    </>
  )
}

export default App
