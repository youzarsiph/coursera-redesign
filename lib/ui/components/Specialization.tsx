import { router } from 'expo-router'
import { Image, View } from 'react-native'
import { Button, Card, Text } from 'react-native-paper'

import Course from './Course'

const Specialization = () => (
  <Card
    onPress={() => router.push('/specialization')}
    contentStyle={{ gap: 16 }}
  >
    <Card.Content style={{ gap: 16 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          style={{ height: 50, width: 50 }}
          source={require('@/assets/images/react-logo.png')}
        />
        <Card.Title title="Epic Games" />
      </View>

      <Text variant="titleMedium">Game Design & Development</Text>

      <View
        style={{
          gap: 32,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text variant="bodySmall">Specialization</Text>
        <Text variant="bodySmall">5 Courses</Text>
      </View>
    </Card.Content>

    <View style={{ gap: 16, paddingBottom: 16, paddingHorizontal: 8 }}>
      <Course outlined />

      <Button
        mode="contained"
        icon="chevron-down"
        style={{ marginHorizontal: 8 }}
        onPress={() => {}}
      >
        Show all
      </Button>
    </View>
  </Card>
)

export default Specialization
