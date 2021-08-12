import React from 'react'
import {SafeAreaView, Text, TouchableOpacity, StatusBar, Alert, BackHandler } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import styles from '../estilos/estilos';
import * as Animatable from 'react-native-animatable'
import Icones from 'react-native-vector-icons/Ionicons'



export default function Inicial(){


    function  Sair(){

        Alert.alert(
        'Atenção!',
        'Deseja realmente sair?',
        [
          {text: 'Sim', onPress: () => BackHandler.exitApp()},
          {text: 'Não', onPress: () => console.log('No button clicked'), style: 'cancel'},
        ],
        { 
          cancelable: true 
        })

    }


   
    const navigation = useNavigation();


    StatusBar.setHidden(true);


    return(


        <SafeAreaView style={styles.inicial}>

            <Animatable.View style={{position: 'absolute', top:12,right:15,}}
            animation='fadeInDownBig'
            duration={1500}
            >
            <TouchableOpacity  onPress={() => {Sair()}}>
                <Icones name='exit-outline' color='#FFF' size={35}/>
                <Text style={{color: '#FFF'}}>Sair</Text>
            </TouchableOpacity>
            </Animatable.View>


            <Animatable.Text
            style={styles.txtMegaView}
            animation='slideInDown'
            duration={1500}
            >
                MEGA SENA
            </Animatable.Text>

            <Animatable.View
            animation='lightSpeedIn'
            duration={1500}
            >
                <TouchableOpacity 
                style={styles.botao}
                onPress={() => {navigation.navigate('MegaResultado')}}
                >
                    <Text style={styles.txtBotao}>RESULTADOS MEGA SENA</Text>
                </TouchableOpacity>
            </Animatable.View>

            <Animatable.View
            style={{marginTop: 10}}
            animation='lightSpeedIn'
            duration={1500}
            >
                <TouchableOpacity 
                style={styles.botao}
                onPress={() => {navigation.navigate('Megaaposta')}}
                >
                    <Text style={styles.txtBotao}>MEGA APOSTA</Text>
                </TouchableOpacity>
            </Animatable.View>

            <Animatable.View
            style={{marginTop: 10}}
            animation='lightSpeedIn'
            duration={1500}
            >
                <TouchableOpacity 
                style={styles.botao}
                onPress={() => {navigation.navigate('Administrador')}}
                >
                    <Text style={styles.txtBotao}>ADMINISTRADOR</Text>
                </TouchableOpacity>
            </Animatable.View>
            


        </SafeAreaView>


    )


}