import React, { Component } from "react";
import { View, Text, Image, ScrollView, Button, TouchableOpacity,} from 'react-native';

class App extends Component {
  //Estrutura do Botão
  constructor(props){
    super(props);
    this.state = {
      nome1: '',
      nome2: '',
      nome3: '',
      nome4: '',
      nome5: ''
    };
  }
  
  //Estrutura Interna do Botão
  entrar1 = () => {
    this.setState({ nome1: 'Seja bem vindo à aplicação!' });
  }

  entrar2 = () => {
    this.setState({ nome2: 'Seja bem vindo à aplicação!' });
  }

  entrar3 = () => {
    this.setState({ nome3: 'Seja bem vindo à aplicação!' });
  }

  entrar4 = () => {
    this.setState({ nome4: 'Seja bem vindo à aplicação!' });
  }

  entrar5 = () => {
    this.setState({ nome5: 'Seja bem vindo à aplicação!' });
  }
  render() {
    return (
      <ScrollView style={{ padding: 10 }}>
      
      <Topo imagem={{ uri: 'https://i.pinimg.com/736x/4d/c7/e7/4dc7e7134cf48216dbece029a792c4a2.jpg' }} ></Topo>

        <SaladaCaesar 
          imagem={{ uri: "https://i.pinimg.com/736x/23/f7/d6/23f7d6bd173fccf563760b1685485ce2.jpg" }}
          titulo="Salada Caesar"
          entrar={this.entrar1} nome1={this.state.nome1}
        />
        <SaladaCaprese 
          imagem={{ uri: "https://i.pinimg.com/736x/7b/35/ec/7b35ecc474bb29cb25a7625e7a631fbc.jpg"}}
          titulo="Salada Caprese"
          entrar={this.entrar2} nome2={this.state.nome2}
        />
        <SaladaTropical
          imagem={{ uri: 'https://i.pinimg.com/736x/5a/0c/28/5a0c28c09130eaef6ea62fd87be79126.jpg' }}
          titulo="Salada Tropical"
          entrar={this.entrar3} nome3={this.state.nome3}
          />
        <SaladadeBatata
          imagem={{ uri: 'https://i.pinimg.com/736x/a3/2a/cc/a32acc5bffce7f6d637a2e3679cfb726.jpg'}}
          titulo="Salada de Batata"
          entrar={this.entrar4} nome4={this.state.nome4}
        />
        <SaladaCamarao
          imagem={{ uri: 'https://i.pinimg.com/736x/48/00/df/4800df78ae209d12b3f8ef6d84ee1ea2.jpg'}}
          titulo="Salada de Camarão com Abacate"
          entrar={this.entrar5} nome5={this.state.nome5}
        />

      </ScrollView>
    );
  }
}

class Topo extends Component {
  render() {
    return (
      <View style={{ marginBottom: 20, padding: 1, borderRadius: 20, backgroundColor: '#a6b985'  }}>
      
         <Image
          source={this.props.imagem}
          style={{ width: '100%', height: 400, borderRadius: 20, marginTop: 0, overflow: 'hidden',}}
        />   
          <Text style={{ color: '#006400', fontSize: 50, marginBottom: 0, fontFamily: 'Ink Free',  padding: '15px', fontWeight: 'bold' }}>
          Saladas
        </Text>

        <Text style={{ fontSize: 20, color: '#4f2621', fontFamily: 'Ink Free' ,padding: '8px', fontWeight: 'bold' }}>
          Refrescantes, coloridas e cheias de sabor, as saladas são leves, crocantes e perfeitas para qualquer momento. Além de nutritivas, deixam a refeição mais equilibrada e deliciosa. Experimente com molhos naturais, queijos, castanhas e um toque de azeite!
        </Text> 

      </View>
    );
  }
}

