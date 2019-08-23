import React from "react";
import { Container, Row } from "reactstrap";

// import DemoNavbar from "components/Navbars/DemoNavbar";
// import CardsFooter from "components/Footers/CardsFooter";

import Hero from "../views/IndexSections/Hero";
import Buttons from "../views/IndexSections/Buttons";
import Inputs from "../views/IndexSections/Inputs";
import CustomControls from "../views/IndexSections/CustomControls";
import Menus from "../views/IndexSections/Menus";
import Navbars from "../views/IndexSections/Navbars";
import Tabs from "../views/IndexSections/Tabs";
import Progress from "../views/IndexSections/Progress";
import Pagination from "../views/IndexSections/Pagination";
import Pills from "../views/IndexSections/Pills";
import Labels from "../views/IndexSections/Labels";
import Alerts from "../views/IndexSections/Alerts";
import Typography from "../views/IndexSections/Typography";
import Modals from "../views/IndexSections/Modals";
import Datepicker from "../views/IndexSections/Datepicker";
import TooltipPopover from "../views/IndexSections/TooltipPopover";
import Carousel from "../views/IndexSections/Carousel";
import Icons from "../views/IndexSections/Icons";
import Login from "../views/IndexSections/Login";
import Download from "../views/IndexSections/Download";

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        {/* <DemoNavbar /> */}
        <main ref="main">
          <Hero />
          <Buttons />
          <Inputs />
          <section className="section">
            <Container>
              <CustomControls />
              <Menus />
            </Container>
          </section>
          <Navbars />
          <section className="section section-components">
            <Container>
              <Tabs />
              <Row className="row-grid justify-content-between align-items-center mt-lg">
                <Progress />
                <Pagination />
              </Row>
              <Row className="row-grid justify-content-between">
                <Pills />
                <Labels />
              </Row>
              <Alerts />
              <Typography />
              <Modals />
              <Datepicker />
              <TooltipPopover />
            </Container>
          </section>
          <Carousel />
          <Icons />
          <Login />
          <Download />
        </main>
        {/* <CardsFooter /> */}
      </>
    );
  }
}

export default Index;
