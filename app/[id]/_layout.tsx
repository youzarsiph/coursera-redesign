import { Stack } from 'expo-router'
import { StackHeader } from '@/lib'

const StackLayout = () => (
  <Stack
    screenOptions={{
      header: (props) => <StackHeader navProps={props} children={undefined} />,
    }}
  >
    <Stack.Screen name="index" />
    <Stack.Screen name="home" />
  </Stack>
)

export default StackLayout
