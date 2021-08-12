import React, {useState} from 'react'
import { Text } from 'react-native'
import ListaJogos from '../BaseDados'




 //***************************FUNÇÃo GERA JOGOS ALEATORIOS*********************************/
export default function(){
     
   let list = [] 
   let listaFinal = []
   let limpa = []
  
   //Gera numeros aleatorios sem repetição, e se o numero for menor que 9 acrescenta o '0' ex: 03
    function geraNumero()
   {
     const numero = parseInt(Math.random() * 60) + 1
     let n = numero
     if(list.includes(numero)){return geraNumero()}
     else{return n}
   }

  
   //Gera uma lista com 6 numeros aleatorios
       for (let b = 0; b < 10; b++)
       {
            list = []
            for (let i = 0; i < 6; i++)
            {
            let num = geraNumero()    
            list[i] = num
            if(num < 10){num = '0' + num}
            limpa[i] = num
            limpa = limpa.sort((a,b) => a-b)
            }
           //Pegando cada lista gerada no loop e ordenando pelos atributos
            let novo = {id: b, dz1: limpa[0], dz2: limpa[1],dz3: limpa[2], 
                               dz4: limpa[3], dz5: limpa[4],dz6: limpa[5]}
            //inserindo as listas ordenadas na lista final
            listaFinal.push(novo)   
       }
        

       return(listaFinal)


}
//----------------------------------------------------------------------------------------
//Metodo que faz 10 jogos e não repete nenhum numero garantindo acertar as 60 dezenas
export function total(){

    
    let numerosContidos = []
    let listaFinal = []
    let contador = 0
    let listaTmp = []
    let loop = 0

    function geraNumero()
   {
     const numero = parseInt(Math.random() * 60) + 1
     let n = numero
     if(numerosContidos.includes(numero))
     {return geraNumero()}
     else{return n}
   }

    
    for(let n =0; n < 60; n++){

        let n = geraNumero()
        numerosContidos.push(n)
        if(n < 10){n = '0' + n}
        listaTmp.push(n)
        if(contador < 6){
            contador++
        }
        if(contador >= 6){
            contador = 0
            listaTmp = listaTmp.sort((a,b) => a-b)
            let novo = {id: loop, dz1: listaTmp[0], dz2: listaTmp[1],dz3: listaTmp[2], 
                dz4: listaTmp[3], dz5: listaTmp[4],dz6: listaTmp[5]}
            listaFinal.push(novo)
            listaTmp = []
            loop++
        }

    }

    return(listaFinal)

}



//Faz jogos da mega sena e verifica se não existem repetições
export function GeradorMulti(repeticao){

    let listaJogos = []
    let listaAtual
    let jogoNovo

    if(repeticao == ''){repeticao = 5}

    function verificaJogos() {

        jogoNovo = GeraJogos()
        //Verifica se o array contem algum item 'listaJogos.length'
        if(listaJogos.length){
            
            for(let i = 0; i < listaJogos.length; i++){
                   
                if( jogoNovo.dz1 == listaJogos[i].dz1 &&
                    jogoNovo.dz2 == listaJogos[i].dz2 &&
                    jogoNovo.dz3 == listaJogos[i].dz3 &&
                    jogoNovo.dz4 == listaJogos[i].dz4 &&
                    jogoNovo.dz5 == listaJogos[i].dz5 &&
                    jogoNovo.dz6 == listaJogos[i].dz6
                    ){ return verificaJogos()}else{return jogoNovo}

            }

        }
        else {return jogoNovo}
      
        // return jogoNovo
    }


    for(let v = 0; v < repeticao; v++)
    {
        listaAtual = verificaJogos()
        
        listaAtual.id = v
        
        listaJogos.push(listaAtual)
          
    }

   

    
   return(listaJogos)

}



function GeraJogos()
{
    let list = [] 
    let listaFinal = []
    let limpa = []
    let novo
   
    //Gera numeros aleatorios sem repetição, e se o numero for menor que 9 acrescenta o '0' ex: 03
     function geraNumero()
    {
      const numero = parseInt(Math.random() * 60) + 1
      let n = numero
      if(list.includes(numero)){return geraNumero()}
      else{return n}
    }
 
   
    //Gera uma lista com 6 numeros aleatorios retorna o Objeto- id + lista de numeros
        for (let b = 0; b < 1; b++)
        {
             list = []
             for (let i = 0; i < 6; i++)
             {
             let num = geraNumero()    
             list[i] = num
             if(num < 10){num = '0' + num}
             limpa[i] = num
             limpa = limpa.sort((a,b) => a-b)
             }
            //Pegando cada lista gerada no loop e ordenando pelos atributos
             novo = {id: b, dz1: limpa[0], dz2: limpa[1],dz3: limpa[2], 
                                dz4: limpa[3], dz5: limpa[4],dz6: limpa[5]}
             //inserindo as listas ordenadas na lista final
             
        }
 
        return(novo)

}
   