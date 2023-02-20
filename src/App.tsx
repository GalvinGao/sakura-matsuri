import { Header, NavigationBar } from './components/Header/Header'
import { Home } from './pages/Home/Home'

function App() {
  return (
    <main className="w-full h-full relative">
      <Header />
      <Home />
      <NavigationBar />
    </main>
  )
}

export default App
