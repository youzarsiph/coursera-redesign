import React from 'react'
import { View, ScrollView } from 'react-native'
import {
  Card,
  Chip,
  Icon,
  IconButton,
  List,
  Text,
  Tooltip,
} from 'react-native-paper'

const Explore = () => {
  const topics = ['Arts and Humanities', 'Business', 'Computer Science']
  const me = require('@/assets/images/me.png')

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <List.Section>
        <View
          style={{
            gap: 16,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <List.Subheader>Topics</List.Subheader>
          <Tooltip title="See All">
            <IconButton icon="chevron-right" onPress={() => {}} />
          </Tooltip>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 16, paddingHorizontal: 16 }}
        >
          {topics.map((t) => (
            <Chip
              key={t}
              onPress={() => {}}
              closeIcon="chevron-right"
              onClose={() => {}}
            >
              {t}
            </Chip>
          ))}
        </ScrollView>
      </List.Section>

      <List.Section>
        <View
          style={{
            gap: 16,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <List.Subheader>Popular in Computer Science</List.Subheader>
          <Tooltip title="See All">
            <IconButton icon="chevron-right" onPress={() => {}} />
          </Tooltip>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 16, paddingHorizontal: 16 }}
        >
          {topics.map((t) => (
            <Card
              key={t}
              mode="outlined"
              contentStyle={{ gap: 16 }}
              onPress={() => {}}
            >
              <Card.Cover source={me} />
              <Card.Content style={{ gap: 16 }}>
                <Text variant="titleMedium">{t}</Text>
                <Text>Google</Text>

                <View
                  style={{
                    gap: 32,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Text variant="bodySmall">Course</Text>

                  <View
                    style={{
                      gap: 16,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <View
                      style={{
                        gap: 2,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                    >
                      <Icon size={16} source="star" />
                      <Icon size={16} source="star" />
                      <Icon size={16} source="star" />
                      <Icon size={16} source="star" />
                      <Icon size={16} source="star-half-full" />
                    </View>
                    <Text variant="bodySmall">(4.5)</Text>
                  </View>
                </View>
              </Card.Content>
            </Card>
          ))}
        </ScrollView>
      </List.Section>

      <List.Section>
        <View
          style={{
            gap: 16,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <List.Subheader>Earn Your Degree</List.Subheader>
          <Tooltip title="See All">
            <IconButton icon="chevron-right" onPress={() => {}} />
          </Tooltip>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 16, paddingHorizontal: 16 }}
        >
          {topics.map((t) => (
            <Card
              key={t}
              mode="outlined"
              contentStyle={{ gap: 16 }}
              onPress={() => {}}
            >
              <Card.Cover source={me} />
              <Card.Content style={{ gap: 16 }}>
                <Text variant="titleMedium">{t}</Text>
                <Text>Google</Text>

                <View
                  style={{
                    gap: 32,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Text variant="bodySmall">Course</Text>

                  <View
                    style={{
                      gap: 16,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <View
                      style={{
                        gap: 2,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                    >
                      <Icon size={16} source="star" />
                      <Icon size={16} source="star" />
                      <Icon size={16} source="star" />
                      <Icon size={16} source="star" />
                      <Icon size={16} source="star-half-full" />
                    </View>
                    <Text variant="bodySmall">(4.5)</Text>
                  </View>
                </View>
              </Card.Content>
            </Card>
          ))}
        </ScrollView>
      </List.Section>

      <List.Section>
        <View
          style={{
            gap: 16,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <List.Subheader>Guided Projects for You</List.Subheader>
          <Tooltip title="See All">
            <IconButton icon="chevron-right" onPress={() => {}} />
          </Tooltip>
        </View>

        {topics.map((t) => (
          <List.Item
            key={t}
            title={t}
            description="Duke University, Project"
            onPress={() => {}}
            left={(props) => (
              <List.Image
                {...props}
                source={me}
                style={{ ...props.style, borderRadius: 8 }}
              />
            )}
          />
        ))}
      </List.Section>

      <List.Section>
        <View
          style={{
            gap: 16,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <List.Subheader>Top Rated</List.Subheader>
          <Tooltip title="See All">
            <IconButton icon="chevron-right" onPress={() => {}} />
          </Tooltip>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 16, paddingHorizontal: 16 }}
        >
          {topics.map((t) => (
            <Card
              key={t}
              mode="outlined"
              contentStyle={{ gap: 16 }}
              onPress={() => {}}
            >
              <Card.Cover source={me} />
              <Card.Content style={{ gap: 16 }}>
                <Text variant="titleMedium">{t}</Text>
                <Text>Google</Text>

                <View
                  style={{
                    gap: 32,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Text variant="bodySmall">Course</Text>

                  <View
                    style={{
                      gap: 16,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <View
                      style={{
                        gap: 2,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                    >
                      <Icon size={16} source="star" />
                      <Icon size={16} source="star" />
                      <Icon size={16} source="star" />
                      <Icon size={16} source="star" />
                      <Icon size={16} source="star-half-full" />
                    </View>
                    <Text variant="bodySmall">(4.5)</Text>
                  </View>
                </View>
              </Card.Content>
            </Card>
          ))}
        </ScrollView>
      </List.Section>
    </ScrollView>
  )
}

export default Explore
