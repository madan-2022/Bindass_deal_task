import { View } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { Box , Text} from 'native-base'

const Splashscreen = ({navigation}) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login'); // Navigate to 'Firstscreen'
    }, 2000); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timer); // Clear the timeout on component unmount
  }, [navigation]);


  return (
   <Box width={'100%'} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} backgroundColor={'#FFFFFF'}>

    <Text fontSize={'4xl'} fontWeight={'medium'}>Interview task</Text>

   </Box>
  )
}

export default Splashscreen