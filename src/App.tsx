
import Hero from "./layouts/Hero";
import PreLoader from "./layouts/PreLoader/PreLoader";
import Products from "./common/components/Products";
import Footer from "./layouts/Footer";
import Nav from "./layouts/Nav";

function App() {

  return (
    <>
    <PreLoader/>
      <main>
        <Nav/>
        <Hero />
        <Products/>
        <Footer/>
      </main>
    </>
  );
}

export default App;
