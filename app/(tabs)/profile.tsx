import { View, ScrollView, Image } from 'react-native'
import { Button, Card, ProgressBar, Text } from 'react-native-paper'

const Course = () => (
  <Card contentStyle={{ gap: 16 }} onPress={() => {}}>
    <Card.Content style={{ gap: 16 }}>
      <View>
        <Text variant="titleMedium">Cloud Computing Foundations</Text>
        <Text variant="bodySmall">Duke University</Text>
      </View>

      <Text>Completed on Sep 7, 2024</Text>

      <View style={{ gap: 16 }}>
        <View
          style={{
            gap: 32,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text variant="bodySmall">Grade</Text>
          <Text variant="bodySmall">100%</Text>
        </View>

        <ProgressBar
          progress={1}
          style={{ flexGrow: 1, width: '100%', borderRadius: 16 }}
        />
      </View>

      <Button mode="contained" icon="share-variant" onPress={() => {}}>
        Share
      </Button>
    </Card.Content>
  </Card>
)

const Profile = () => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <View
      style={{
        gap: 16,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          width: 64,
          height: 64,
          borderRadius: 64,
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          style={{ height: '100%', width: '100%' }}
          source={require('@/assets/images/me.png')}
        />
      </View>

      <View style={{ flex: 1 }}>
        <Text variant="titleLarge">Yousuf Abu Shanab</Text>
        <Text variant="bodySmall">@youzarsiph</Text>
      </View>
    </View>

    <View style={{ gap: 16, padding: 16 }}>
      <Text variant="titleSmall">Achievements</Text>

      <Course />
      <Course />
      <Course />
    </View>
  </ScrollView>
)

export default Profile
