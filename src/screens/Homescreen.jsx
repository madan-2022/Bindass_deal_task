import { View } from 'react-native'
import React from 'react'
import { Box , Text } from 'native-base'

const Homescreen = () => {
  return (
    <Box width={'100%'} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} backgroundColor={'#FFFFFF'}>
        <Text fontSize={'3xl'} fontWeight={'600'}>Welcome to application</Text>
    </Box>
  )
}

export default Homescreen