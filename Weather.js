import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm : {
        iconName: "weather-hurricane",
        gradient: ["#373B44", "#4286f4"],
        title:"Thunderstorm",
        subtitle:"태풍이 휘몰아쳐요"
    },
    Drizzle : {
        iconName: "cloud-drizzle",
        gradient: ["#89F7FE","#66A6FF"],
        title:"Drizzle",
        subtitle:"기분 나쁜비가 내립니다"        
    },
    Rain : {
        iconName: "weather-rainy",
        gradient: ["#00C6FB","#005BEA"],
        title:"Rain",
        subtitle:"비내리는 날은 막걸리.."
    },
    Snow : {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC","#B986E5"],
        title:"Snow",
        subtitle:"눈싸움하러 나갑시다"
    },
    Atmosphere : {
        iconName: "weather-lightning-rainy",
        gradient: ["#89F7FE","#66A6FF"],
        title:"Storm",
        subtitle:"오늘은 절대 나가지마세요"
    },
    Clear : {
        iconName: "weather-sunny",
        gradient: ["#FF7300","#FEF253"],
        title:"Clear",
        subtitle:"맑은 날이에요, 밖에 나가세요"
    },
    Clouds : {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC","#304352"],
        title:"Clouds",
        subtitle:"기온보다 조금 쌀쌀할 수도 있어요"
    },
    Haze : {
        iconName: "weather-fog",
        gradient: ["#4DA0B0","#D39D38"],
        title:"Haze",
        subtitle:"안개가 좀 있어요 조심하세요"
    },
    Mist : {
        iconName: "weather-fog",
        gradient: ["#4DA0B0","#D39D38"],
        title:"Mist",
        subtitle:"엷은 안개가 있어요, 걸을때 조심하세요"
    },
    Dust : {
        iconName: "weather-fog",
        gradient: ["#4DA0B0","#D39D38"],
        title:"fog",
        subtitle:"안개가 꼈어요"
    }
}
export default function Weather({temp,condition}){
    return (
    <LinearGradient
          colors={weatherOptions[condition].gradient}
          style={styles.container}
          >
        <StatusBar barStyle="light-content" />
        <View style={styles.halfContainer}>
        <MaterialCommunityIcons 
            size={96} 
            color="white" 
            name={weatherOptions[condition].iconName} />
        <Text style={styles.temp}>{temp}°C</Text>
        </View>
        <View style={{...styles.halfContainer, ...styles.textContainer}}>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            <Text>{condition}</Text>
        </View>
    </LinearGradient>
    );
};

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems: "center"
    },
    temp:{
        fontSize:42,
        color:"white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title : {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})