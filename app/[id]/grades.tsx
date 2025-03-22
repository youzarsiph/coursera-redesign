import { StackHeader } from '@/lib'
import { router, Stack, useLocalSearchParams } from 'expo-router'
import { ScrollView, View } from 'react-native'
import { Appbar, Chip } from 'react-native-paper'

const Grades = () => {
  const { id } = useLocalSearchParams<{ id: string }>()

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          title: 'Data Engineering',
          header: (props) => (
            <View>
              <StackHeader navProps={props} children={undefined} />
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  gap: 8,
                  padding: 16,
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
            </View>
          ),
          headerRight: (props) => (
            <Appbar.Action {...props} icon="share-variant" onPress={() => {}} />
          ),
        }}
      />
    </View>
  )
}

export default Grades
