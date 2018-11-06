import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import { RTLView, RTLText } from 'react-native-rtl-layout'

export default class Sample extends Component {

  constructor(props) {
    super(props)
    this.state = {
      locale: 'en',
    }
  }

  toggleLocale = () => {
    this.setState({
      locale: (this.state.locale == 'ar' ? 'en' : 'ar')
    })
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <RTLView locale={this.state.locale}>
          <Text>Lorem ipsum dollar amet</Text>
        </RTLView>
        <RTLView locale={this.state.locale}>
          <Text fontSize={20}>ThisisRTLtextcomponenthelloferferaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>          
        </RTLView>
          <TouchableHighlight style={{ margin: 20}} onPress={this.toggleLocale} >
            <Text>Hello</Text>
          </TouchableHighlight>
      </View>
    )
  }
}