import React from "react";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export default function PlanCard({ plan }) {
  return (
    <div>
      <Card>
        <Row>
          <Col xs={4} sm={12}>
            <CardImg top height="100%" src={plan.bannerSrc} alt={plan.name} />
          </Col>
          <Col>
            <CardBody>
              <CardTitle tag="h5">{plan.name}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {plan.price}
              </CardSubtitle>
              <CardText>{plan.description}</CardText>
              <Button>{plan.price}</Button>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
