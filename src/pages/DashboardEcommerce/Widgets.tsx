import React from 'react';
import CountUp from "react-countup";
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Row } from 'reactstrap';
import img3 from "../../assets/images/small/img-3.jpg";

const Widgets = () => {
    return (
        <React.Fragment>
            <Row xl={4}>
                <Card className="w-100 h-auto">
                    <img src={img3} className="card-img-top object-fit-cover" style={{ height: "150px" }} alt="..." />
                    <CardBody className="p-2">
                        <h5 className="card-title mb-0">DGH ARGE YAZILIM DANIŞMANLIK ENERJİ İNŞAAT SAN.TİC.LTD.ŞTİ</h5>
                    </CardBody>
                </Card>
            </Row>
        </React.Fragment>
    );
};

export default Widgets;