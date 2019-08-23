import React from "react";

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

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";

class SignIn extends React.Component {
  // componentDidMount() {
  //   document.documentElement.scrollTop = 0;
  //   document.scrollingElement.scrollTop = 0;
  //   this.refs.main.scrollTop = 0;
  // }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
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
                        <h1>Sign In</h1>
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

                      <div className="text-center text-muted mb-4">
                        <small>Or sign in with credentials</small>
                      </div>

                      <Form role="form">
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
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

                        <div className="custom-control custom-control-alternative custom-checkbox">
                          <input
                            className="custom-control-input"
                            id=" customCheckLogin"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor=" customCheckLogin"
                          >
                            <span>Remember me</span>
                          </label>
                        </div>
                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            type="button"
                          >
                            Sign in
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                  <Row className="mt-3">
                    <Col xs="6">
                      <a
                        className="text-light"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <small>Forgot password?</small>
                      </a>
                    </Col>
                    <Col className="text-right" xs="6">
                      <a
                        className="text-light"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <small>Create new account</small>
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default SignIn;
