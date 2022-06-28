import {Routes, Route} from "react-router-dom";
import Navbar from "./component/Navbar";
import Pelanggan from "./halaman/Pelanggan";
import Obat from "./halaman/Obat";
import Transaksi from "./halaman/Transaksi";


function App() {
    return (
        <>
            <div className="App" >
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Obat/>}/>
                    <Route path="/Pelanggan" element={<Pelanggan/>}/>
                    <Route path="/Transaksi" element={<Transaksi/>}/>

                </Routes>
            </div>
        </>
    );
}

export default App;
