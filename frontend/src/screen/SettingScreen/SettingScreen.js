import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

const SettingScreen = ({ navigation }) => {

    return (
        <View>
            <Text>Setting Screen</Text>
            <Button title="Regresar" onPress={() => navigation.goBack()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    avatar: {
        marginBottom: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 16,
        color: 'gray',
    },
    details: {
        marginBottom: 20,
    },
});


export default SettingScreen;
