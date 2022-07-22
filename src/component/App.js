

import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import Card from './Card/Card';
 const App=()=>{

{
  }
  return(
    <View style={styles.ccontainer}>
     <Card title="Eddard Stark" text="Winter is coming"/>
     <Card title="Arif Işık" text="Uzaylılar tarafından kaçırıldım"/>
     <Card title="Serbest" text="İlhami abi sen söyle"/>
    </View>
    )
}
const styles=StyleSheet.create(//Sitillendirmeyi buradan yapabiliriz.
  {
    ccontainer:{
      flex:1,
      backgroundColor:'#e0e0e0'
    }
  }
)
export default App;//Projemizi dışarı böyle çıkarıyoruz 