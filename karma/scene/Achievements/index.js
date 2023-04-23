import { Box, Fab, Icon, Text } from 'native-base'
import { AntDesign } from '@expo/vector-icons'
import { useCallback } from 'react'

function Achievements({ navigation }) {

  // const handleCreateAcheivement = useCallback(() => {

  // }, [])

  return (
    <Box
      p={2}
      position="relative"
      height="100%"
    >
      <Box
        position="absolute"
        bottom={0}
        right={0}
      >
        <Fab
          renderInPortal={false}
          onPress={() => navigation.navigate('CreateAchievement')}
          shadow={2}
          size="sm"
          icon={(
            <Icon
              color="white"
              as={AntDesign}
              name="plus"
              size="sm"
            />
          )}
        />
      </Box>
      <Text>Acheivements</Text>
    </Box>
  )
}

export default Achievements
