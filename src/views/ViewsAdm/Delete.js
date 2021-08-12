import React,{useState, useEffect}from 'react'
import {Alert, Keyboard, Text, TextInput, TouchableOpacity, View} from 'react-native'
import styles from '../../estilos/estilos'
import * as Animatable from 'react-native-animatable'
import Icones from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'
import firebase from '../../Connection/firebaseConnection'


// console.disableYellowBox=true;


export default function Mega(){



  const [resultados, setResult] = useState([]);


  let [mostrar, setMostrar] = useState(false)

  const [concurso, setConcurso] = useState();
  const [dataC, setDatac] = useState();
  const [dz1, setDz1] = useState();
  const [dz2, setDz2] = useState();
  const [dz3, setDz3] = useState();
  const [dz4, setDz4] = useState();
  const [dz5, setDz5] = useState();
  const [dz6, setDz6] = useState();
  const [estimativa, setEstimativa] = useState();
  const [ganhadores, setGanhadores] = useState();
  const [local, setLocal] = useState();



    useEffect(() => {

        dados();
    
      }, [])
      


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
  
        })
  
      }



    function Buscar(num){

        Keyboard.dismiss()
        let arr = null
        if(num != null ){

        for(let i=0; i < resultados.length; i++){

            if(num == resultados[i].key){
               
                arr = i
            
            }
        }

        if(arr != null){

            setConcurso(resultados[arr].key)
            setDatac(resultados[arr].Data)
            setDz1(resultados[arr].Dz1) 
            setDz2(resultados[arr].Dz2) 
            setDz3(resultados[arr].Dz3) 
            setDz4(resultados[arr].Dz4) 
            setDz5(resultados[arr].Dz5) 
            setDz6(resultados[arr].Dz6) 
            setEstimativa(resultados[arr].Estimativa)
            setGanhadores(resultados[arr].Ganhadores)
            setLocal(resultados[arr].Local)

            setMostrar(true)

        }else{

            Alert.alert('Atenção!','Concurso não cadastrado em nossa base de dados!')
            LimpaCampos()
            setMostrar(false)

        }
      
        }else{ 
            Alert.alert('Atenção',"Concurso deve ser preenchido!")
            LimpaCampos()
            setMostrar(false)
        }

      }


      function VerificaDelete(){

        Alert.alert(
            'Atenção!',
            'Deseja realmente deletar o concurso: '+ concurso,
            [
              {text: 'Sim', onPress: () => Deletar()},
              {text: 'Não', onPress: () => console.log('No button clicked'), style: 'cancel'},
            ],
            { 
              cancelable: true 
            }
          );

      }

  async function Deletar(){


        await firebase.database().ref('Resultados/'+concurso).remove();
        Alert.alert("Sucesso", "Concurso Deletado com sucesso")
        LimpaCampos()
        setMostrar(false)
  }


  function LimpaCampos(){

    setConcurso(null)
    setDatac(null)
    setDz1(null) 
    setDz2(null)
    setDz3(null)
    setDz4(null)
    setDz5(null)
    setDz6(null)
    setEstimativa(null)
    setGanhadores(null)
    setLocal(null)
  }

  
 
  const navigation = useNavigation();

  return(
  
    <View style={{flex: 1}}>
    <View style={styles.ViewMegaDelete}>
      <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity onPress={() => {navigation.navigate("Inicial")}}>
          <Icones name='caret-back-circle-sharp' color='#FFF' size={35}
        /></TouchableOpacity>
      </View>

      <View style={{flex: 10}}>
      <Animatable.Text 
      style={styles.txtDeleteView}
      animation = 'flipInX'
      duration={1500}
      >DELETAR</Animatable.Text>
      </View>
    </View>
    
    <View style={styles.flat}>

            <Text style={styles.txtAdm}>Concurso</Text>
           <View style={{marginTop: 5}}>
            <View style={{width: '100%', flexDirection:'row', backgroundColor: '#AAA'}}>
            <TextInput style={styles.InputEd} onChangeText={(texto) => 
                       setConcurso(texto)} value={concurso} keyboardType='numeric'>
            </TextInput> 
            <TouchableOpacity style={styles.botaoBuscar} onPress={() => {Buscar(concurso)}}>
                <Text style={styles.txtBotao}>Buscar</Text>
            </TouchableOpacity>      
          </View>
                {mostrar &&
                    <View>
                    <Text style={styles.txtAdm}>Data</Text>
                    <TextInput style={styles.Input} onChangeText={(texto) => setDatac(texto)} value={dataC}></TextInput>
                    <Text style={styles.txtAdm}>Dezenas</Text>
                    <View style={styles.viewDezenas}>
                    <TextInput style={styles.InputDz} onChangeText={(texto) => setDz1(texto)}value={dz1}keyboardType='numeric'></TextInput>
                    <TextInput style={styles.InputDz} onChangeText={(texto) => setDz2(texto)}value={dz2}keyboardType='numeric'></TextInput>
                    <TextInput style={styles.InputDz} onChangeText={(texto) => setDz3(texto)}value={dz3}keyboardType='numeric'></TextInput>
                    <TextInput style={styles.InputDz} onChangeText={(texto) => setDz4(texto)}value={dz4}keyboardType='numeric'></TextInput>
                    <TextInput style={styles.InputDz} onChangeText={(texto) => setDz5(texto)}value={dz5}keyboardType='numeric'></TextInput>
                    <TextInput style={styles.InputDz} onChangeText={(texto) => setDz6(texto)}value={dz6}keyboardType='numeric'></TextInput>
                    </View>
        
                    <Text style={styles.txtAdm}>Estimativa</Text>
                    <TextInput style={styles.Input} onChangeText={(texto) => setEstimativa(texto)} value={estimativa} keyboardType='numeric'></TextInput>
                    
                    <Text style={styles.txtAdm}>Ganhadores</Text>
                    <TextInput style={styles.Input} onChangeText={(texto) => setGanhadores(texto)} value={ganhadores}></TextInput>
        
                    <Text style={styles.txtAdm}>Local</Text>
                    <TextInput style={styles.Input} onChangeText={(texto) => setLocal(texto)} value={local}></TextInput>
        
                    <View style={styles.viewBT}>
                    <TouchableOpacity style={styles.botaoDelete} onPress={() => {VerificaDelete()}}>
                        <Text style={styles.txtBotaoDelete}>Deletar</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                    }
                   
                   
                   

                </View>

    </View> 
                
       


  </View>
 
  )

}