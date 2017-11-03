import React from 'react';
import {Text,View} from 'react-native';

const Header = (props) => {
    return(
        <View style={{
            paddingTop:30,paddingBottom:10,
            shadowColor:'#000',
            shadowOpacity:0.3,
            alignItems:'center',
            shadowOffset:{width:0,height:2}
        }}>
            <Text>{[props.title]}</Text>
        </View>
    )
}
export {Header}