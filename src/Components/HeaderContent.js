import React from 'react';
import { Container, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';

class HeaderContent extends React.Component {
    render(){
        return(
            <div style={{backgroundColor: '#000000'}} className="pb-1">
                <Container>
                    <Row>
                        <Col md={3} className="text-left">
                            <DropdownButton id="dropdown-basic-button" title="Pilih Bahasa">
                                <Dropdown.Item href="#/action-1">Indonesian</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">English</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                        <Col md={9} className="text-right">
                            <img
                                width={64}
                                height={64}
                                src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
                                alt="Generic placeholder"
                                className="ml-3 mr-3"
                            /> 
                            <h5 style={{ color: '#ffffff' }}>
                                Alan Saputra
                            </h5>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default HeaderContent;