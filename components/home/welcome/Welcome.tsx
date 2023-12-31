import React from 'react'
import { View, Text, FlatList, TextInput, TouchableOpacity, Image } from 'react-native'

import styles from './welcome.style'
import { useRouter } from 'expo-router'
import { icons } from '../../../constants';

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = () => {
  const router = useRouter()
  const [activeJobType, setActiveJobType] = React.useState(jobTypes[0])
  return (
    <View>
      <View style={styles.container} >
        <Text style={styles.userName} >Welcome to</Text>
        <Text style={styles.welcomeMessage} >Job Finder</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for jobs"
            placeholderTextColor="#000"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image source={icons.search} style={styles.searchBtnImage} resizeMode='contain' />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList 
          data={jobTypes}
          keyExtractor={(item) => item}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item)
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  )
}

export default Welcome