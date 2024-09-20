import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

const LoginScreen = ({ navigation }: any) => {
    const { control, handleSubmit } = useForm();

    // Function to handle form submission and call the login API
    const onSubmit = async (data: any) => {
        try {
            const queryString = new URLSearchParams({
                username: data.username,
                password: data.password
            }).toString();

            const response = await fetch('http://localhost:8000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: queryString,  // Send data as x-www-form-urlencoded
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('API Response:', responseData);

                Alert.alert('Success', `Welcome ${data.username}`);
                // Store token and navigate to another screen if needed
            } else {
                const errorData = await response.json();
                Alert.alert('Error', errorData.message || 'Invalid username or password');
            }
        } catch (error) {
            console.error('API Error:', error);
            Alert.alert('Error', 'Failed to log in. Please try again later.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Controller
                control={control}
                name="username"
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />
            <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />
            <Button title="Login" onPress={handleSubmit(onSubmit)} />
            <Button title="Register" onPress={() => navigation.navigate('Register')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
    },
});

export default LoginScreen;





