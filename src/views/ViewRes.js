import React, { useState } from 'react'
import {View,Text,ImageBackground} from 'react-native'
import * as Animatable from 'react-native-animatable'
import styles from '../estilos/estilos'
import Circle from '../Images/circle.png'



export default function Resultado ({data}){
    return(

        <Animatable.View 
        
        animation='bounceInLeft'
        duration={2000}
        
        >
        <View style={styles.baseRes}>
        <View style={styles.viewCenter}>
           <Text style={styles.txtBase}>Concurso : {data.key}</Text>
           <Text style={styles.txtBase}>Data : {data.Data}</Text>
           <Text style={styles.txtBase}>Local : {data.Local}</Text>
           <View style={styles.Line}>
               <ImageBackground source={Circle} style={styles.imgBG}>
                   <View style={styles.circle}>
                    <Text style={styles.txtDz}>{data.Dz1}</Text>
                   </View>
               </ImageBackground>
               <ImageBackground source={Circle} style={styles.imgBG}>
                   <View style={styles.circle}>
                    <Text style={styles.txtDz}>{data.Dz2}</Text>
                   </View>
               </ImageBackground>
               <ImageBackground source={Circle} style={styles.imgBG}>
                   <View style={styles.circle}>
                    <Text style={styles.txtDz}>{data.Dz3}</Text>
                   </View>
               </ImageBackground>
               <ImageBackground source={Circle} style={styles.imgBG}>
                   <View style={styles.circle}>
                    <Text style={styles.txtDz}>{data.Dz4}</Text>
                   </View>
               </ImageBackground>
               <ImageBackground source={Circle} style={styles.imgBG}>
                   <View style={styles.circle}>
                    <Text style={styles.txtDz}>{data.Dz5}</Text>
                   </View>
               </ImageBackground>
               <ImageBackground source={Circle} style={styles.imgBG}>
                   <View style={styles.circle}>
                    <Text style={styles.txtDz}>{data.Dz6}</Text>
                   </View>
               </ImageBackground>
           </View>
           <Text style={styles.txtBase}>Ganhadores : {data.Ganhadores}</Text>
           <Text style={styles.txtBase}>Estimativa : R$ {data.Estimativa}</Text>
           </View>
        </View>
        </Animatable.View>
      

    )
}

