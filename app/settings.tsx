import { ScrollView } from 'react-native'
import { List, Switch, useTheme } from 'react-native-paper'

const Settings = () => {
  const theme = useTheme()

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <List.Section title="Appearance">
        <List.Item
          title="Light mode"
          onPress={() => {}}
          left={(props) => <List.Icon {...props} icon="weather-sunny" />}
        />
        <List.Item
          title="Dark mode"
          onPress={() => {}}
          left={(props) => <List.Icon {...props} icon="weather-night" />}
        />
        <List.Item
          title="Use device settings"
          onPress={() => {}}
          left={(props) => <List.Icon {...props} icon="cellphone" />}
          right={(props) => <List.Icon {...props} icon="check" />}
        />
      </List.Section>

      <List.Section title="Course content">
        <List.Item
          title="Downloads"
          description="Manage all of your offline content"
          onPress={() => {}}
          left={(props) => <List.Icon {...props} icon="download-circle" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
        <List.Item
          title="Download over WIFI only"
          onPress={() => {}}
          left={(props) => <List.Icon {...props} icon="wifi" />}
          right={(props) => <Switch {...props} />}
        />
        <List.Item
          title="Video download quality"
          description="Standard (540p)"
          onPress={() => {}}
          left={(props) => <List.Icon {...props} icon="high-definition-box" />}
        />
        <List.Item
          title="Delete all downloads"
          onPress={() => {}}
          left={(props) => <List.Icon {...props} icon="trash-can" />}
        />
      </List.Section>

      <List.Section title="Notifications">
        <List.Item
          title="Course related"
          description="Receive notifications about course"
          onPress={() => {}}
          left={(props) => <List.Icon {...props} icon="bell" />}
          right={(props) => <Switch value {...props} />}
        />
        <List.Item
          title="Study remainders"
          description="Receive notifications that reminds you to study"
          onPress={() => {}}
          left={(props) => <List.Icon {...props} icon="bell-ring" />}
          right={(props) => <Switch value {...props} />}
        />
        <List.Item
          title="Promotions"
          description="Receive notifications on offers and promotions"
          onPress={() => {}}
          left={(props) => <List.Icon {...props} icon="currency-usd" />}
          right={(props) => <Switch {...props} />}
        />
      </List.Section>

      <List.Section title="Account">
        <List.Item
          title="Logout"
          onPress={() => {}}
          left={(props) => <List.Icon {...props} icon="logout-variant" />}
        />
        <List.Item
          title="My subscriptions"
          onPress={() => {}}
          left={(props) => <List.Icon {...props} icon="currency-usd" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
        <List.Item
          title="Delete account"
          rippleColor={theme.colors.error}
          titleStyle={{ color: theme.colors.onError }}
          onPress={() => {}}
          left={(props) => (
            <List.Icon
              {...props}
              icon="delete-alert"
              color={theme.colors.onError}
            />
          )}
          right={(props) => (
            <List.Icon
              {...props}
              icon="chevron-right"
              color={theme.colors.onError}
            />
          )}
        />
      </List.Section>

      <List.Section title="Support">
        <List.Item
          title="Learner Help Center"
          onPress={() => {}}
          left={(props) => <List.Icon {...props} icon="information" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
        <List.Item
          title="Report an Issue"
          description="Find an issue? Send it to us. We value your feedback, and are constantly trying to make the mobile app better"
          onPress={() => {}}
          left={(props) => <List.Icon {...props} icon="bug-check" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
      </List.Section>

      <List.Section title="Legal">
        <List.Item
          title="Terms"
          onPress={() => {}}
          left={(props) => <List.Icon {...props} icon="file-document" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
        <List.Item
          title="Privacy Notice"
          onPress={() => {}}
          left={(props) => <List.Icon {...props} icon="shield-account" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
      </List.Section>
    </ScrollView>
  )
}

export default Settings
