import React from 'react'
import { View, ScrollView } from 'react-native'
import { Chip, List, Text } from 'react-native-paper'

const Career = () => {
  const data = [
    {
      category: 'Data Science & Analytics',
      icon: 'data-matrix-scan',
      roles: [
        'Data Manager',
        'Data Analyst',
        'Data Scientist',
        'Data Engineer',
      ],
    },
    {
      category: 'Software Engineering & IT',
      icon: 'developer-board',
      roles: [
        'Python Developer',
        'Junior Software Developer',
        'Cybersecurity Professional',
        'UX Designer',
        'IT Support Specialist',
        'Product Manager',
        'Full Stack Developer',
        'Front-End Developer',
        'Application Developer',
        'Back-End Developer',
        'DevOps Engineer',
        'iOS Developer',
        'IT Project Manager',
        'Android Developer',
      ],
    },
    {
      category: 'Sales & Marketing',
      icon: 'salesforce',
      roles: [
        'Graphic Designer',
        'Content Creator',
        'Digital Marketer',
        'Social Media Marketer',
        'Sales Operations Specialist',
        'Marketing Analyst',
      ],
    },
    {
      category: 'Business',
      icon: 'google-my-business',
      roles: [
        'Project Manager',
        'Supply Chain Analyst',
        'Bookkeeper',
        'Business Intelligence Analyst',
        'Human Resources Specialist',
        'Technology Consultant',
      ],
    },
  ]

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ gap: 16, padding: 32 }}>
        <Text variant="headlineLarge">What job role interests you?</Text>
        <Text>
          Pick one below, and we'll suggest a learning path to get you started.
          (You can update this at any time)
        </Text>
      </View>

      <List.Section>
        <List.AccordionGroup>
          {data.map((item, index) => (
            <List.Accordion
              key={index}
              id={index}
              title={item.category}
              left={(props) => <List.Icon {...props} icon={item.icon} />}
            >
              {item.roles.map((role, idx) => (
                <List.Item
                  key={idx}
                  title={role}
                  onPress={() => {}}
                  left={(p) => <Chip {...p}>{idx + 1}</Chip>}
                  right={(p) => <List.Icon {...p} icon="chevron-right" />}
                />
              ))}
            </List.Accordion>
          ))}
        </List.AccordionGroup>
      </List.Section>
    </ScrollView>
  )
}

export default Career
