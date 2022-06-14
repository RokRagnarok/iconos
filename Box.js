import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';


function Box({ id, description, title, image, stack}) {

    const navigation = useNavigation();

    return (
        <View style={styles.root}>
            <Image
  style={{
    width: 51,
    height: 51,
    resizeMode: 'contain'
  }}
  source={{
    uri: 'https://http2.mlstatic.com/D_NQ_NP_887304-MLM44298446943_122020-O.jpg'
    
  }}
  


  
/>


            <Text>Producto {id}</Text>
            <Text> {title}</Text>
            
            <Button
                color="#455a64"
                title="Detalles"
                onPress={
                    () => navigation.navigate('Details', {
                        id: id,
                        description: description,
                        stack: stack,
                        title: title,
                        
                    })
                }
            />
  
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: 110,
        height: 110,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'yellow',
        borderWidth: 3,
        borderRadius: 8,
        margin: 12,
    }
})

export default Box;