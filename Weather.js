import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text } from "react-native";

export default function Weather(){
    return <View style={styles.container}>
    <Text></Text></View>
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems: "center"
    }
})