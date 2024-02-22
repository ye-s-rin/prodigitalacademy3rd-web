import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CampaignList from './components/CampaignList';

const App = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Campaigns</h1>
          <CampaignList />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
