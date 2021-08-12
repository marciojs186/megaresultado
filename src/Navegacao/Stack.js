import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ResultadoMega from '../views/ResultadosMega';
import Inicial from '../views/Inicial'
import Administrador from '../views/Administrador'
import Add from '../views/ViewsAdm/ADD'
import Delete from '../views/ViewsAdm/Delete'
import Edit from '../views/ViewsAdm/Edit'
import MegaAposta from '../views/MegaAposta'


const Stack = createStackNavigator()


export default props => (

    <Stack.Navigator initialRouteName = 'Inicial' screenOptions={{headerShown: false}}>

            <Stack.Screen name="Inicial" component={Inicial}/> 
            <Stack.Screen name="MegaResultado" component={ResultadoMega}/>
            <Stack.Screen name="Administrador" component={Administrador}/>
            <Stack.Screen name="Add" component={Add}/>
            <Stack.Screen name="Delete" component={Delete}/>
            <Stack.Screen name="Edit" component={Edit}/>
            <Stack.Screen name="Megaaposta" component={MegaAposta}/>

    </Stack.Navigator>

)