class SaladaCaesar extends Component {
  render() {
    return (
      <View style={{ marginBottom: 20, padding: 1, borderRadius: 20, backgroundColor: '#ebd592',  flexDirection:  'column', 
      alignItems: 'center'}}>

      <Image
          source={this.props.imagem}
          style={{ width: 150,  height: 150, borderRadius: 75,}}
        />

      <Text style={{ fontWeight: 'bold', fontSize: 40, fontFamily: 'Ink Free', padding: '15px',  }}>
          {this.props.titulo}
        </Text> 

        <Button 
          title="Vamos preparar? 🥗" onPress={this.props.entrar} />
       <Text style={{fontSize: 30, color: 'red', textAlign:'center'}}>
        {this.props.nome1}  
        </Text> 

      </View>
    )
  }
}

class SaladaCaprese extends Component {
  render() {
    return (
      <View style={{ marginBottom: 20, padding: 1, borderRadius: 20, backgroundColor: '#ebd592', flexDirection: 'column', 
      alignItems: 'center' }}>
    
    <Image
        source={this.props.imagem}
        style={{ width: 150, height: 150, borderRadius: 75}}
    />

      <Text style={{ fontWeight: 'bold', fontSize: 40, fontFamily: 'Ink Free', padding: '15px'}}>
      {this.props.titulo}
    </Text>

        <Button
        title="Vamos preparar? 🥗" onPress={this.props.entrar}/>

       <Text style={{fontSize: 30, color: 'red', textAlign:'center'}}>
        {this.props.nome2}  
        </Text>  
      </View>
    )
  }
}

class SaladaTropical extends Component {
  render() {
    return (
      <View style={{ marginBottom: 20, padding: 1, borderRadius: 20, backgroundColor: '#ebd592', flexDirection: 'column', 
      alignItems: 'center' }}>
      
    <Image
        source={this.props.imagem}
        style={{ width: 150, height: 150, borderRadius: 75}}
    />

    <Text style={{ fontWeight: 'bold', fontSize: 40, fontFamily: 'Ink Free', padding: '15px'}}>
      {this.props.titulo}
    </Text>

        <Button
       title="Vamos preparar? 🥗" onPress={this.props.entrar}/>
        <Text style={{fontSize: 30, color: 'red', textAlign:'center'}}>
        {this.props.nome3}  
        </Text> 
      </View>
    )
  }
}

class SaladadeBatata extends Component {
  render() {
    return (
      <View style={{ marginBottom: 20, padding: 1, borderRadius: 20, backgroundColor: '#ebd592', flexDirection: 'column', 
      alignItems: 'center',  }}>
        
     
    <Image
        source={this.props.imagem}
        style={{ width: 150, height: 150, borderRadius: 75}}
    />

     <Text style={{ fontWeight: 'bold', fontSize: 40, fontFamily: 'Ink Free', padding: '15px',}}>
      {this.props.titulo}
    </Text>

        <Button
      title="Vamos preparar? 🥗" onPress={this.props.entrar}/>
        <Text style={{fontSize: 30, color: 'red', textAlign:'center'}}>
        {this.props.nome4}  
        </Text> 
      </View>
    )
  }
}

class SaladaCamarao extends Component {
  render() {
    return (
      <View style={{ marginBottom: 20, padding: 1, borderRadius: 20, backgroundColor: '#ebd592', flexDirection: 'column', 
      alignItems: 'center' }}>
      
    <Image
        source={this.props.imagem}
        style={{ width: 150, height: 150, borderRadius: 75}}
    />

    <Text style={{ fontWeight: 'bold', fontSize: 40, fontFamily: 'Ink Free', padding: '15px'}}>
      {this.props.titulo}
    </Text>

        {/* Usando apenas o TouchableOpacity */}
        <TouchableOpacity
          onPress={this.props.entrar}
          style={{ 
            backgroundColor: '#9f8241', paddingVertical: 12, paddingHorizontal: 25, borderRadius: 20, marginTop: 10 }}>


          <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold',  fontFamily: 'Ink Free', textAlign: 'center' }}>
            Vamos preparar? 🥗
          </Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 30, color: 'red', textAlign: 'center' }}>
          {this.props.nome5}  
        </Text> 
      </View>
    )
  }
}

export default App;
