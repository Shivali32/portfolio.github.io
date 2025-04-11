import React from 'react';
import ExperienceCard from "./ExperienceCard";
import { Jumbotron } from './migration';
import {
  Container,
  Row, Col
} from "react-bootstrap";

const Experience = ({ experiences }) => {
    const { heading = "Experiences", data = [] } = experiences || {};
  return (
    <section id ="experiences" className="section" style={{ backgroundColor: "#3c415c" }}>
      <Container>
        <Jumbotron className="text-light" style={{ backgroundColor: "#3c415c" }}>
          <h2 className="display-4 mb-5 text-center">
            {heading}
          </h2>
          <Row>
            {/* {
              experiences.data.map((data, index) => {
                return <ExperienceCard key={index} data={data} />
              })
            } */}

            <Col lg="6">
              {data[0] && <ExperienceCard data={data[0]} />}
            </Col>

            {/* Second and Third Experiences in col-lg-7 */}
            <Col lg="6">                              
                  {data[1] && <ExperienceCard data={data[1]} />}                           
            </Col>
            </Row>

              <Row className="justify-content-center">
                <Col lg="6">
                  {data[2] && <ExperienceCard data={data[2]} />}
                </Col>
              </Row>    
            
            {/* <Col lg="5">
            {data[0] && <ExperienceCard data={data[0]} />}
            </Col>

            <Col lg="7">
            <Row>
                <Col lg="12">
                {data[1] && <ExperienceCard data={data[1]} />}
                </Col>
            </Row>
            <Row>
                <Col lg="12">
                {data[2] && <ExperienceCard data={data[2]} />}
                </Col>
            </Row>
            </Col> */}
          {/* </Row> */}
        </Jumbotron>
      </Container>
    </section>
  );
}

export default Experience;