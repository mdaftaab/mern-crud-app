import { Card, Button, Form, Row } from "react-bootstrap";
import Select from "react-select";

const Register = () => {
    // status optios
    const options = [
        { value: "Active", label: "Active" },
        { value: "InActive", label: "InActive" },
    ];

    return (
        <>
            <div className="container">
                <h2 className="text-center mt-1">Register Your Details</h2>
                <Card className="shadow mt-3 p-3">
                    <div className="profile_div text-center">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                            style={{ width: "60px" }}
                            alt="img"
                        />
                    </div>
                    <Form>
                        <Row>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="fname"
                                    placeholder="Enter FirstName"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lname"
                                    placeholder="Enter LastName"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Enter Email"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Label>Mobile</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="mobile"
                                    placeholder="Enter Mobile"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Label>Select Your Gender</Form.Label>
                                <Form.Check
                                    type={"radio"}
                                    label={`Male`}
                                    name="gender"
                                    value={"Male"}
                                />
                                <Form.Check
                                    type={"radio"}
                                    label={`Female`}
                                    name="gender"
                                    value={"Female"}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Label>Select Your Status</Form.Label>
                                <Select options={options} />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Label>Select Your Profile</Form.Label>
                                <Form.Control
                                    type="file"
                                    name="user_profile"
                                    placeholder="Select Your Profile"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Label>Enter Your Location</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="location"
                                    placeholder="Enter Your Location"
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Row>
                    </Form>
                </Card>
            </div>
        </>
    );
};
export default Register;
