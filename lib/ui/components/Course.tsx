import { router } from 'expo-router'
import { Image, View } from 'react-native'
import { Card, Chip, Divider, ProgressBar, Text } from 'react-native-paper'

const Course = (props: { outlined?: boolean }) => (
  <Card
    contentStyle={{ gap: 16 }}
    mode={props.outlined ? 'outlined' : 'elevated'}
    onPress={() => router.push('/course')}
  >
    <Card.Content style={{ gap: 16 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          style={{ height: 50, width: 50 }}
          source={require('@/assets/images/react-logo.png')}
        />
        <Card.Title title="Epic Games" />
      </View>

      <Text variant="titleMedium">Game Design</Text>

      <View style={{ gap: 32, flexDirection: 'row', alignItems: 'center' }}>
        <Text variant="bodySmall">Course</Text>
        <Text variant="bodySmall">30% Completed</Text>
      </View>
      <ProgressBar
        progress={0.3}
        style={{ flexGrow: 1, width: '100%', borderRadius: 16 }}
      />
    </Card.Content>

    <Divider />

    <Card.Content style={{ gap: 16 }}>
      <Text variant="titleSmall">Course summary</Text>
      <View style={{ gap: 16, flexDirection: 'row', alignItems: 'center' }}>
        <Chip mode="outlined" icon="play-box-multiple" style={{ flex: 1 }}>
          Video
        </Chip>
        <Chip mode="outlined" icon="timer" style={{ flex: 1 }}>
          32 min
        </Chip>
        <Chip
          onPress={() => {}}
          onClose={() => {}}
          style={{ flex: 1 }}
          closeIcon="chevron-right"
        >
          Play
        </Chip>
      </View>
    </Card.Content>
  </Card>
)

export default Course
