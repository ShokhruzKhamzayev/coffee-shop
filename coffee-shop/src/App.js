import Header from "./Header/Header";
import Main from "./Main/Main";
import Info_one from "./Info_one/Info_one";
import Info_two from "./Info_two/Info_two";
import Menu_coffee from "./Menu_coffe/Menu_coffee";
import Footer from "./Footer/Footer";
import './css/style.css'


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
