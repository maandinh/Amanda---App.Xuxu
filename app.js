import React, { Component } from "react";
import { View, Text, Image, ScrollView, Button } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: ''
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar(nome) {
    this.setState({
      nome: nome
    });
  }

  render() {
    return (
      <ScrollView style={{ padding: 10 }}>
      
      <Topo imagem={{ uri: 'https://i.pinimg.com/736x/4d/c7/e7/4dc7e7134cf48216dbece029a792c4a2.jpg' }}></Topo>
        <Salada 
          imagem={{ uri: "https://i.pinimg.com/736x/1b/a2/b6/1ba2b6271f63c759ad6f38d5d9fc13e7.jpg" }}
          titulo="Salada Waldorf"
          receita={`
            1/4 de xícara de chá de iogurte natural, 
            1/4 de xícara de chá de maionese, 
            suco de 1 limão, sal e pimenta-do-reino a gosto, 
            1 cacho de uva sem semente cortadas ao meio, 
            1 talo de salsão picado, 
            2 maçãs verdes ou vermelhas em cubos, 
            1/2 xícara de chá de nozes tostadas, 
            folhas de alface a gosto.
          `}
        />
        
        <Salada      
          imagem={{ uri: 'https://i.pinimg.com/736x/30/13/32/301332bbc7fb314466873f3d5b34e546.jpg' }}
          titulo="Salada César"
          receita={`
            1 pé de alface romana, 
            1/2 xícara de queijo parmesão ralado, 
            1 xícara de croutons, 
            Molho César a gosto, 
            1 peito de frango grelhado e fatiado.
          `}
        /> 

        <Button
          title="Entrar"
          onPress={() => this.entrar('Seja bem-vindo à aplicação')}
        />
        <Text style={{ fontSize: 30, color: 'red', textAlign: 'center' }}>
          {this.state.nome}
        </Text>
      </ScrollView>
    );
  }
}

class Topo extends Component {
  render() {
    return (
      <View style={{ marginBottom: 20, padding: 5, borderRadius: 20, backgroundColor: '#f0f0f0'  }}>
      
         <Image
          source={this.props.imagem}
          style={{ width: '80%', height: 400, borderRadius: 20, marginTop: 40, overflow: 'hidden', transform: [{ rotate: '90deg' }]  }}
        />   
          <Text style={{ color: '#006400', fontSize: 40, marginBottom: 10, fontFamily: 'Emblema One' }}>
          Saladas
        </Text> 
      </View>
    );
  }
}

class Salada extends Component {
  render() {
    return (
      <View style={{ marginBottom: 20, padding: 10, borderRadius: 20 }}>
        <Image
          source={this.props.imagem}
          style={{ width: 300, height: 200, borderRadius: 20 }}
        />
        <Text style={{ fontWeight: 'bold', fontSize: 18, fontFamily: 'Emblema One' }}>
          {this.props.titulo}
        </Text>
        <Text style={{ marginVertical: 2, fontSize: 15, fontFamily: 'Emblema One' }}>
          {this.props.receita}
        </Text>
      </View>
    );
  }
}

export default App;
