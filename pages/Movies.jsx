import { useEffect, useState } from "react";
import { getAllMovies } from "../src/services/MoviesServices";
import { deleteMovies } from "../src/services/MoviesServices";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

function Movies() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadDataMovie = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await getAllMovies();
      console.log(response.data);
      setData(response.data);
      
    } catch (error) {
      console.log(error);
      alert("Gagal mengambil data Movie");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadDataMovie();
  }, []);
  if (loading) {
    return <Loading />;
  }
  const handleDelete = async (id) => {
    const konfirmasi = window.confirm("Apakah yakin ingin menghapus data");
    if (!konfirmasi) {
      return;
    }
    try {
      await deleteMovies(id);
      alert("Data Berhasil terhapus");
      loadDataMovie();
    } catch (error) {
      console.log(error);
      alert("Gagal menghapus data");
    }
  };
  const sortedData = [...data].sort((a, b) => Number(a.id) - Number(b.id));

  return(
    <section>
        <Link to="/movies/tambah"
        className="btn btn-primary">
            Tambah Movie
        </Link>
        <div className="card border-0 shadow sm">
                <div className="card-body">
                  <div className=" table-responsive">
                    <table className=" table table-hover align-middle table-striped">
                      <thead>
                        <tr className=" table table-dark">
                          <th>No</th>
                          <th>Title</th>
                          <th>Tahun</th>
                          {/* Tambahkan */}
                          <th>AKSI</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sortedData.map((item, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.title}</td>
                            <td>{item.year}</td>
        
                            <td>
                              <Link
                                to={`/movie/${item.id}`}
                                className="btn btn-sm btn-outline-primary"
                                title="Detail"
                              >
                                <i className="bi bi-eye"></i>
                              </Link>
                              <Link
                                to={`/movies/edit/${item.id}`}
                                className="btn btn-sm btn-outline-warning"
                                title="Edit"
                              >
                                <i className="bi bi-pencil"></i>
                              </Link>
                              <button
                                onClick={()=> handleDelete(item.id)}
                                className="btn btn-sm btn-outline-danger"
                                title="Hapus"
                              >
                                <i className="bi bi-trash"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
    </section>
  )
}
export default Movies;