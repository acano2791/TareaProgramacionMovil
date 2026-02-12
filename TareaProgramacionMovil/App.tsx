import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View ,Image } from 'react-native';
import CustomInput from './src/components/CustomInput';
import CustomButton from "./src/components/CustomButton";
import { useState } from 'react';

export default function App() {
//Declaraciones Ejercicio 1
const [nombre, setNombre] = useState("");
const [edad, setEdad] = useState("");

//Declaraciones Ejercicio 2
const [contador, setContador] = useState(0);
const esPar = contador % 2 === 0;

//Declaraciones Ejercicio 3
const [mostrarDetalles, setMostrarDetalles] = useState(false);

  return (
    <View style={styles.container}>
      
      <View style={styles.container1}>
      <Text style={styles.text}>      
        Ejercicio #1 - Manejo de estado con useState
      </Text>
      <CustomInput 
              placeholder={'Ingrese su nombre'} 
              onChange={setNombre} 
              value={nombre} 
              typeInput={'text'}              
       />
       <CustomInput 
              placeholder={'Ingrese su edad'} 
              onChange={setEdad} 
              value={edad} 
              typeInput={'numeric'}              
       />
      
        <Text style={styles.text}> 
         Hola {nombre}. Tienes {edad} años.
      </Text>
        
        
      </View>
 
      <View style={styles.container2}>
      <Text style={styles.text}>
        Ejercicio #2 - Contador con estados visuales</Text>
      
        {/* Valor del contador */}
        <Text style={styles.counterValue}>{contador}</Text>

        {/* Condición: contador negativo */}
        {contador < 0 && (
          <Text style={styles.warning}>No se recomienda valores negativos</Text>
        )}

        {/* Par / Impar + estilos */}
        <Text style={[styles.parText, esPar ? styles.par : styles.impar]}>
          {esPar ? "Número par" : "Número impar"}
        </Text>

        {/* Botones */}
        <View style={styles.row}>
          <CustomButton
            title="Sumar +1"
            onClick={() => setContador((c) => c + 1)}
            variant="primary"
          />
          <CustomButton
            title="Restar -1"
            onClick={() => setContador((c) => c - 1)}
            variant="secondary"
          />
        </View>
      </View>

      <View style={styles.container3}>
      <Text style={styles.text}>
        Ejercicio #3 - Toggle de visibilidad
      </Text>

      {/* Botón con texto usando ternario */}
      <CustomButton
      title={mostrarDetalles ? "Ocultar detalles" : "Mostrar detalles"}
      onClick={() => setMostrarDetalles(!mostrarDetalles)}
      variant="primary"
      />

      {/* Contenido condicionado */}
      {mostrarDetalles ? (
      <View style={styles.detallesBox}>
      <Text style={styles.detallesText}>
        Detalles del usuario...
      </Text>

      <Image
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
        style={styles.image}
        />
        </View>
        ) : (
        <Text style={styles.detallesOcultos}>
        Detalles ocultos
      </Text>
     )}

    </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#200553',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container1: {
    flex: 0.33,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container2: {
    flex: 0.33,
    backgroundColor: '#a3a3a3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container3: {
    flex: 0.33,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

text:{   /* Estilo de texto */
        color: "black" ,  /* Color del Texto blanco*/
        fontSize: 18 , /* Tamaño 18 */
        fontWeight:  "400" /* peso medio */
    },

//Estilos Ejercicio   2
counterValue: {
    color: "black",
    fontSize: 42,
    fontWeight: "700",
  },

  warning: {
    color: "#FFE082",
    fontSize: 16,
    fontWeight: "600",
  },

  parText: {
    fontSize: 20,
    fontWeight: "700",
  },

  par: { color: "#00B0FF" },    // azul
  impar: { color: "#B388FF" },  // morado

  row: {
    flexDirection: "row",
    gap: 12,
    marginTop: 6,
  },

  //Estilos Ejercicio 3
  
  detallesBox: {
  alignItems: "center",
  gap: 8,
  marginTop: 8,
  },

  detallesText: {
  color: "white",
  fontSize: 16,
  },

  detallesOcultos: {
  color: "#FFD54F",
  fontSize: 16,
  marginTop: 8,
  },

  image: {
  width: 80,
  height: 80,
  marginTop: 6,
  }
});
