import { View, ScrollView } from 'react-native'

import { Course, Specialization } from '@/lib'

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ gap: 16, padding: 16 }}>
        <Specialization />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
      </View>
    </ScrollView>
  )
}

export default Home
