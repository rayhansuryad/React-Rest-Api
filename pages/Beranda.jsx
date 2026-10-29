<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css"

=======
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import gambar3 from "../src/assets/gambar3.jpg"
>>>>>>> 0f00ca5d5e946ff7a745f4cf6cfcf1022268b70b
function Beranda() {
  return (
    <>
      <h1>Beranda</h1>
      <div className="card text-bg-dark">
        <img src={gambar3} className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small>Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </>
  );
}

export default Beranda;
