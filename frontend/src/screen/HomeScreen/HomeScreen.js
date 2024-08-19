import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Home Screen</Text>
            <Button title="Perfil" onPress={() => navigation.navigate('Profile')} />
            <View style={styles.spacer} />
            <Button title="Historial" onPress={() => navigation.navigate('History')} />
            <View style={styles.spacer} />
            <Button title="Configuracion" onPress={() => navigation.navigate('')} />
            <View style={styles.spacer} />
            <Button title="Logout" onPress={() => navigation.navigate('Login')} />


                //uwu



        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    spacer: {
        marginBottom: 20,
    }

});

export default HomeScreen;
