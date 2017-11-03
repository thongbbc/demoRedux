import React,{Component} from 'react';
import {Text,View,Dimensions,Animated } from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../actions'
class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slide : new Animated.Value(-300),
            fading: new Animated.Value(-1)
        }
    }
     
    render(){
        const {body} = style     
        return(
            <View style={body}>
                {this._renderBody()}
            </View>
        )
    }
    animation () {
        this.state.slide.setValue(-20)
        this.state.fading.setValue(-1)
        
        Animated.timing(this.state.slide,{
            toValue:0,
            duration:1000
        }).start()
        Animated.timing(this.state.fading,{
            toValue:1,
            duration:1000
        }).start()
    }
    _renderDescription(id) {
        const {selected,myValue} = this.props
        const {bodyText} = style
        if ( id == selected) {
            this.animation()
            return(
                <Animated.View style = {{opacity:this.state.fading,marginTop:this.state.slide}}>
                <Text style ={bodyText}>
                    {myValue[id].description}
                </Text>
                </Animated.View>
            )
        }
    }
    _renderBody() {
        console.log(this.props)
        const width=Dimensions.get('window').width;
        const height=Dimensions.get('window').height;
        
        const {myValue,selected,actions } = this.props        
         return myValue.map((value,index) => 
        <View key={index} style= {{paddingTop:10,width:width-20,justifyContent:'flex-start',alignItems:'center'}}>
            <Text onPress={()=>{
                actions(value.id)
            }}
            style={{width:width-20,fontSize:20,textAlign:'left'}}>{value.title}</Text>
            {   this._renderDescription(value.id)}
        </View>)
    }
    
}
const width=Dimensions.get('window').width;

const style = {
    body:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',
        marginTop:20
    },
    titleText:{
        fontSize:18,
        fontWeight:'600',
        backgroundColor:'transparent'        
    },
    bodyText:{
        fontSize:12,
        width:width-20,
        textAlign:'left',
        fontWeight:'300',
        backgroundColor:'transparent'
    }
}
function mapStateToProps (state) {
    return {myValue:state.data,
        selected:state.selected,
        selected2:state.selected2
    }
}
export default connect(mapStateToProps,actions)(List)
