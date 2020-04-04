/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Button,
} from 'react-native';

export default class WaterCounter extends Component{
  constructor(props){
    super(props);
    this.state = {goal: 2000, now: 0, status: 'Ruim', percent: 0}

    this.sumWater = this.sumWater.bind(this);
    this.refresh = this.refresh.bind(this);
    this.restart = this.restart.bind(this);
  }
  sumWater(){
    let s = this.state;
    s.now += 200;
    this.setState(s);

    this.refresh()
  }

  restart(){
    let s = this.state;
    s.now = 0;
    s.percent = 0;
    s.status = 'Ruim';
    this.setState(s);
  }

  refresh(){
    let s = this.state;
    s.percent = Math.floor(((s.now/2000)*100));

    if(s.percent >= 100){
      s.status = 'Ótimo';
    } else if(s.percent >= 75){
      s.status ='Bom';
    } else if(s.percent >= 50){
      s.status ='Regular';
    }
    this.setState(s);
  }

  render(){
    return (
      <View style={styles.body}>
        <ImageBackground source={require('./images/waterbg.png')} style={styles.bgimage}>
          <View>
        <View style={styles.infoArea}>

          <View style={styles.area}>
            <Text style={styles.titleArea}>Meta</Text>
            <Text style={styles.dataArea}>{this.state.goal}ml</Text>
          </View>
          <View style={styles.area}>
            <Text style={styles.titleArea}>Consumido</Text>
            <Text style={styles.dataArea}>{this.state.now}ml</Text>
          </View>
          <View style={styles.area}>
            <Text style={styles.titleArea}>Status</Text>
            <Text style={styles.dataArea}>{this.state.status}</Text>
          </View>

          </View>

            <View style={styles.percentArea}>
              <Text style={styles.percentText}>{this.state.percent}%</Text>
            </View>
            <View style={styles.btnArea}>
              <View style={styles.btnArea1}>
                <Button style={styles.sumButton} title="Beber 200ml" onPress={this.sumWater}/>
              </View>
              <View style={styles.btnArea2}>
                <Button style={styles.restartButton} title="Zerar contador" onPress={this.restart}/>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      
      
    )
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 20
  },
  bgimage: {
    flex: 1,
    width: null
  },
  infoArea: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 70
  },
  area: {
    flex: 1,
    alignItems: 'center'
  },
  titleArea: {
    color: '#45b2fc',
    fontSize: 18
  },
  dataArea: {
    color: '#2b4274',
    fontSize: 15,
    fontWeight: 'bold'
  }, 
  percentArea:{
    marginTop: 170,
    alignItems: 'center'
  },
  percentText:{
    fontSize: 105,
    color: 'white',
    backgroundColor: 'transparent'
  }, 
  btnArea:{
    flexDirection: 'row',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnArea1: {
    marginRight: 8
    
  },
  btnArea2: {
    marginLeft: 8
  },
})