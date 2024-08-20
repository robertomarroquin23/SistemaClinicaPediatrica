import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

const ProfileScreen = ({ navigation }) => {

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Avatar
                    rounded
                    size="large"
                    source={{ uri: 'https://example.com/profile-picture.jpg' }} // Reemplaza con tu URL de imagen
                    containerStyle={styles.avatar}
                />
                <Text style={styles.email}>holamundo@gmail.com</Text>
            </View>

            <View style={styles.details}>
                <ListItem bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>Phone</ListItem.Title>
                        <ListItem.Subtitle>(123) 456-7890</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
                <ListItem bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>Address</ListItem.Title>
                        <ListItem.Subtitle>1234 Main St, Anytown, USA</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
                <ListItem bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>Birthday</ListItem.Title>
                        <ListItem.Subtitle>January 1, 1990</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            </View>

            <Button title="Edit Profile" onPress={() => alert('Edit Profile')} />
        </ScrollView>
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


export default ProfileScreen;
