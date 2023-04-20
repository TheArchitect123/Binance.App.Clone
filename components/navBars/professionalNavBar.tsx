//import liraries
import { AppBar } from '@react-native-material/core';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
const ProfessionalNavBarComponent = () => {
    return (
       <AppBar leading={() => <Button title='test'/>} title="" />
       
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default ProfessionalNavBarComponent;
