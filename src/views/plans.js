import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Jumbotron, Button } from "reactstrap";
import { PlanCard } from "../components";

const plans = [
  {
    name: "Started",
    bannerSrc: "https://dummyimage.com/200x200/000/fcfcfc&text=%20%20Starter",
    price: "10$",
    description: "For the new born seedlings",
    _id: "6e17fd53-8b93-48e8-8c66-61ee2d7ad788",
    private: false
  },
  {
    name: "Basic",
    bannerSrc: "https://dummyimage.com/200x200/000/fcfcfc&text=%20Basic%20",
    price: "50$",
    description: "For the energetic saplings",
    _id: "f868d95d-d817-4c29-a85d-0acca059c44b",
    private: false
  },
  {
    name: "Pro",
    bannerSrc: "https://dummyimage.com/200x200/000/fcfcfc&text=%20%20Pro%20%20",
    price: "100$",
    description: "For the robust and sturdy trees",
    _id: "d57a2011-f7b3-4ed1-885b-33b14cc9867a",
    private: false
  },
  {
    name: "Diwali 🎆 Discount",
    bannerSrc: "https://dummyimage.com/200x200/000/fcfcfc&text=No+",
    price: "25$",
    description: "Special discount for you",
    _id: "5b4679b1-24af-43cd-824a-eab6d57a481c",
    private: true
  }
];

export default function Plans() {
  return (
    <div style={{ textAlign: "center" }}>
      <Jumbotron>
        <h3 className="display-5">demo-react-payments</h3>
        <p className="lead">
          This SPA was written when author was getting up to date with React.
          Apparenty <strong>Hooks</strong> was the new thing and author has been
          stuck with Class components.
        </p>
        <hr className="my-2" />
        <p>
          <Link to="/register">
            <Button color="primary">Register</Button>
          </Link>
        </p>
        <section id="section-plans">
          <p>
            There are a couple of dummy <em>public</em> plans below:
          </p>
          <Row className="no-gutters">
            {plans
              .filter((plan) => !plan.private)
              .map((plan, index) => (
                <Col xs={12} sm={4} key={index} className="p-1">
                  <PlanCard plan={plan} />
                </Col>
              ))}
          </Row>
        </section>
      </Jumbotron>
    </div>
  );
}
