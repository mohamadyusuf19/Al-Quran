import React, { Component } from 'react';
import { View, Text, TextInput, I18nManager, ImageBackground } from 'react-native';
import Loading from './components/Loading';

const bingkaiIcon = require('../src/assets/bingkai_quran.jpg')

class Optimized extends Component {
    constructor(props) {
        super(props)
        I18nManager.forceRTL(true);
        this.viewabilityConfig = {
            waitForInteraction: true,
            viewAreaCoveragePercentThreshold: 95
        }
        this.state = {
            data: [],
            loading: false
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData() {
        this.setState({ loading: true })
        return fetch('http://api.alquran.cloud/page/3/quran-uthmani')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    loading: false,
                    data: res.data.ayahs
                })
            })
            .catch(err => console.log(err))
    }

    loop = () => {
        let angka = []
        for (let i = 0; i <= 6; i++) {
            angka += i
        }
        return angka
    }

    renderLoading() {
        if (this.state.loading) {
            return <Loading />
        }
        return (
            <View style={{ flex: 1, padding: 15, paddingTop: 35, alignItems: 'baseline' }}>
                <Text style={{ fontSize: 25, width: '100%', flexWrap: 'wrap' }}>
                    {
                        this.state.data.length > 1 ? (
                            <Text>
                                {this.state.data[0].text}({this.state.data[0].numberInSurah}){this.state.data[1].text}({this.state.data[1].numberInSurah})
                                {this.state.data[2].text}({this.state.data[2].numberInSurah})
                                {this.state.data[3].text}({this.state.data[3].numberInSurah})
                                {this.state.data[4].text}({this.state.data[4].numberInSurah})
                                {this.state.data[5].text}({this.state.data[5].numberInSurah})
                                {this.state.data[6].text}({this.state.data[6].numberInSurah})
                                {this.state.data[7].text}({this.state.data[7].numberInSurah})
                                {this.state.data[8].text}({this.state.data[8].numberInSurah})
                                {this.state.data[9].text}({this.state.data[9].numberInSurah})
                                {this.state.data[10].text}({this.state.data[10].numberInSurah})
                            </Text>
                        ) : <Text></Text>
                    }
                </Text>               
            </View>
        )
    }

    render() {
        console.log(this.loop())
        return (
            <ImageBackground source={bingkaiIcon} style={{ flex: 1, width: '100%', height: '100%' }}>
                <Text style={{ position: 'absolute', top: 10, left: 60, alignSelf: 'center' }}>
                    {
                        this.state.data.length > 1 ? (
                            <Text>{this.state.data[0].surah.name}</Text>
                        ) : <Text></Text>
                    }
                </Text>
                <Text style={{ position: 'absolute', top: 10, right: 60, alignSelf: 'center' }}>
                    {
                        this.state.data.length > 1 ? (
                            <Text>juz : {this.state.data[0].juz}</Text>
                        ) : <Text></Text>
                    }
                </Text>
                {this.renderLoading()}                
                <Text style={{ position: 'absolute', alignSelf: 'center', bottom: 10 }}>
                    {
                        this.state.data.length > 1 ? (
                            <Text>{this.state.data[0].page}</Text>
                        ) : <Text></Text>
                    }
                </Text>
            </ImageBackground>
        )
    }
}

export default Optimized;