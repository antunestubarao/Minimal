import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Conteudo from "./components/Conteudo";

function App() {
  return (
    <>
      <Header />

      <Conteudo />
      <div className="box-cards">
        <Card />
      </div>

      <Footer />
    </>
  );
}

export default App;
