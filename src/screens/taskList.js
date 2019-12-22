import React, { Component } from 'react'
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';


export default class taskList extends Component {
    render() {
        return (
            <View style={styles.container}>
            <Text>Yapım aşamasında..</Text>
            <ActivityIndicator size="large" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})