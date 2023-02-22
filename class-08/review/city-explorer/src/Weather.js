import React from "react";
import axios from 'axios';
import Modal from "react-bootstrap/Modal";

class Weather extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
          weatherData: []
        }
    }

    componentDidMount() {
      this.getData();
    }

    getData() {
        let url = 'http://localhost:3001/weather?city='
            + this.props.city
            + '&lat='
            + this.props.cityObj.lat
            + '&lon='
            + this.props.cityObj.lon;

        console.log(url);

        let array = [];

        let promise = axios.get(url);
        promise
            .then(response => {
                console.log(response.data);
                this.setState({ weatherData: response.data });
            })
            .catch(error => {
                console.log('ERROR');
                console.log(error);
            })
    }

    render() {
        if (this.props.show) {

            // let array = this.getData();
            // console.log(array);

            return (
                <Modal show={this.props.show} onHide={this.props.closeModal} centered>
                    <Modal.Body>
                        {this.state.weatherData.map(item => {
                            return (
                                <div>
                                    <p>Date: {item.date}</p>
                                    <p>Description: {item.description}</p><br></br>
                                </div>
                            );
                        })
                        }
                    </Modal.Body>
                </Modal>
            );
        }
    }


}

export default Weather;
