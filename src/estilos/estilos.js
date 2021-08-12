import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
        
        
container:{
        
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
        
},

inicial:{


    flex:1,
    backgroundColor:'#0065B7',
    alignItems: 'center',
    justifyContent: 'center'


},

botao:{


    width: 280,
    height: 60,
    borderWidth: 3,
    borderColor: "#151",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#1A5",
    borderRadius: 15,
},

botaoGera:{


    width: 200,
    height: 60,
    borderWidth: 3,
    borderColor: "#151",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#1A5",
    borderRadius: 15,
    margin: 3,
    marginTop: 20
},

botaoDelete:{


    width: 280,
    height: 60,
    borderWidth: 3,
    borderColor: "#511",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#B70033",
    borderRadius: 15,
},
botaoBuscar:{


    width: 160,
    height: 60,
    position: 'absolute',
    right:5,
    top: 3,
    borderWidth: 3,
    borderColor: "#004595",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#0065B7",
    borderRadius: 15,
},

viewDezenas:{

    width: '100%',
    marginLeft: 4,
    marginRight: 5,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center'

},


txtBotao:{

    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#FFF',

},
txtBotaoDelete:{

    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#FFF',

},

baseRes:{

    flex: 1,
    justifyContent:'center',
    backgroundColor: '#537',
    margin: 4,
    borderWidth: 1,
    borderColor: '#262',
    borderRadius: 8,

},

Line:{

    margin: 4,
    flexDirection: 'row'

},
circle:{

    position: 'absolute', 
    top: 0,
    left: 0, 
    right: 0,
    bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center'

},
imgBG:{

    width: 35,
    height: 35

},
txtDz:{

    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    
},
txtBase:{

    fontSize: 18,
    color: '#000',
    color: '#FFF'
},
viewCenter:{

    margin: 15,

},
ViewMega:{

flex: 1,
flexDirection: 'row',
backgroundColor: '#0065B7',
justifyContent: 'center',
alignItems: 'center',
borderBottomWidth: 1,
shadowColor: '#000',
elevation: 3,

},
ViewMegaDelete:{

flex: 1,
flexDirection: 'row',
backgroundColor: '#B70033',
justifyContent: 'center',
alignItems: 'center',
borderBottomWidth: 1,
shadowColor: '#000',
elevation: 3,

},
txtAddView:{

    fontSize: 45,
    fontWeight: 'bold',
    color: '#FFF',
    position: 'absolute',
    bottom: -28,
    left: 25,
},
txtEditView:{

    fontSize: 45,
    fontWeight: 'bold',
    color: '#FFF',
    position: 'absolute',
    bottom: -28,
    left: 60,
},
txtDeleteView:{

    fontSize: 45,
    fontWeight: 'bold',
    color: '#FFF',
    position: 'absolute',
    bottom: -28,
    left: 40,
},
txtMegaViewAdm:{

    fontSize: 34,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10


},
txtMegaView:{

    fontSize: 45,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10


},
flat:{

    flex: 9

},
Input:{

    borderWidth: 1,
    borderColor: '#AAA',
    backgroundColor: '#CCC',
    borderRadius: 10,
    marginRight: 15,
    marginLeft: 15,
    fontSize: 18,
    fontWeight: 'bold',
    

},
InputDz:{

    borderWidth: 1,
    borderColor: '#AAA',
    backgroundColor: '#CCC',
    borderRadius: 10,
    marginRight: 7,
    width: 47,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
    
},
txtAdm:{

    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,

},
txtMega:{

    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 15,
    color: '#FFF',
    position: 'absolute',
    top: 215,
    right: 95,

},
viewBT:{

    marginTop: 19,
    justifyContent: 'center',
    alignItems: 'center'
},
InputEd:{

    width: 180,
    height: 55,
    fontSize: 20,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#AAA',
    backgroundColor: '#DDD',
    borderRadius: 10,
    margin: 5,

},
InputGera:{

    width: 180,
    height: 55,
    fontSize: 20,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#AAA',
    backgroundColor: '#DDD',
    borderRadius: 10,
    margin: 5,
    textAlign: 'center'
},

containerApostas:{


    flex: 1,
    backgroundColor: '#0065B7'


},

apostasTitulo:{

flex:0.6,
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
borderBottomWidth: 2,
shadowColor: '#000',
elevation: 3,

},
txtMegaApostatitulo:{

    fontSize: 35,
    fontWeight: 'bold',
    color: '#FFF',


},

jogosGerados:{

flex: 3.7,
backgroundColor: '#CCC',
borderBottomWidth: 1,
borderColor: '#009',
shadowColor: '#000',
shadowOpacity: 0.5,
elevation: 3,


},
apostasMenu:{
    flex: 2.3,
    borderRadius: 5,

}




})



export default styles
        
        
 
