import {Routes, Route, Router} from 'react-router-dom';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Beranda from "../pages/Beranda";
import Kategori from '../pages/Kategori';
import TambahKategori from '../pages/TambahKategori';
import EditKategori from '../pages/EditKategori';


import Movies from '../pages/Movies';
import EditMovies from '../pages/EditMovies';
import TambahMovies from '../pages/TambahMovies';

function App(){
  return (
    <>
      <Navbar/>
      <main>
        <Routes>
          <Route path ="/" element = {<Beranda/>}/>
          <Route path ="/kategori" element = {<Kategori/>}/>
          <Route path ="/kategori/tambah" element = {<TambahKategori/>}/>
          <Route path="/kategori/edit/:id" element={<EditKategori/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/movie/edit/:id" element={<EditMovies/>}/>
          <Route path="/movies/tambah" element={<TambahMovies/>}/>
          </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App;