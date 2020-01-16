import React from 'react';
import Loading from './Loading'; //Loading.js 불러옴
import * as Location from 'expo-location'; //위치 native
import {Alert} from "react-native"; //경고 native
import axios from "axios";
import Weather from './Weather';

const API_KEY = "e6103d0d1dc2e3c43e72b79fa3f95302";

export default class App extends React.Component {
  state = {
    isLoading : true 
  };

  getWeather = async(latitude, longitude)=>{
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
      );
      this.setState({ isLoading:false, temp: data.main.temp} );
    }

  getLocation = async()=>{ //비동기화 함수
    try{
      await Location.requestPermissionsAsync() //위치 정보를 받으면 넘어가도록 await
      const {coords : {latitude,longitude}} = await Location.getCurrentPositionAsync();
      //위치 정보값에서 latitude,longitude값을 가져옴
      this.getWeather(latitude, longitude)
      this.setState({ isLoading: false}); //Loading을 false로
    }
    catch (error){
      Alert.alert("Can't find you", "So sad");
    }
  }
  
  componentDidMount(){
    this.getLocation();
  }

  render(){
    const { isLoading, temp } = this.state; //this.state.isLoading을 생략하기 위함
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)}  />;
    //is Loading이면 그대로 출력, 아니면 null값 출력
  }
}