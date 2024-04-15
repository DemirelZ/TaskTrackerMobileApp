import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Add } from 'iconsax-react-native'

const FloatActionButton = (props) => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Add size="50" color="#FFFFFF"/>
    </TouchableOpacity>
  )
}

export default FloatActionButton

const styles = StyleSheet.create({
    container:{
        width:70,
        height:70,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ba68c8',
        position:'absolute',
        bottom:40,
        right:40
    }
})