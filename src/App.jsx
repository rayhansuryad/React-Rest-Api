import {Routes, Route} from 'react-router-dom';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Beranda from "../pages/Beranda";
import Kategori from '../pages/Kategori';
import TambahKategori from '../pages/TambahKategori';

function App(){
  return (
    <>
      <Navbar/>
      <main>
        <Routes>
          <Route path ="/" element = {<Beranda/>}/>
          <Route path ="/kategori" element = {<Kategori/>}/>
          <Route path ="/kategori/tambah" element = {<TambahKategori/>}/>
          </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App;