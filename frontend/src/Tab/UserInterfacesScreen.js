import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ScrollView,
    TextInput,
    Pressable,
} from "react-native";

const UserInterfacesScreen = ({ navigation }) => {
    const [inputText, setInputText] = useState("");
    const [patients, setPatients] = useState([]);

    const addPatients = () => {
        if (inputText.trim()) {
            setPatients([
                ...patients,
                { id: patients.length.toString(), name: inputText },
            ]);
            setInputText("");
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Ingreso de datos de pacientes</Text>
            <TextInput
                style={styles.input}
                placeholder="Nombre del Paciente"
                value={inputText}
                onChangeText={setInputText}
            />
            <Pressable style={styles.button} onPress={addPatients}>
                <Text style={styles.buttonText}>Agregar pacientes</Text>
            </Pressable>
            <FlatList
                data={patients}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemText}>{item.name}</Text>
                    </View>
                )}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        height: 40,
        borderColor: "gray",
        marginBottom: 20,
        borderWidth: 1,
        paddingHorizontal: 10,
        width: "100%",
    },
    button: {
        backgroundColor: "#007BFF",
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
    itemContainer: {
        padding: 20,
        marginVertical: 5,
        backgroundColor: "#f5f5f5",
        borderRadius: 5,
        width: "100%",
    },
    itemText: {
        fontSize: 18,
    },
});

export default UserInterfacesScreen;
