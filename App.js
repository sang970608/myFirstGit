import React from 'react';
import Loading from './Loading'; //Loading.js 불러옴
import * as Location from "expo-location"; //위치 native
import {Alert} from "react-native"; //경고 native
import axios from "axios";
import Weather from './Weather';

const API_KEY = "e6103d0d1dc2e3c43e72b79fa3f95302";

export default class App extends React.Component {
  state={
    isLoading : true
  };

  getWeather = async(latitude,longitude) =>{
    const { 
      data: {
        main :{temp},
        weather
      }
     } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
      );
      this.setState({
        isLoading:false,
        condition:weather[0].main,
        temp 
      });
      //temp의 값을 Object에서 가져옴
  };

  getLocation = async() => {
    try{
      await Location.requestPermissionsAsync();
      const { coords: {latitude, longitude} 
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude,longitude);
      this.setState({ isLoading: false });
    }catch(error){
      Alert.alert("Can`t find you.","So sad");
    }
  }

  componentDidMount(){
    this.getLocation();
  }

  render(){
    const { isLoading, temp , condition} = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}