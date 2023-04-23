import { useCallback, useEffect, useRef, useState } from 'react'
import { AddIcon, Box, Button, FormControl, Icon, Image, Input, Pressable, ScrollView, Text, TextArea, WarningOutlineIcon } from 'native-base'
import {
  Animated,
  Easing,
} from 'react-native'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { MediaTypeOptions, launchImageLibraryAsync } from 'expo-image-picker'
import { AntDesign } from '@expo/vector-icons'
import uuid from 'react-native-uuid'

function AchievementPreview({ achievement, navigation }) {

  return (
    <Box
      safeArea
      pt={4}
      px={4}
      height="100%"
      backgroundColor="white"
    >
      <ScrollView>
        <Text
          fontFamily="heading"
          textAlign="center"
          width="100%"
          fontSize="4xl"
          color="blue.500"
        >
          Preview Achievement
        </Text>
      </ScrollView>
    </Box>
  )
}

export default AchievementPreview
