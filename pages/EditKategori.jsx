import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getCategoriesById,
  updateCategories,
} from "../src/services/KategoriServices";
import Loading from "../components/Loading";

function EditKategori() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, [])

  const loadData = async () => {
    try {
      const response = await getCategoriesById(id);
      console.log(response.data);
      setForm({
        name: response.data.name,
        description: response.data.description,
      });
    } catch (error) {
      console.log(error);
      alert("Data tidak di temukan ");
      navigate("/kategori");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // fungsi untuk mengupdate ke api penyimpanan
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      console.log("Data yang di kirim:", form);
      await updateCategories(id, form);
      alert("Data berhasil di Update");
      navigate("/kategori");
    } catch (error) {
      console.log(error);
      alert("Data gagal di Update");
    }
  };
  if (loading) {
    <Loading />;
  }
  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="card-border-0 shadow-sm">
              <div className="card-body p-4">
                <h3 className="fw-bold mb-4">Edit Kategory</h3>
                <form onSubmit={handleUpdate}>
                  <div className="mb-3">
                    <label htmlFor="" className="mb-3">
                      Name Kategori
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="name"
                      value={form.value}
                      className="form-control"
                      placeholder="Masukan Nama Kategori"
                      required
                    />
                  </div>
                  <div className="mb">
                    <label htmlFor="" className="form-label">
                      Deskripsi
                    </label>
                    <textarea
                      onChange={handleChange}
                      name="description"
                      value={form.description}
                      className="form-control"
                      rows="5"
                      placeholder="Tuliskan Deskripsi"
                      required
                    ></textarea>
                  </div>
                  <div className="d-flex gap-2">
                    <button className="btn btn-primary">
                      <i className="bi bi-save me-2"></i> Update
                    </button>
                    <button
                      type="button"
                      onClick={() => "/kategori"}
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
export default EditKategori;
