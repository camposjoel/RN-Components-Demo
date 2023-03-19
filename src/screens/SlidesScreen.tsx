import React, { useContext, useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { ImageSourcePropType, SafeAreaView, Text, Dimensions, View, Image, StyleSheet, TouchableOpacity, Animated} from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import Icon from 'react-native-vector-icons/Ionicons'
import { useAnimation } from '../hooks/useAnimation'
import { ThemeContext } from '../context/theme/ThemeContext'

const { width: screenWidth } = Dimensions.get('window')

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType
}

interface Props extends StackScreenProps<any, any> {}

const items: Slide[] = [
  {
      title: 'Titulo 1',
      desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
      img: require('../assets/slide-1.png')
  },
  {
      title: 'Titulo 2',
      desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
      img: require('../assets/slide-2.png')
  },
  {
      title: 'Titulo 3',
      desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
      img: require('../assets/slide-3.png')
  },
]

export const SlidesScreen = ({ navigation }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const { opacity, fadeIn } = useAnimation()
  const { theme: { colors } } = useContext(ThemeContext)
  
  const styles = StyleSheet.create({
    cardItemContainer: {
      flex: 1,
      backgroundColor: colors.background,
      borderRadius: 5,
      padding: 40,
      justifyContent: "center"
    },
    dotStyle: {
      width: 10,
      height: 10,
      borderRadius: 10,
      backgroundColor: colors.primary
    },
    title: {
      fontSize: 30,
      fontWeight: "bold",
      color: colors.primary
    },
    subtitle: {
      fontSize: 16,
      color: colors.text
    },
    btn: {
      flexDirection: "row",
      backgroundColor: colors.primary,
      width: 140,
      height: 50,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center"
    },
    btnText: {
      fontSize: 25,
      color: "white"
    },
    bottomContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginHorizontal: 20,
      alignItems: "center"
    }
  })

  const renderItem = (item: Slide) => {
    return (
      <View style={styles.cardItemContainer}>
        <Image
          source={item.img}
          style={{
            width: 350,
            height: 400,
            resizeMode: "center"
          }}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.desc}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 50
      }}
    >
      <Carousel
        data={items}
        renderItem={({item}) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        onSnapToItem={(index) => {
          setActiveIndex(index)
          if (index === 2) fadeIn()
        }}
      />

      <View style={styles.bottomContainer}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={styles.dotStyle}
        />

        {activeIndex === 2 && (
        <Animated.View style={{ opacity }}>
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.btnText}>Enter</Text>
            <Icon
              name="chevron-forward-outline"
              color="white"
              size={30}
            />
          </TouchableOpacity>
        </Animated.View>
        )}
        
      </View>
    </SafeAreaView>
  )
}
