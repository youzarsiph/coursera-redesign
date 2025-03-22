import { StackHeader } from '@/lib'
import { router, Stack, useLocalSearchParams } from 'expo-router'
import { ScrollView, View } from 'react-native'
import { Appbar, Chip, List, Text } from 'react-native-paper'

const Home = () => {
  const { id } = useLocalSearchParams<{ id: string }>()

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          title: 'Generative AI for Everyone',
          header: (props) => (
            <View style={{ gap: 8 }}>
              <StackHeader navProps={props} children={undefined} />

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  gap: 8,
                  paddingHorizontal: 16,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Chip icon="home" onPress={() => router.push('/1/home')}>
                  Home
                </Chip>
                <Chip
                  icon="checkbox-multiple-marked"
                  mode="outlined"
                  onPress={() => router.push('/1/grades')}
                >
                  Grades
                </Chip>
                <Chip icon="diversify" mode="outlined" onPress={() => {}}>
                  Resources
                </Chip>
                <Chip icon="information" mode="outlined" onPress={() => {}}>
                  Info
                </Chip>
              </ScrollView>

              <View style={{ gap: 8, paddingHorizontal: 16 }}>
                <Text variant="titleMedium">Weeks</Text>

                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    gap: 8,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  {[1, 2, 3, 4].map((w) => (
                    <Chip
                      icon="checkbox-blank-circle-outline"
                      mode={w === 1 ? 'flat' : 'outlined'}
                      onPress={() => {}}
                    >
                      {w}
                    </Chip>
                  ))}
                </ScrollView>
              </View>
            </View>
          ),
          headerRight: (props) => (
            <>
              <Appbar.Action {...props} icon="timer" onPress={() => {}} />
              <Appbar.Action
                {...props}
                icon="dots-vertical"
                onPress={() => {}}
              />
            </>
          ),
        }}
      />

      <View style={{ paddingTop: 16, paddingHorizontal: 16 }}>
        <Text variant="bodyLarge">Introduction to Generative AI</Text>
      </View>

      <List.Section title="What is Generative AI?">
        <List.Item
          title="Welcome"
          description="Video, 7 min"
          onPress={() => {}}
          left={(props) => <List.Icon {...props} icon="motion-play" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
        <List.Item
          title="How Generative AI works"
          description="Video, 8 min"
          onPress={() => {}}
          left={(props) => <List.Icon {...props} icon="motion-play" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
        <List.Item
          title="LLMs as a thought partner"
          description="Video, 5 min"
          onPress={() => {}}
          left={(props) => <List.Icon {...props} icon="motion-play" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
        <List.Item
          title="AI is a general purpose technology"
          description="Video, 7 min"
          onPress={() => {}}
          left={(props) => <List.Icon {...props} icon="motion-play" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
        <List.Item
          title="Glossary"
          description="Reading, 15 min"
          onPress={() => {}}
          left={(props) => <List.Icon {...props} icon="card-text" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
        <List.Item
          title="What is Generative AI?"
          description="Graded Assignment, 30 min"
          onPress={() => {}}
          left={(props) => <List.Icon {...props} icon="format-list-checks" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
      </List.Section>
    </View>
  )
}

export default Home
