import React, { useEffect,useState} from 'react';
import {Card, Container, ListGroup, Row, Col, Button, Badge, Table} from "react-bootstrap";
import axios from "axios";
import img1 from "../foto/img.png"
import {Link} from "react-router-dom";
import img_1 from "../foto/img_1.png";
import profil from "../foto/profil.png";

const Obat=()=> {
    const [obat, setobat]= useState([])

    useEffect(()=>{
        axios.get("https://nurlaila-apotek.000webhostapp.com/obat/all.php" )
            .then((res)=>{
                setobat(res.data.chapters)
            })
            .catch((error)=>{
                console.log(error, 'error handle surah')
            })
    },[])
    return (
        <div style={{padding:"20px", marginLeft:"50px", paddingRight:"50px"}}>
            <p style={{fontSize:"25px"}}>
                Data Obat
            </p>
            <Button variant="primary" size="50px" active style={{marginBottom:"10px"}}>
                Create
            </Button>
            <table class="table table-bordered border-dark">

                    <thead>
                    <tr>
                        <th scope="col" >NO</th>
                        <th scope="col" style={{width:"150px"}}>Nama Obat</th>
                        <th scope="col">Dosis</th>
                        <th scope="col">Stok</th>
                        <th scope="col">Komposisi</th>
                        <th scope="col">Tanggal Kadaluwarsa</th>
                        <th scope="col">Kegunaan</th>
                        <th scope="col">Harga Obat</th>
                        <th scope="col">Gambar</th>
                        <th scope="col" style={{width:"100px"}}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Vicks Formula 4</td>
                        <td>Gunakan setiap 4 jam</td>
                        <td>19</td>
                        <td>Setiap 5ml mengandung: Dextromethrophan Hydrobromide 5mg Doxylamine Succinate 2mg</td>
                        <td>2025-09-28</td>
                        <td>Meredakan batuk tidak berdahak, bersin-bersin, alergi dan memberikan rasa hangat di tenggorokan</td>
                        <td>Rp.22000</td>
                        <td>
                            <img
                                alt=""
                                src={img1}
                                width="100px"
                                height="100px"
                            />
                        </td>
                        <td><Button variant="success">+</Button>
                            <div className="vr" />
                            <Button variant="outline-danger">-</Button></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Paramex</td>
                        <td>Dewasa dan anak-anak diatas 12</td>
                        <td>20</td>
                        <td>Mengandung 250 mg paracetamol, 150 mg propifenazon, 50 mg kafein, dan 1 mg dexchlorpheniramine maleate</td>
                        <td>2025-03-03</td>
                        <td>Meringankan sakit kepala dan sakit gigi</td>
                        <td>Rp.5000</td>
                        <td>
                            <img
                                alt=""
                                src={img_1}
                                width="100px"
                                height="100px"
                            />
                        </td>
                        <td><Button variant="success">+</Button>
                            <div className="vr" />
                            <Button variant="outline-danger">-</Button></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><Button variant="success">+</Button>
                            <div className="vr" />
                            <Button variant="outline-danger">-</Button></td>
                    </tr>
                    </tbody>
            </table>
        </div>
    );

}
export default Obat;
