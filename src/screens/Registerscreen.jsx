import React, { useState } from 'react';
import { Alert } from 'react-native';
import {
  Box,
  Heading,
  VStack,
  Input,
  FormControl,
  Center,
  Button,
  Spinner,
  ScrollView,
} from 'native-base';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    setIsLoading(true);
    // Simulate registration logic here, for now, we'll just navigate
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert('Success', 'Registration Successful');
      navigation.navigate('Login');
    }, 1000);
  };

  return (
    <ScrollView>
    <Center w="100%" background={'#FFFFFF'} height={'100%'} justifyContent={'start'}>
      <Box safeArea p="2" w="90%" py="8" marginTop={'10'}>
        <Heading size="xl" color="#0C0C95" fontWeight="bold">
          Register
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          width={'75%'}
          _dark={{ color: 'warmGray.200' }}
          fontWeight="light"
          size="sm"
        >
          Register now to track all your expenses and income at a place!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input value={name} onChangeText={setName} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input value={email} onChangeText={setEmail} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input secureTextEntry={true} value={password} onChangeText={setPassword} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input
              secureTextEntry={true}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </FormControl>
          <Button mt="2" colorScheme="indigo" bg={'#0D0D93'} onPress={handleSubmit}>
            {isLoading ? <Spinner color="white" /> : 'REGISTER'}
          </Button>
        </VStack>
      </Box>
    </Center>
    </ScrollView>
  );
};

export default RegisterScreen;
