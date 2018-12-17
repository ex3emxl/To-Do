import React from 'react';

import './show.scss';

class Geolocation extends Component {

    state = {
        latitude: '',
        longitude: ''
    }


    clickHandler = () => {
        this.setState(({latitude, longitude}) => {
            latitude: 'latitude';
            return {
                latitude: navigator.geolocation
                // latitude: navigator.geolocation.getCurrentPosition(position => position.coords.latitude)

                // navigator.geolocation.getCurrentPosition(position => position.coords.latitude)
            }
        });
    }

    render() {
        return (
            <div className="geolocation">
                <button onClick={this.clickHandler}>Get Location</button>
                <div className="coordinates">
                    {this.state.latitude}
                </div>
            </div>
        )
    }
}

export default Geolocation;