import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { router, Tabs } from 'expo-router'

import { TabBar, TabsHeader } from '@/lib'
import { Appbar, Menu } from 'react-native-paper'

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name']
  color: string
}) {
  return <MaterialCommunityIcons size={24} {...props} />
}

const HeaderRight = (props: any) => {
  const [visible, setVisible] = React.useState(false)

  return (
    <Menu
      visible={visible}
      onDismiss={() => setVisible(!visible)}
      anchorPosition="bottom"
      anchor={
        <Appbar.Action
          {...props}
          icon="dots-vertical"
          onPress={() => setVisible(!visible)}
        />
      }
    >
      <Menu.Item
        title="Settings"
        leadingIcon="cog"
        trailingIcon="chevron-right"
        onPress={() => {
          setVisible(!visible)
          router.push('/settings')
        }}
      />
    </Menu>
  )
}

const TabLayout = () => (
  <Tabs
    tabBar={(props) => <TabBar {...props} />}
    screenOptions={{
      header: (props) => <TabsHeader navProps={props} children={undefined} />,
    }}
  >
    <Tabs.Screen
      name="explore"
      options={{
        title: 'Explore',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon
            color={color}
            name={focused ? 'compass' : 'compass-outline'}
          />
        ),
      }}
    />
    <Tabs.Screen
      name="career"
      options={{
        title: 'Career',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon
            color={color}
            name={focused ? 'cast-education' : 'book-education-outline'}
          />
        ),
      }}
    />
    <Tabs.Screen
      name="index"
      options={{
        title: 'Learn',
        headerRight: HeaderRight,
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon
            color={color}
            name={focused ? 'book-education' : 'book-education-outline'}
          />
        ),
      }}
    />
    <Tabs.Screen
      name="search"
      options={{
        title: 'Search',
        tabBarIcon: ({ color }) => <TabBarIcon color={color} name="magnify" />,
      }}
    />
    <Tabs.Screen
      name="profile"
      options={{
        title: 'Profile',
        headerRight: HeaderRight,
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon
            color={color}
            name={focused ? 'account' : 'account-outline'}
          />
        ),
      }}
    />
  </Tabs>
)

export default TabLayout
