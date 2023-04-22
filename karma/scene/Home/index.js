import { Box, Button, Text } from 'native-base'

function Home({ navigation }) {
  return (
    <Box
      flex={1}
      bg="#fff"
      alignItems="center"
      justifyContent="center"
    >
      <Text>Karma</Text>
      <Button onPress={() => navigation.navigate('Authentication')}>
        Authentication
      </Button>
    </Box>
  )
}

export default Home
