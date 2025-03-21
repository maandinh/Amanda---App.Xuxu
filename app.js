import React, { Component } from "react";
import { View, Text, Image, ScrollView, Button } from 'react-native';

class App extends Component {
  render() {
    return (
      <ScrollView style={{ padding: 10 }}>
      
      <Topo imagem={{ uri: 'https://i.pinimg.com/736x/4d/c7/e7/4dc7e7134cf48216dbece029a792c4a2.jpg' }}></Topo>

        <SaladaCaesar 
          imagem={{ uri: "https://i.pinimg.com/736x/23/f7/d6/23f7d6bd173fccf563760b1685485ce2.jpg" }}
          titulo="Salada Caesar"
        />
        <SaladaCaprese 
          imagem={{ uri: "https://i.pinimg.com/736x/7b/35/ec/7b35ecc474bb29cb25a7625e7a631fbc.jpg"}}
          titulo="Salada Caprese"
        />
        <SaladadeGrãos
          imagem={{ uri: }}
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
          style={{ width: '100%', height: 400, borderRadius: 20, marginTop: 0, overflow: 'hidden', }}
        />   
          <Text style={{ color: '#006400', fontSize: 50, marginBottom: 10, fontFamily: 'Ink Free',  padding: '15px', fontWeight: 'bold' }}>
          Saladas
        </Text>

        <Text style={{ fontSize: 20, color: '#4f2621', fontFamily: 'Ink Free' ,padding: '15px', fontWeight: 'bold' }}>
          Refrescantes, coloridas e cheias de sabor, as saladas são leves, crocantes e perfeitas para qualquer momento. Além de nutritivas, deixam a refeição mais equilibrada e deliciosa. Experimente com molhos naturais, queijos, castanhas e um toque de azeite!
        </Text> 

      </View>
    );
  }
}

class SaladaCaesar extends Component {
  render() {
    return (
      <View style={{ marginBottom: 20, padding: 1, borderRadius: 20, backgroundColor: '#ebd592', flexDirection: 'row', alignItems: 'center'  }}>
      <Image
          source={this.props.imagem}
          style={{ width: 150,  height: 150, borderRadius: 75,}}
        />
        <Text style={{ fontWeight: 'bold', fontSize: 40, fontFamily: 'Ink Free', padding: '15px' }}>
          {this.props.titulo}
        </Text>

      </View>
    )
  }
}

class SaladaCaprese extends Component {
  render() {
    return (
      <View style={{ marginBottom: 20, padding: 1, borderRadius: 20, backgroundColor: '#ebd592', flexDirection: 'row', alignItems: 'center' }}>
       <Text style={{ fontWeight: 'bold', fontSize: 40, fontFamily: 'Ink Free', padding: '15px'}}>
      {this.props.titulo}
    </Text>
    <Image
        source={this.props.imagem}
        style={{ width: 150, height: 150, borderRadius: 75}}
    />
   
      </View>
    )
  }
}

export default App;
