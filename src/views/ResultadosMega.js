import React,{useState, useEffect}from 'react'
import {Alert, FlatList, Text, TouchableOpacity, View, ActivityIndicator} from 'react-native'
import styles from '../estilos/estilos'
import ListaJogos from '../BaseDados'
import ViewResult from './ViewRes'
import * as Animatable from 'react-native-animatable'
import Icones from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'
import firebase from '../Connection/firebaseConnection'


// console.disableYellowBox=true;


export default function Mega(){
  
  const [resultados, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {


    async function dados(){

      setResult([])

      await firebase.database().ref('Resultados').on('value', (snapshop) =>{

          snapshop.forEach((chilItem) => {
            let data = {

            key:  chilItem.key,
            Data: chilItem.val().Data,
            Dz1:  chilItem.val().Dz1,
            Dz2:  chilItem.val().Dz2,
            Dz3:  chilItem.val().Dz3,
            Dz4:  chilItem.val().Dz4,
            Dz5:  chilItem.val().Dz5,
            Dz6:  chilItem.val().Dz6,
            Estimativa: chilItem.val().Estimativa,
            Ganhadores: chilItem.val().Ganhadores,
            Local: chilItem.val().Local
            };

            setResult(oldArray => [...oldArray, data]);

          })

          setLoading(false)

      })

    }

    dados();

  }, [])

 
  const navigation = useNavigation();

  return(

    <View style={{flex: 1}}>
    <View style={styles.ViewMega}>
      <View style={{flex: 2, alignItems: 'center'}}>
        <TouchableOpacity onPress={() => {navigation.navigate("Inicial")}}>
          <Icones name='caret-back-circle-sharp' color='#FFF' size={35}
        /></TouchableOpacity>
      </View>

      <View style={{flex: 10}}>
      <Animatable.Text 
      style={styles.txtMegaView}
      animation = 'flipInX'
      duration={1500}
      > MEGA SENA</Animatable.Text>
      </View>
    </View>
    <View style={styles.flat}>

        {loading?(
          <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
            <ActivityIndicator color="#0065B7" size={65}/>
          </View>
        ):
        (
        <FlatList
          keyExtractor={item => item.key}
          data={resultados.reverse()}
          renderItem={({item}) => (<ViewResult data={item}/>)}
        />

        )
        
        }

       
    </View> 


  </View>
 
  )

}