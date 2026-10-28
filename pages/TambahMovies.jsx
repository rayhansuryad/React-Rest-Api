import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createMovies } from "../src/services/MoviesServices";
import { getAllCategories } from "../src/services/KategoriServices";

function TambahMovies() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  const [form, setForm] = useState({
    title: "",
    year: "",
    categoryId: "",
    userId: localStorage.getItem("userId") || 1,
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllCategories(); //
        setCategories(response.data);
      } catch (error) {
        console.error("Gagal mengambil data kategori:", error);
      }
    };

    fetchCategories();
  }, []);

  //MENYIMPAN DATA ke wadah sementara
  //perubahan data field inputan
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!form.categoryId) {
        alert("Silakan pilih kategori terlebih dahulu!");
        return;
      }
      const payload = {
        title: form.title,
        year: parseInt(form.year),           // Mengubah "123" -> 123
        categoryId: parseInt(form.categoryId), // Mengubah string ID -> Angka ID
        userId: parseInt(form.userId)         // Mengubah string ID -> Angka ID
      };

      console.log("Data yang di kirim ke backend:", payload);
      
      // Kirim objek payload yang sudah dikonversi
      await createMovies(payload); 
      
      alert("Data berhasil ditambahkan");
      navigate("/movies");
    } catch (error) {
      console.log(error);
      alert("Gagal menambahkan data");
    }
  };
  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="card border-8 shadow-sm">
              <div className="card-body p-4">
                <h3 className="fw-bold mb-4">Tambah Movie</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="" className="form-lead">
                      Title
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="title"
                      value={form.title}
                      className="form-control"
                      placeholder="Masukan title"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-lead">
                      year
                    </label>
                    <input
                      onChange={handleChange}
                      name="year"
                      value={form.year}
                      className="form-control"
                      rows="5"
                      placeholder="Tuliskan year"
                      required
                    />
                  </div>
                <div className="mb-3">
                    <label className="form-label mb-2">Category</label>
                    <select
                      onChange={handleChange}
                      name="categoryId"
                      value={form.categoryId}
                      className="form-select"
                      required
                    >
                      <option value="">-- Pilih Kategori --</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name} {/* Menampilkan nama kategori, tetapi menyimpan ID-nya */}
                        </option>
                      ))}
                    </select>
                  </div>
                    <div className="d-flex gap-2 mt-4">
                    <button type="submit" className="btn btn-primary">
                      <i className="bi bi-save me-2"></i> Simpan
                    </button>
                    <button
                      type="button"
                      onClick={() => navigate("/movies")}
                      className="btn btn-secondary"
                    >
                      Batal
                    </button>
                  </div>
                    

                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TambahMovies;
