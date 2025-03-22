import { router, Stack, useLocalSearchParams } from 'expo-router'
import { View, ScrollView, Image } from 'react-native'
import {
  Appbar,
  Button,
  Chip,
  Icon,
  List,
  Surface,
  Text,
  useTheme,
} from 'react-native-paper'

const Details = () => {
  const theme = useTheme()
  const { id } = useLocalSearchParams<{ id: string }>()
  const skills = ['Game Art', 'Game Design', 'Game Development']

  return (
    <View style={{ flex: 1, paddingBottom: 64 }}>
      <Stack.Screen
        options={{
          title: 'Data Engineering',
          headerRight: (props) => (
            <Appbar.Action {...props} icon="share-variant" onPress={() => {}} />
          ),
        }}
      />

      <ScrollView
        contentContainerStyle={{ gap: 16 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            gap: 16,
            borderRadius: 16,
            paddingVertical: 24,
            paddingHorizontal: 16,
            backgroundColor: theme.colors.primaryContainer,
          }}
        >
          <Text variant="headlineMedium">
            DeepLearning.AI Data Engineering Professional Certificate
          </Text>
          <Text>
            Build your skills in the high-demand field of data engineering and
            learn how you can deliver real business value by applying a core set
            of principles and strategies for developing data systems.
          </Text>

          <View style={{ gap: 16, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon size={16} source="star" />
              <Icon size={16} source="star" />
              <Icon size={16} source="star" />
              <Icon size={16} source="star" />
              <Icon size={16} source="star-half-full" />
            </View>
            <Text>4.8 (149)</Text>
          </View>

          <Text>Offered by</Text>
          <View style={{ gap: 16, flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{ height: 50, width: 50 }}
              source={require('@/assets/images/react-logo.png')}
            />
            <Text variant="titleLarge">DeepLearning.Al</Text>
          </View>
        </View>

        <View style={{ gap: 16, paddingHorizontal: 16 }}>
          <Text variant="titleMedium">About this course</Text>
          <Text>
            The DeepLearning.AI Data Engineering Professional Certificate is a
            comprehensive online program for data engineers and practitioners
            looking to start or grow their careers.Organizations of all sizes
            and across all industries are capturing and generating data at an
            ever-increasing pace. Within these organizations, every team, from
            executives, sales and ever-increasing pace. Within these
            organizations, every team, from executives, sales and marketing,
            finance and operations, product and engineering, to customer
            service, can derive insights and value from organizational data.
            Whether the end use case is data science, machine learning, or
            analytics, data engineering is what allows raw data to be converted
            to value for the business. This is why the role of data engineer is
            one of the highest-demand jobs in tech today. Throughout this
            program, you'll learn the foundations of data engineering while
            gaining hands-on experience designing and implementing data
            architectures using AWS and open-source tools. Taught by industry
            expert Joe Reis, co-author of Fundamentals of Data Engineering, this
            certificate equips you with the skills and knowledge to excel in a
            high-demand field, focusing on ingesting, processing, transforming,
            storing, and serving data to data stakeholders to drive
            organizational and business objectives. The practical labs were
            developed in partnership with AWS and Factored.Al to provide you
            with an authentic experience building data systems on the cloud.
            With this certificate, you will have the tools to further your data
            engineering career.
          </Text>
        </View>

        <List.Section title="Features">
          <List.Item
            title="Mobile friendly"
            description="100% of this course can be completed on mobile"
            left={(props) => <List.Icon {...props} icon="cellphone" />}
          />
          <List.Item
            title="100% Online"
            description="Start instantly and learn at your own schedule"
            left={(props) => <List.Icon {...props} icon="web" />}
          />
          <List.Item
            title="Flexible deadlines"
            description="Reset deadline in accordance to you schedule"
            left={(props) => <List.Icon {...props} icon="calendar" />}
          />
          <List.Item
            title="Beginner level"
            description="No prior experience required"
            left={(props) => <List.Icon {...props} icon="calendar" />}
          />
          <List.Item
            title="Approx. 3 months to complete"
            description="Suggested 1hours/week"
            left={(props) => <List.Icon {...props} icon="calendar" />}
          />
          <List.Item
            title="Taught in English"
            description="Subtitles: English, Arabic and 22 other"
            left={(props) => <List.Icon {...props} icon="calendar" />}
          />
        </List.Section>

        <View style={{ gap: 16, paddingHorizontal: 16 }}>
          <Text variant="titleMedium">Skills you will gain</Text>
          <View style={{ gap: 16, flexDirection: 'row', flexWrap: 'wrap' }}>
            {skills.map((item) => (
              <Chip key={item}>{item}</Chip>
            ))}
          </View>
        </View>

        <List.Section title="Instructors">
          <List.Item
            title="Joe Reis"
            description="Author, Data Engineer, Recovering Data Scientist"
            left={(props) => (
              <List.Image
                {...props}
                source={require('@/assets/images/react-logo.png')}
              />
            )}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
          />
        </List.Section>

        <List.Section title="Start Learning Today">
          <List.Item
            title="Taught by top companies and universities"
            left={(props) => (
              <List.Icon {...props} icon="check" color={theme.colors.primary} />
            )}
          />
          <List.Item
            title="Affordable programs"
            left={(props) => (
              <List.Icon {...props} icon="check" color={theme.colors.primary} />
            )}
          />
          <List.Item
            title="Apply your skills with hands-on projects"
            left={(props) => (
              <List.Icon {...props} icon="check" color={theme.colors.primary} />
            )}
          />
          <List.Item
            title="Learn on your own schedule"
            left={(props) => (
              <List.Icon {...props} icon="check" color={theme.colors.primary} />
            )}
          />
          <List.Item
            title="Course videos and readings"
            left={(props) => (
              <List.Icon {...props} icon="check" color={theme.colors.primary} />
            )}
          />
          <List.Item
            title="Graded quizzes and assignments"
            left={(props) => (
              <List.Icon {...props} icon="check" color={theme.colors.primary} />
            )}
          />
          <List.Item
            title="No degree or experience required for many programs"
            left={(props) => (
              <List.Icon {...props} icon="check" color={theme.colors.primary} />
            )}
          />
          <List.Item
            title="Shareable Certificate upon completion"
            left={(props) => (
              <List.Icon {...props} icon="check" color={theme.colors.primary} />
            )}
          />
        </List.Section>
      </ScrollView>

      <Surface
        style={{
          left: 0,
          right: 0,
          bottom: 0,
          padding: 16,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          position: 'absolute',
        }}
      >
        <Button mode="contained" onPress={() => router.push(`/1/home`)}>
          Enroll
        </Button>
      </Surface>
    </View>
  )
}

export default Details
