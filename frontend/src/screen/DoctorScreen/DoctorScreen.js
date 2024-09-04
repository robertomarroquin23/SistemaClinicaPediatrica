import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

const DoctorScreen = ({ navigation }) => {

    return (

        <View style={styles.header}>
            <Avatar
                size="large"
                source={{ uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200' }}
                style={styles.avatar}
            />
            <Text style={styles.name}>Nombre Apellido</Text>
            <Text style={styles.email}>email@example.com</Text>
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


export default DoctorScreen;
