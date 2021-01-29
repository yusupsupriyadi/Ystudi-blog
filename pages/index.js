
import Banner2 from "../components/Banner2";
import Card from "../components/Card";
import CardBuku from "../components/CardBuku";
import Footer from "../components/Footer";
import ListBahasa from "../components/ListBahasa";
import Navbar2 from "../components/Navbar2";
import Price from "../components/Price";
import Profil from "../components/Profil";


function Home() {
  return (
    <div>
      <Navbar2 />
      <Banner2 />
      <CardBuku />
      <ListBahasa />
      <Profil />
      <Price/>
      <Footer/>
    </div>
  )
}

export default Home
