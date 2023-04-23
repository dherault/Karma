import { Box } from 'native-base'

function StepContainer({ done, children }) {
  return (
    <Box
      borderStyle="dashed"
      borderWidth={1}
      borderColor={done ? 'blue.500' : 'gray.500'}
    >
      {children}
    </Box>
  )
}

export default StepContainer
