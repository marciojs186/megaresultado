import React from 'react'
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import Circle from '../Images/circle.png'


export default function ApostaView({data}){

    
  return(

    
    <View style={styles.viewAposta}>
        
        <View style={styles.indice}>
                <Text style={styles.txtIndice}>{data.id + 1}</Text>
        </View>

      
        <ImageBackground source={Circle} style={styles.imgBG}>
                   <View style={styles.circle}>
                   <Text style={styles.txtResult}>{data.dz1}</Text>
                   </View>
        </ImageBackground>
        <ImageBackground source={Circle} style={styles.imgBG}>
                   <View style={styles.circle}>
                   <Text style={styles.txtResult}>{data.dz2}</Text>
                   </View>
        </ImageBackground>
        <ImageBackground source={Circle} style={styles.imgBG}>
                   <View style={styles.circle}>
                   <Text style={styles.txtResult}>{data.dz3}</Text>
                   </View>
        </ImageBackground>
        <ImageBackground source={Circle} style={styles.imgBG}>
                   <View style={styles.circle}>
                   <Text style={styles.txtResult}>{data.dz4}</Text>
                   </View>
        </ImageBackground>
        <ImageBackground source={Circle} style={styles.imgBG}>
                   <View style={styles.circle}>
                   <Text style={styles.txtResult}>{data.dz5}</Text>
                   </View>
        </ImageBackground>
        <ImageBackground source={Circle} style={styles.imgBG}>
                   <View style={styles.circle}>
                   <Text style={styles.txtResult}>{data.dz6}</Text>
                   </View>
        </ImageBackground>

   
    </View>

  )


}

const styles = StyleSheet.create({

viewAposta:{

    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#537',
    borderRadius: 5,
    margin:3,

},
indice:{

    width: 60,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#315',
    borderRadius: 6

},
txtIndice:{

    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
},

txtResult:{

fontSize: 25,
fontWeight: 'bold',
color: '#FFF'

},
circle:{

    position: 'absolute', 
    top: 0,
    left: 0, 
    right: 0,
    bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center',

},
imgBG:{

    width: 42,
    height: 42,
    margin: 5,


},

})