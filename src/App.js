import './css/style.css'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Info_one from './Components/Info_one';
import Info_two from './Components/Info_two'
import Main from './Components/Main'
import Menu_coffee from './Components/Menu_coffee'


function App() {
  
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <Main></Main>
      </div>
      <Info_one></Info_one>
      <Info_two></Info_two>
      <div className="container">
        <Menu_coffee></Menu_coffee>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
