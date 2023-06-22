import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Layout } from "./components/Layout/Layout";
import { Board } from "./components/Board/Board";
import { Routes, Route } from "react-router-dom";
import { Card } from "./components/Board/Card/Card";

function App() {
  return (
    <Layout>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Board />} ></Route>
          <Route path='/tasks/:cardId' element={<Card />}></Route>
        </Routes>
      </main>
      <Footer />
    </Layout>

  );
}

export default App;
