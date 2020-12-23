import React, { Component } from "react";
import GoogleMapReact from 'google-map-react'
import gps from './gps.png'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
    constructor(props){
        super(props);
        this.state = {
            center: {//là cái required để google map định vị được vị trí cần hiện thị
                lat:21.027763,
                lng: 105.834160
            },
            zoom:16 //set default xem mức độ zoom ở mức độ nào
        }
    }
    async componentDidMount(){
        if(navigator.geolocation){
            await navigator.geolocation.getCurrentPosition(this.getLocation);
        }
        else{
            alert("Geolocation is not supported by this browser.");
        }
    }

    getLocation = (position) => {
        this.setState ({
            center:{
                lat: position.coords.latitude,
                lng:position.coords.longitude
            }
        }) 
        this.props.getLocationNews(this.state.center)
    }
    handleApiLoaded=(map, maps)=>{
        new maps.Marker({
            position: this.state.center,
            map,
            title: 'Home Your!',
        });   
    }
    render(){
        return(
            <div style={{ height: '500px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys = {{key: 'AIzaSyDLhm8DHP3A6kMCIsiwQWUU-pX5hSbyaQo'}}
                    defaultCenter = {this.state.center}
                    defaultZoom = {this.state.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
                />
                <AnyReactComponent
                    lat = {this.state.center.lat}
                    lng = {this.state.center.lng}
                />
            </div>
        )
    }
}
export default GoogleMap;