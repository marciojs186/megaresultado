import React from 'react'
import {SafeAreaView, Text, TouchableOpacity , View} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import styles from '../estilos/estilos';
import * as Animatable from 'react-native-animatable'
import Icones from 'react-native-vector-icons/Ionicons'


export default function Inicial(){

    const navigation = useNavigation();

    return(


        <SafeAreaView style={{flex:1, backgroundColor: '#0065B7'}}>
            <Animatable.View 
            animation= 'fadeInLeft'
            duration={1500}
             style={{flex:0.2, alignItems: 'flex-start'}}>
                <TouchableOpacity style={{marginLeft: 5, marginTop: 5}} 
                onPress={() => {navigation.navigate('Inicial')}}>
                <Icones  
                name='caret-back-circle-sharp' 
                color='#FFF' size={35}/>
                </TouchableOpacity>
            </Animatable.View>
            <View style={{flex:4, alignItems: 'center', justifyContent: 'center'}}>
            <Animatable.Text
            style={styles.txtMegaViewAdm}
            animation='slideInDown'
            duration={1500}
            >
                ADMINISTRADOR
            </Animatable.Text>

            <Animatable.View
            animation='lightSpeedIn'
            duration={1500}
            >
                <TouchableOpacity 
                style={styles.botao}
                onPress={() => {navigation.navigate('Add')}}
                >
                    <Text style={styles.txtBotao}>ADICIONAR CONCURSO</Text>
                </TouchableOpacity>
            </Animatable.View>

            <Animatable.View
            style={{marginTop: 10}}
            animation='lightSpeedIn'
            duration={1500}
            >
                <TouchableOpacity 
                style={styles.botao}
                onPress={() => {navigation.navigate('Edit')}}
                >
                    <Text style={styles.txtBotao}>EDITAR CONCURSO</Text>
                </TouchableOpacity>
            </Animatable.View>

            <Animatable.View
            style={{marginTop: 10}}
            animation='lightSpeedIn'
            duration={1500}
            >
                <TouchableOpacity 
                style={styles.botao}
                onPress={() => {navigation.navigate('Delete')}}
                >
                    <Text style={styles.txtBotao}>DELETAR CONCURSO</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>

        </SafeAreaView>


    )


}