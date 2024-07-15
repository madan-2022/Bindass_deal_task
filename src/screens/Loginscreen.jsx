import React, { useState } from 'react';
import { Alert } from 'react-native';
import {
  Center,
  VStack,
  FormControl,
  Input,
  Button,
  Box,
  Heading,
  Spinner
} from 'native-base';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    
    setIsLoading(true);
    // Simulate login logic here, for now, we'll just navigate
    setTimeout(() => {
      setIsLoading(false);
      if (email === 'madan@gmail.com' && password === '1234') {
        navigation.navigate('Home'); // Replace with your actual screen
      } else {
        Alert.alert('Error', 'Invalid email or password');
      }
    }, 1000);
  };

  return (
    <Center w="100%" background={'#FFFFFF'} height={'100%'} justifyContent={'start'}>
      <Box safeArea p="2" w="90%" py="8" marginTop={'10'}>
        <Heading size="xl" color="#0C0C95" fontWeight="bold">
          Login
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          width={'75%'}
          _dark={{ color: 'warmGray.200' }}
          fontWeight="light"
          size="sm"
        >
          Login now to track all your expenses and income at a place!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input value={email} onChangeText={setEmail} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input secureTextEntry={true} value={password} onChangeText={setPassword} />
          </FormControl>
          <Button mt="2" colorScheme="indigo" bg={'#0D0D93'} onPress={handleSubmit}>
            {isLoading ? <Spinner color="white" /> : 'LOGIN'}
          </Button>
          <Button mt="2" variant="link" onPress={() => navigation.navigate('Register')}>
            Register
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default LoginScreen;
