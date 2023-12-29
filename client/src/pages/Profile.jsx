import { Card, Row } from "react-bootstrap";

const Profile = () => {
    return (
        <>
            <div className="container">
                <Card className="card-profile shadow col-lg-6 mx-auto mt-5">
                    <Card.Body>
                        <Row>
                            <div className="col">
                                <div className="card-profile-stats d-flex justify-content-center">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                    style={{ width: "60px" }}
                                    alt="img"
                                />
                                </div>
                            </div>
                        </Row>
                        <div className="text-center">
                            <h3>Name</h3>
                            <h4>
                                <i class="fa-solid fa-envelope email"></i>&nbsp;:-{" "}
                                <span>email</span>{" "}
                            </h4>
                            <h5>
                                <i class="fa-solid fa-mobile"></i>&nbsp;:-{" "}
                                <span>9876543210</span>{" "}
                            </h5>
                            <h4>
                                <i class="fa-solid fa-person"></i>&nbsp;:- <span>Male</span>{" "}
                            </h4>
                            <h4>
                                <i class="fa-solid fa-location-pin location"></i>&nbsp;:-{" "}
                                <span>Delhi</span>{" "}
                            </h4>
                            <h4>
                                Status&nbsp;:- <span>Active</span>{" "}
                            </h4>
                            <h5>
                                <i class="fa-solid fa-calendar-days calendar"></i>&nbsp;Date
                                Created&nbsp;:- <span></span>{" "}
                            </h5>
                            <h5>
                                {" "}
                                <i class="fa-solid fa-calendar-days calendar"></i>&nbsp;Date
                                Updated&nbsp;:- <span></span>{" "}
                            </h5>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};
export default Profile;
