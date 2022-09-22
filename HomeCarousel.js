import React from 'react'
import { Image, View, FlatList, StyleSheet } from 'react-native'



const homeCarouselItem = ({ item }) => (
<View style={styles.home_carousel_item}>
<Image
    style={styles.art_photo}
    source={{uri: item.art_photo}}
    />
</View>
  );

const HomeCarousel = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.home_carousel}
    data={item}
    renderItem={homeCarouselItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default HomeCarousel;

const styles = StyleSheet.create({
    'art_photo': {
        'width': '50vw',
        'height': '100vw',
        'marginTop': 5,
        'backgroundColor': '#fafafaff',
        'margin': 0,
        'marginHorizontal': 5
    }
});