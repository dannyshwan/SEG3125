import React from 'react';
import './styles/App.scss';
import { Button } from 'antd';
import { Row, Col } from 'antd';

const links = [
  {
    "name": "Lab 1: Survey in HTML/CSS",
    "url": "https://github.com/dannyshwan/Turnips/tree/master/src/components/SEG3125_Module1"
  },
  {
    "name": "Lab 2: Grocery (JavaScript)",
    "url": "https://github.com/dannyshwan/Turnips/tree/master/src/components/SEG3125_Module2"
  },
  {
    "name": "Lab 3: Alternative Grocery (JavaScript)",
    "url": "https://github.com/dannyshwan/Turnips/tree/master/src/components/SEG3125_Module3"
  },
  {
    "name": "Lab 4: Service business site (Bootstrap)",
    "url": "https://github.com/dannyshwan/Turnips/tree/master/src/components/SEG3125_Module4"
  },
  {
    "name": "Lab 5: Enhanced Service Business (JQuery)",
    "url": "https://github.com/dannyshwan/Turnips/tree/master/src/components/SEG3125_Module5"
  },
  {
    "name": "Lab 6: UI Survey Analysis (Node.js)",
    "url": "https://github.com/dannyshwan/Turnips/tree/master/src/components/SEG3125_Module6"
  },
  {
    "name": "Lab 7-9: Bytown FC",
    "url": "https://bytownfc.vercel.app/"
  }
]

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>UI Analysis and Design labs</h1>
        <br/>
        <div style={{width: "75vw"}}>
          <Row>
            {
              links.map((link) => {
                return(
                  <Col span={8}>
                    <Button size="large" type="primary" className="customButton">
                      <a style={{padding: "10px"}} href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
                    </Button>
                  </Col>
                );
              })
            }
          </Row>
        </div>
      </div>
      <div className="footer">
          <p>© Daniel Shwan 2020</p>
      </div>
    </div>
  );
}

export default App;
