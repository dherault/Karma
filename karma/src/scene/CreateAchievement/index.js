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

import { storage } from '../../firebase'

import AchievementPreview from './AchievementPreview'

async function uploadImageAsync(uri) {
  // Why are we using XMLHttpRequest? See:
  // https://github.com/expo/expo/issues/2402#issuecomment-443726662
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.onload = () => {
      resolve(xhr.response)
    }
    xhr.onerror = e => {
      console.log(e)
      reject(new TypeError('Network request failed'))
    }
    xhr.responseType = 'blob'
    xhr.open('GET', uri, true)
    xhr.send(null)
  })

  const fileRef = ref(storage, uuid.v4())

  await uploadBytes(fileRef, blob)

  return getDownloadURL(fileRef)
}

function CreateAchievement({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current

  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')
  const [description, setDescription] = useState('')
  const [descriptionError, setDescriptionError] = useState('')
  const [imageUrls, setImageUrls] = useState([])
  const [imageError, setImageError] = useState('')
  const [preview, setPreview] = useState(null)

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      // easing: Easing.in(Easing.ease),
    }).start()
  // eslint-disable-next-line
  }, [])

  const addImage = useCallback(async () => {
    const result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
    })

    if (result.canceled) return
    console.log('result', result.assets[0])

    const urls = await Promise.all(result.assets.map(asset => uploadImageAsync(asset.uri)))

    setImageUrls(x => [...x, ...urls])
  }, [])

  const handlePreview = useCallback(async () => {
    setNameError('')
    setDescriptionError('')
    setImageError('')

    const finalName = name.trim()

    if (!finalName) {
      setNameError('You must name your achievement')

      return
    }

    const finalDescription = description.trim()

    if (!finalDescription) {
      setDescriptionError('You must describe your achievement')

      return
    }

    const createdAt = new Date().toISOString()
    const achievement = {
      id: uuid.v4(),
      name: finalName,
      description: finalDescription,
      imageUrls,
      createdAt,
      updatedAt: createdAt,
    }

    setPreview(achievement)
  }, [name, description, imageUrls])

  console.log('imageUrls', imageUrls)

  if (preview) {
    return (
      <AchievementPreview
        achievement={preview}
        navigation={navigation}
      />
    )
  }

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
          Create Achievement
        </Text>
        <Box
          width="290px"
          marginX="auto"
          height={1}
        >
          <Animated.View
            style={[
              {
                transform: [{ scaleX: fadeAnim }],
                transformOrigin: 'left',
                height: '100%',
              },
            ]}
          >
            <Box
              width="100%"
              height="100%"
              backgroundColor="blue.500"
            />
          </Animated.View>
        </Box>
        <FormControl
          mt={4}
          isInvalid={!!nameError}
        >
          <FormControl.Label>Name your acheivement</FormControl.Label>
          <Input
            value={name}
            onChange={event => setName(event.target.value)}
            placeholder="Today I fed my cat"
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {nameError}
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl
          mt={4}
          isInvalid={!!descriptionError}
        >
          <FormControl.Label>Describe it</FormControl.Label>
          <TextArea
            h={64}
            value={description}
            onChange={event => setDescription(event.target.value)}
            placeholder="He loved it!"
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {descriptionError}
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl
          mt={4}
          isInvalid={!!imageError}
        >
          <FormControl.Label>Add proof</FormControl.Label>
          {/* <TextArea
          h={64}
          value={description}
          onChange={event => setDescription(event.target.value)}
          placeholder="He loved it!"
        /> */}
          <Box
            flexDirection="row"
            flexWrap="wrap"
          // justifyContent="center"
            alignItems="center"
            borderColor="blue.500"
            borderWidth={1}
            borderRadius={4}
          >
            {imageUrls.map(uri => (
              <Image
                source={{ uri }}
                key={uri}
                width="25%"
                height={24}
              />
            ))}
            <Pressable
              onPress={addImage}
              _pressed={{ backgroundColor: 'gray.100' }}
              width="25%"
              height={24}
              borderRadius={4}
            >
              <Box
                flex={1}
                width="100%"
                height="100%"
                justifyContent="center"
                alignItems="center"
                color="blue.500"
              >
                <Icon
                  color="blue.500"
                  as={AntDesign}
                  name="plus"
                  size="md"
                />
              </Box>
            </Pressable>
          </Box>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {imageError}
          </FormControl.ErrorMessage>
        </FormControl>
        <Button
          mt={8}
          onPress={handlePreview}
        >
          Preview
        </Button>
      </ScrollView>
    </Box>
  )
}

export default CreateAchievement
