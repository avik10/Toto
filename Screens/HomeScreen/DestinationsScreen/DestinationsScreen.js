import React, { useState } from "react";
import { View,Text,TextInput ,StyleSheet,SafeAreaView} from "react-native";


const DestinationSerach=(props)=>{
    const[fromText,setfromText]=useState('');
    const[destinationText,setdestinationText]=useState('');

    return(
        <SafeAreaView>

<View style={styles.container}> 
<TextInput style={StyleSheet.texinput} placeholder="From" value={fromText} onChangeText={setfromText} />
<TextInput style={StyleSheet.texinput}  placeholder="where to" value={destinationText} onChangeText={setdestinationText} />
</View>
        </SafeAreaView>
    );
}
export default DestinationSerach;

const styles=StyleSheet.create({
container:{
padding:10,

},
texinput:{
padding:10,
backgroundColor:'#eee',
marginVertical:5
}
})