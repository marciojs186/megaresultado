import React, {useState}from 'react'
import {useNavigation} from '@react-navigation/native'
import {View, FlatList, Text, TouchableOpacity, TextInput, Keyboard} from 'react-native'
import styles from '../estilos/estilos'
import Icones from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable'
import Gerador, {total, GeradorMulti}from '../../src/Funcoes/GeradorJogos';
import ApostaView from './ApostaView'
import { set } from 'react-native-reanimated'

let array =[]

export default function Mega(){
 
    const[lista, setLista] = useState([])
    const [njogos, setNjogos] = useState(1)
    
    

   function Carrega(){

    setLista(Gerador(njogos))
    
   } 
   function DezenasTotais(){

    setLista(total)

   } 
   
   function GeraLimpo(){
    
    setLista('')
    setLista(GeradorMulti(njogos))
    Keyboard.dismiss()
    setNjogos('')

   } 
   
   

    const navigation = useNavigation();

  
    return(
  
      <View style={styles.containerApostas}>


      <View style={styles.apostasTitulo}>
          <View style={{position: 'absolute', left: 10, }}>
              <TouchableOpacity onPress={() => {navigation.navigate('Inicial')}}>
              <Icones name='chevron-back-circle-outline' color='#FFF' size={35}/>
              </TouchableOpacity>
          </View>
          <Animatable.Text style={styles.txtMegaApostatitulo}
          animation='flipInY'
          duration={1600}
          >MEGA APOSTA
          </Animatable.Text>
      </View>

        <View style={styles.jogosGerados}>

        
        <FlatList
          data={lista}
          keyExtractor={(item) => {item.id}}
          renderItem={({item}) => (<ApostaView data={item}/>)}
        />

      
        </View>
          {/* <Text>{lista.join(',')}</Text>
          {lista.map(p => {return <Text>{p.id} {p.dz1} {p.dz2}</Text>})} */}
          {/* <Text style={{fontSize: 30, color: '#FFF'}}>{lista.length}</Text>
          <Text style={{fontSize: 30, color: '#FFF'}}>{lista[299].dz1} {lista[299].dz2} {lista[299].dz3}</Text> */}

          

        <View style={styles.apostasMenu}>


          
            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.botaoGera} onPress={() => {GeraLimpo()}}>
                    <Text style={styles.txtBotao}>Mega Aposta</Text>
            </TouchableOpacity>
           
           
            
            <View style={{alignItems: 'flex-end'}}>
            <Text style={{marginRight: 15, color: '#FFF'}}>Informe o numero de jogos</Text>
            <TextInput 
            style={styles.InputGera}
            placeholder = 'Numero de Jogos'
            onChangeText={(texto) => setNjogos(texto)}
            value={njogos}
            keyboardType='numeric'
            ></TextInput>
            </View>
           </View>
       
        </View>

      
         
      </View> 
  
  
    )
  
  }


 




  