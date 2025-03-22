import { Tabs } from 'expo-router'
import React from 'react'
import { ScrollView } from 'react-native'
import { List } from 'react-native-paper'

import { TabsHeader } from '@/lib'

const Search = () => {
  const [value, setValue] = React.useState('')

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Tabs.Screen
        options={{
          header: (props) => (
            <TabsHeader
              navProps={props}
              children={undefined}
              withSearchbar
              searchBarProps={{
                value: value,
                onChangeText: setValue,
                placeholder: 'Search',
              }}
            />
          ),
        }}
      />

      <List.Section title="Recently Viewed">
        <List.Item
          title="Game dev"
          description="Epic Games"
          onPress={() => {}}
          left={(props) => (
            <List.Image
              {...props}
              source={require('@/assets/images/react-logo.png')}
            />
          )}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
      </List.Section>

      <List.Section title="Recent Searches">
        <List.Item
          title="robotics"
          onPress={() => {}}
          left={(props) => <List.Icon {...props} icon="history" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
      </List.Section>

      <List.Section title="Popular Searches">
        <List.Item
          title="robotics"
          onPress={() => {}}
          left={(props) => <List.Icon {...props} icon="arrow-top-left" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
      </List.Section>
    </ScrollView>
  )
}

export default Search
