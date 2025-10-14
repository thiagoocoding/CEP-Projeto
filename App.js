/** @format */

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput, 
} from "react-native";
import api from "./services/api";
import React, {useState} from "react";

function CEP() {

  const [cep, setCep] = useState(""); 
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [UF, setUF] = React.useState("");

  async function buscarCep(){
    if (cep == ""){
      alert("Digite um CEP valido");
      return;
    }

    try { 

      const response = await api.get(`/${cep}/json`);
      setLogradouro(response.data.logradouro);
      setBairro(response.data.bairro);
      setCidade(response.data.localidade);
      setUF(response.data.uf);

   }  catch (error) {
      alert("Ocorreu um erro ao buscar o CEP");
      return;
    }
}

  return (
    <View style={styles.container}>
      <Text style={styles.textCEP}>CEP</Text>

      <TextInput 
      style={styles.textInput}
      placeholder="Digite seu CEP"
      value={cep}
      onChangeText={(texto) => setCep(texto)}>
      </TextInput>

      <TouchableOpacity 
      style={styles.btnPesquisar}
      onPress={buscarCep}>
        <Text style={styles.textPesquisar}>Pesquisar</Text>
      </TouchableOpacity>

      <Text style={styles.textInfo}>Abaixo voce vera as informacoes do seu CEP</Text>

        <TextInput 
      style={styles.textInput}
      placeholder="Lagradouro"
      value={logradouro}
      onChangeText={(texto) => setLogradouro(texto)}
      editable={false}
      />
        <TextInput
      style={styles.textInput}
      placeholder="Bairro"
      value={bairro}
      onChangeText={(texto) => setBairro(texto)}
      editable={false}
      />
        <TextInput
      style={styles.textInput}
      value={cidade}
      onChangeText={(cidade) => setUF(texto)}
      placeholder="Cidade"
      editable={false}
      /> 

        <TextInput
      style={styles.textInput}
      value={UF}
      onChangeText={(texto) => setUF(texto)}
      placeholder="Estado"
      editable={false}
      />

      <Text style={styles.instagram}>desenvolvido para estudos @thiagocoding</Text>
      </View>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "top",
  },
  textCEP: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 50,
    backgroundColor: "#0dab71ff",
    width: "100%",
    textAlign: "center",
    lineHeight: 50,
  },
  btnPesquisar: {
    backgroundColor: "#0dab71ff",
    width: "90%",
    height: 40,
    marginTop: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
   textPesquisar: {
    color: "white",
    fontStyle: "italic",
    fonteSize: 20,
    fontWeight: "bold",
    lineHeight: 40,
  },
  textInput: {
    borderColor: "#0dab71ff",
    borderWidth: 1,
    width: "90%",
    marginTop: 20,
    height: 40,
    borderRadius: 5,
    paddingLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  textInfo: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    paddingTop: 20,
    color: "#0dab71ff",
  },

  
  instagram: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    paddingTop: 20,
    color: "#0dab71ff",
    fontFamily: "poppins",
    
  },


});  



export default CEP;
