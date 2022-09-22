import React from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'

import HomeCarousel from './HomeCarousel'

const homeFeedItem = ({ item }) => (
<View style={styles.home_feed_item}>
<Text style={styles.artist_name}>{item.artist_name}</Text>
<HomeCarousel item={item.home_carousel}/>
<Text style={styles.art_caption}>{item.art_caption}</Text>
<Text style={styles.art_description}>{item.art_description}</Text>
</View>
  );

const HomeFeed = ({ item }) => (
<FlatList
    style={styles.home_feed}
    data={item}
    renderItem={homeFeedItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default HomeFeed;

const styles = StyleSheet.create({
    'artist_name': {
        'color': '#9e4770ff',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'margin': 0
    },
    'art_caption': {
        'color': '#9e4770ff',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'margin': 0
    },
    'art_description': {
        'fontSize': 12,
        'fontWeight': '250',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'color': '#201a23ff',
        'margin': 0
    }
});