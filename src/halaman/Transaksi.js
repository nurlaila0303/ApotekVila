import ListGroup from 'react-bootstrap/ListGroup';


const Transaksi=()=> {
    return (
        <div style={{padding:"100px", marginLeft:"50px"}}>
            <ListGroup>
            <ListGroup.Item>Nama Obat</ListGroup.Item>
            <ListGroup.Item>Jumlah Obat</ListGroup.Item>
            <ListGroup.Item>Tanggal Transaksi</ListGroup.Item>
            <ListGroup.Item>Harga Obat</ListGroup.Item>
            <ListGroup.Item>Total Harga</ListGroup.Item>
            </ListGroup>
        </div>
    );
}

export default Transaksi;