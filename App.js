import React , {Component} from 'react'
import {StyleSheet , FlatList , View , Text, Dimensions, ActivityIndicator,Linking, Image , TouchableWithoutFeedback} from 'react-native'
const {height ,width} =   Dimensions.get('window')

export default class App extends Component {
state = {
  news : [],
  loading : true
}

fetchnews = () => {
  fetch('http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9ab3b6d0db604bb59953268557b99aff')
  .then((res)=>res.json())
  .then((response)=>{
    this.setState({
      news : response.articles,
       loading : false
      })
    })
}

componentDidMount(){
  this.fetchnews (

  )
}


render(){
  if (this.state.loading){
  return(
    <View style={{flex:1 ,alignItems :'center' ,justifyContent : 'center' , backgroundColor : 'white'}}>
   <ActivityIndicator size =  "small" color = "yellow"/>
    </View>
  );
  }
  else{
    return(
    <View style = {styles.container}>
    <View style = {styles.HeadingTitle}>
    <Text style ={styles.Heading}>Top Headline</Text>
    </View>
    <View style = {styles.news}>
    <FlatList 
    data = {this.state.news}
    renderItem={({item}) => {
      return(
        <TouchableWithoutFeedback onPress ={() => Linking.openURL(item.url)}>
        <View style = {{width : width - 50 , height : 200 , backgroundColor : 'red' , marginBottom : 15 , borderRadius : 15 }}>
          <Image source = {{uri : item.urlToImage }} style = {[StyleSheet.absoluteFill , {borderRadius : 15}]} />
          <View style = {styles.gradient}>
          <Text style = {{position : 'absolute' , bottom : 0 , color : 'black',padding : 5 , backgroundColor : 'white',fontSize : 20 }}>{item.title}</Text>
          </View>
          </View> 
          </TouchableWithoutFeedback>
      );
    }}
     /> 
    </View>
    </View>
    );
  }
}
}

const styles = StyleSheet.create ({
  container : {
    flex : 1,
    backgroundColor : '#d3d3d3',
  },
  Heading : {
    fontSize : 28 ,
    color : 'black',
    fontWeight : '700',
    marginTop : 40
  },
  HeadingTitle : {
    padding : 15 ,
  },
  news :{
    alignItems : 'center'
  },
  gradient : {
    width : "100%",
    height : '100%'
  }

})
