import React, { Component } from 'react'
import { View, Text, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class MyCarousel extends Component {
    constructor() {
        super()
        this.state = {
            entries: [
                {
                    page: 1
                },
                {
                    page: 2
                },
                {
                    page: 3
                },
                {
                    page: 4
                }
            ],
            data: [],
            url: []
        }
    }

    _renderItem({ item, index }) {                
        return (
            <View style={{ height: viewportHeight }} >
                <Text>{item.page}</Text>
            </View>
        );
    }

    // fetchData = () => {
    //     this.setState({ loading: true })
    //     return fetch(`http://api.alquran.cloud/page/${this.state.url}/quran-uthmani`)
    //         .then(res => res.json())
    //         .then(res => {
    //             this.setState({
    //                 loading: false,
    //                 data: res.data.ayahs
    //             })
    //         })
    //         .catch(err => console.log(err))
    // }

    render() {
        console.log(this.state.url)
        return (
            <Carousel
                data={this.state.entries}
                renderItem={this._renderItem}
                sliderWidth={viewportWidth}
                itemWidth={viewportWidth}
                slideStyle={{ width: viewportWidth }}
                inactiveSlideOpacity={1}
                inactiveSlideScale={1}
            />
        );
    }
}