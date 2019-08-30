import React, { useState } from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

import CoreNavbar from "../components/core/CoreNavbar";
import CoreFooter from "../components/core/CoreFooter";

import FormikForm from '../components/FormikForm';

const SignUp = () => {
  const [value, setValue] = useState('')

  const handleChange = e => {
    setValue(e.target.value);
    console.log(e)
    e.preventDefault();
  };

  return (
    <>
      <CoreNavbar />
      <main>
        <section className="section section-shaped section-lg">
          <div className="shape shape-style-1 bg-gradient-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="pt-lg-md">
            <Row className="justify-content-center">
              <Col lg="6">
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="bg-white pb-3">
                    <div className="text-center">
                      <h1>Sign Up</h1>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center mb-3">
                      <Button
                        className="btn-neutral btn-block btn-icon ml-1"
                        color="facebook"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-facebook" />
                        </span>
                        <span className="btn-inner--text">
                          Continue with Facebook
                        </span>
                      </Button>

                      <Button
                        className="btn-neutral btn-block btn-icon ml-1 mt-3"
                        color="google-plus"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-google" />
                        </span>
                        <span className="btn-inner--text">
                          Continue with Google
                        </span>
                      </Button>
                    </div>

                    <hr />

                    <div className="text-center text-muted">
                      <small>Or sign up with credentials</small>
                    </div>

                      <FormikForm></FormikForm>

                      <hr />


                    <Form role="form">

                      {/* NEW COMPONENT - BEGIN */}
                      {/* <TextInput
                        value={value}
                        placeholder='Name'
                        handleChange={handleChange}
                        ></TextInput> */}
                      {/* NEW COMPONENT - END */}

                      <hr />

                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="fa fa-user" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Name" type="text" />
                        </InputGroup>
                      </FormGroup>

                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="fa fa-envelope" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Email" type="email" />
                        </InputGroup>
                      </FormGroup>

                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="fa fa-unlock-alt" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Password"
                            type="password"
                            autoComplete="off"
                          />
                        </InputGroup>
                      </FormGroup>

                      <Row>
                        <Col xs="12">
                          <div className="text-center mt-3s">
                            <Button
                              className="mt-4"
                              color="primary"
                              type="button"
                            >
                              Create account
                            </Button>
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs="12">
                          <div className="text-muted text-center mt-3">
                            <small>
                              <span>You have an account? </span>
                              <a
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Sign In
                              </a>
                            </small>
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs="12">
                          <div className="text-muted text-center mt-4">
                            <small>
                              <small>
                                <span>By registering, you agree to our </span>
                                <a
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Terms of Service
                                </a>
                                <span> and </span>
                                <a
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Privacy Policy
                                </a>
                              </small>
                            </small>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <CoreFooter />
    </>
  );
};

export default SignUp;
