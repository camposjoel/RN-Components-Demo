import React from 'react'
import { RefreshControl, ScrollView, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false)
  
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, [])

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.globalMargin}>
        <HeaderTitle title='Pull to refresh' />
      </View>
    </ScrollView>
  )
}