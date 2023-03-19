import React, { useState } from 'react'
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5])

  const loadMore = () => {
    setNumbers([...numbers, ...numbers.map(n => n + numbers.length)])
  }

  const renderItem = (value: number) => {
    return (
      <Image
        source={{ uri: `https://picsum.photos/id/${value}/400` }}
        style={{ width: '100%', height: 400 }}
      />
    )
  }

  return (
    <View>
      <FlatList
        data={numbers}
        keyExtractor={(item) => item.toString()}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={<HeaderTitle title='Infinite Scroll' />}
        onEndReached={ loadMore }
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              width: '100%',
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <ActivityIndicator size={20} color='#c1c1c1' />
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textItem: {
    fontWeight: "bold",
    backgroundColor: "tomato",
    height: 150
  }
})