import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Box from './Box';
import tasks from './data/task';


function MenuScreen() {
    return (
        <View style={styles.root}>


            <View style={styles.containerBox}>

                {
                    tasks.map((task, i) => (
                        <Box 
                            key={i}
                            id = {task.id}
                            description = {task.description}    
                            title={task.title}   
                            stack= {task.stack}   
                                              
                        />
                    ))
                }
            </View>

        

        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'green',
    },

    containerBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        
    },
})

export default MenuScreen;