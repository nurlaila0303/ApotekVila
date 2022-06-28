import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Pelanggan=()=> {
    return (
        <div style={{padding:"80px", marginLeft:"50px"}}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name </Form.Label>
                                <Form.Control type="name" placeholder="Enter your name" />
                                <Form.Text >
                                    Fill in the table with your full name
                                </Form.Text >
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="address" placeholder="Enter Address" />
                            </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="Username" placeholder="Enter Username" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                    <div className="col">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="email" placeholder="Enter your phone" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Date of birth</Form.Label>
                                <Form.Control type="Date of birth" placeholder="Date of birth" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control type="Gender" placeholder="Gender" />
                            </Form.Group>

                        </Form>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Pelanggan;