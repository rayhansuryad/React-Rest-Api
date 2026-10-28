import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCategories } from "../src/services/KategoriServices";
function TambahKategori() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  //MENYIMPAN DATA ke wadah sementara
  //perubahan data field inputan
  const handleChange = async (e) =>{
    setForm({
        ...form,
        [e.target.name] : e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Data yang di kirim :", form);
      await createCategories(form);
      alert("Data berhasil di tambhakan ");
      navigate("/kategori");
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
                        <h3 className="fw-bold mb-4">
                            Tambah Kategori
                        </h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor=""
                                className="form-lead">
                                    Nama Kategori
                                </label>
                                <input 
                                onChange={handleChange}
                                type="text"
                                name="name"
                                value={form.name}
                                className="form-control"
                                placeholder="Masukan Nama" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor=""
                                className="form-lead">
                                    Deskripsi
                                </label>
                                <textarea 
                                onChange={handleChange}
                                name="description"
                                value={form.description}
                                className="form-control"
                                rows="5"
                                placeholder="Tuliskan description" required />
                            </div>
                            <div className="d-flex gap-2">
                                <button className="btn btn-primary">
                                    <i className="bi bi-save me-2">
                                    </i>
                                    Simpan
                                </button>
                                <button
                                onClick={()=> navigate('/kategori')}
                                className="btn btn-primary">
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

export default TambahKategori;
