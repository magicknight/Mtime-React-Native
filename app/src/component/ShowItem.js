/**
 * author: liminjie
 * date: 2017/3/30
 * desc: 正在热映的Item
 */

import React, {Component} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
export default class ShowItem extends Component {
    render() {
        const movie = this.props.movie;
        const img = movie.img;//电影海报
        const title = movie.tCn;//电影中文名
        const rank = movie.r;//评分
        const special = movie.commonSpecial;//一句话评价
        const raiseDate = movie.rd;//上映时间
        const cinemaCount = movie.cC;//上映电影院数
        const showtimeCount = movie.NearestShowtimeCount;//上映场数
        const versions = movie.versions;//观影标签
        const ticketing = movie.isTicket;//售票

        return (
            <TouchableOpacity onPress={() => {

            }}>
                <View style={styles.container}>
                    <Image source={{uri: img}} style={styles.img}/>
                    <View style={styles.detail}>
                        <View style={styles.detail_title}>
                            <Text style={styles.text_title}>{title}  </Text>
                            <Text style={styles.text_rank}>{rank}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{
                                width: 20,
                                height: 20,
                                textAlign: 'center',
                                fontSize: 24,
                                fontWeight: 'bold',
                                color: '#ff8601'
                            }}>“</Text>
                            <Text style={styles.text_special}>{special}</Text>
                        </View>
                        <Text
                            style={styles.text_date_cinema}>{raiseDate.substring(4, 6) * 1}月{raiseDate.substring(6, 8)}日上映</Text>
                        <Text style={styles.text_date_cinema}>今日{cinemaCount}家影院上映{showtimeCount}场</Text>

                        <View style={{flex: 1, flexDirection: 'row', alignSelf: 'stretch', alignItems: 'center'}}>
                            <View style={{flex: 2, flexDirection: 'row'}}>
                                <Text style={styles.text_version}>11</Text>
                                {/*<Text style={styles.text_version}>{versions[1].version}</Text>*/}
                                {/*<Text style={styles.text_version}>{versions[2].version}</Text>*/}
                            </View>
                            <View style={{
                                flex: 1,
                                height: 30,
                                justifyContent: 'center',
                                backgroundColor: '#ff8601',
                                borderRadius: 100
                            }}>

                                <Text style={{
                                    color: 'white',
                                    fontSize: 12,
                                    textAlign: 'center'
                                }}>购票</Text>
                            </View>

                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    img: {
        width: 80,
        height: 123,
    },
    detail: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        alignSelf: 'stretch',
        marginLeft: 10,
    },
    detail_title: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text_title: {
        color: '#333333',
        fontSize: 16,
        fontWeight: 'bold'
    },
    text_rank: {
        color: '#5d8a1c',
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    text_special: {
        color: '#ff8601',
        fontSize: 15,
    },
    text_date_cinema: {
        color: '#999999',
        fontSize: 12,
    },
    text_version: {
        borderColor: '#999999',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 5,
        paddingRight: 5,
        textAlign: 'center'
    },
});