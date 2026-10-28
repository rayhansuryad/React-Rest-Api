import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMoviesById, updateMovies } from "../src/services/MoviesServices";
import Loading from "../components/Loading";


function EditMovies(){
    const {id} = useParams();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: "",
        year: "",
        categoryId: parseInt(id)
    });
    const [loading, setLoading] = useState(true);

    
    const loadData = async()=>{
        try {
            const response = await getMoviesById(id);
            console.log(response.data)
            setForm({
                title: response.data.title || "",
                year: response.data.year || "",
                categoryId: response.data.categoryId
            });
        } catch (error) {
            console.log(error);
            alert('Gagal memmuat data')
            navigate('/movies')
        }finally{
            setLoading(false);
        }
    };
    useEffect(()=>{
      loadData();
    },[id, navigate])
    
    const handleChange =(e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleUpdate = async (e)=>{
        e.preventDefault();
        try {
            const payload = {
        title: form.title,
        year: parseInt(form.year),
        categoryId:parseInt(form.categoryId)
      };
      await updateMovies(id, payload);
            alert('Movie berhasil di update');
            navigate('/movies')
        } catch (error) {
            console.log('Gagal Update Movie')
        }
    };

    if (loading){
        return <Loading/>
    }

    return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="card-border-0 shadow-sm">
              <div className="card-body p-4">
                <h3 className="fw-bold mb-4">Edit Movies</h3>
                <form onSubmit={handleUpdate}>
                  <div className="mb-3">
                    <label htmlFor="" className="mb-3">
                      Title
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="title"
                      value={form.title}
                      className="form-control"
                      placeholder="Masukan Title"
                      required
                    />
                  </div>
                  <div className="mb">
                    <label htmlFor="" className="form-label">
                      Deskripsi
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="year"
                      value={form.year}
                      className="form-control"
                      rows="5"
                      placeholder="Tuliskan Deskripsi"
                      required
                    ></input>
                  </div>
                  <div className="d-flex gap-2">
                    <button className="btn btn-primary">
                      <i className="bi bi-save me-2"></i> Update
                    </button>
                    <button
                      type="button"
                      onClick={() => "/movies"}
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

export default EditMovies;