import React, { useContext } from 'react'
import { View, SectionList, Text } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { ItemSeparator } from '../components/ItemSeparator'
import { ThemeContext } from '../context/theme/ThemeContext'
import { styles } from '../theme/appTheme'

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: "DC Comics",
    data: ["Batman", "Superman", "Robin", "Flash", "Wonder woman", "Plastic Man", "Elongated Man", "Green Lantern", "Reverse Flash", "Ocean Master", "Grood", "Weather wizard"]
  },
  {
    casa: "Marvel Comics",
    data: ["Antman", "Thor", "Spiderman", "Antman", "Ironman", "Hulk", "Black widow", "Nick Fury", "Capitan America", "Thanos"]
  },
  {
    casa: "Anime",
    data: [ "Goku", "Saitama", "One punch man", "Dragon ball super", "Caballeros del zodiaco", "Freezer", "Trunks", "Cell", "Androide 18", "Androide 17", "Boo"]
  }
];


export const SectionListScreen = () => {

  const { theme: { colors } } = useContext(ThemeContext)

  return (
    <View style={{ ...styles.globalMargin, flex: 1 }}>
      <SectionList
        sections={casas}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={() => <HeaderTitle title='Section List' />}
        ListFooterComponent={() => <View style={{marginBottom: 60}} />}
        stickySectionHeadersEnabled
        renderItem={({item}) => <Text style={{color: colors.text}}>{item}</Text>}
        renderSectionHeader={( {section: {casa}}) => (
          <View style={{ backgroundColor: '#EFEFEF', borderRadius: 10 }}>
            <HeaderTitle title={casa} />
          </View>
          )}
        renderSectionFooter={({ section }) => <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Total: {section.data.length}</Text>}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  )
}