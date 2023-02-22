import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

class Cities extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    handleClick = (place) => {
        let x = 0;
        this.props.cityObj.forEach(item => {
            if (item.place_id === place) {
                this.props.updateIndex(x);
                this.props.showModal();
            }
            x++;
        });
    }

    openWeather = (place) => {
        let x = 0;
        this.props.cityObj.forEach(item => {
            if (item.place_id === place) {
                this.props.updateIndex(x);
                this.props.showWeather();
            }
            x++;
        });
    }

    render() {
        if (this.props.show) {
            return (
                <Container fluid="sm">
                    <Row>
                        {this.props.cityObj.map(city => {
                            return (
                                <Col key={city.place_id}>
                                    <Card style={{ width: '15rem' }}>
                                        <Card.Header>{city.display_name}</Card.Header>
                                        <Card.Body>
                                            <p>Latitude: {city.lat}</p>
                                            <p>Longitude: {city.lon}</p>
                                        </Card.Body>
                                        <Button
                                            onClick={x => this.handleClick(x.target.value)}
                                            value={city.place_id}>Map</Button>
                                        <Button
                                            onClick={x => this.openWeather(city.place_id)}
                                            value={city.place_id}>Weather</Button>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            );
        } else {
            return (<p>Search for a city!</p>)
        }
    }
}

export default Cities;