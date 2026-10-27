import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { getAllCategories } from "../src/services/KategoriServices";

function Kategori() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

//   FUNFSI BARU UNTUK MENGAMBIL DATA DARI ENDPOINT
const loadData = async()=>{
    try {
        setLoading(true);
        setError('');
        const response = await getAllCategories();
        console.log(response.data);
        setData(response.data);
        
    } catch (error) {
        console.log(error);
        setError(
            'Gagal Mengambil data kategori'
        );
    }finally{
        setLoading(false)
    }
}
useEffect(()=>{
    loadData();
},[]);

if (loading){
    return <Loading />
}
  return (
    <section>
    <div className="card border-0 shadow sm">
        <div className="card-body">
            <div className="table table-responsive">
                <table className="table-hover align-middle">
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Deskripsi</th>
                    </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
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
export default Kategori;
