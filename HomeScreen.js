import React from 'react';
import {Button, View, Text} from 'react-native';
import styles from './styles';

function HomeScreen({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange'}}>

        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
            <Button 
                title="My Tienda"
                onPress={() => navigation.navigate('Tasks', {
                    id: 1, 
                    description: 'Aquí va la descripción',
                } )}
            />
            </View>
        </View>

    );
}

export default HomeScreen;