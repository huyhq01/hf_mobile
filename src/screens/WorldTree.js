import React from 'react'
import { View, Text, Button } from 'react-native'

const WorldTree = ({navigation}) => {
    const world = "CP";
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 20}}>You are going to {world}</Text>
            <Button
                title={"Go to "+ world}
                onPress={()=>navigation.navigate(world)}
            />
        </View>
    )
}

export default WorldTree
