import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'

class Loading extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#2313131" />
            </View>            
        )
    }
}

export default Loading;