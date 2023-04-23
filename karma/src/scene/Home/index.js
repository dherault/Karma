import { Box, Button } from 'native-base'

function Home({ navigation }) {
  return (
    <Box
      flex={1}
      alignItems="center"
      justifyContent="center"
    >
      <Button onPress={() => navigation.navigate('Authentication')}>
        Authentication
      </Button>
      <Button
        mt={2}
        onPress={() => navigation.navigate('Stories')}
      >
        Stories
      </Button>
    </Box>
  )
}

export default Home
