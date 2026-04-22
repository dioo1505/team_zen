import Boost from './components/boost/Boost'
import Cashback from './components/cashback/Cashback'
import Currencies from './components/currencies/Currencies'
import Easy from './components/easy/Easy'
import Fees from './components/fees/Fees'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import MasterCard from './components/mastercard/MasterCard'
import Zen from './components/zen/Zen'

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Boost/>
      <Zen/>
      <Cashback/>
      <MasterCard/>
      <Fees/>
      <Currencies/>
      <Easy/>
      <Footer/>
    </div>
  )
}

export default App
