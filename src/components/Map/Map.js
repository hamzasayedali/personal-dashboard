import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import mapStyles from './style';

const containerStyle = {
    width: '1200px',
    height: '600px',
    position: 'relative',
    zindex: '0'
  }

  const mapStyle = mapStyles.styles;

  export class MapPage extends Component {
    _mapLoaded(mapProps, map) {
      map.setOptions({
        styles: mapStyle
      });
    }
  
    render() {
      const coords = { lat: 43, lng: -81 };
      return (
        <Map
            containerStyle={containerStyle}
          style={this.mapStyle}
          google={this.props.google}
          zoom={7}
          initialCenter={coords}
          onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
        >
          
        </Map>
      );
    }
  }




export default GoogleApiWrapper({
  apiKey: ''
})(MapPage);
