import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react'
import { StyleSheet, Button, TextInput, Text, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('')
  const [limits, setLimits] = useState('')

  const calculate = () => {
    const upper = (220 - parseInt(age)) * 0.85
    const lower = (220 - parseInt(age)) * 0.65
    if(age){
      setLimits(lower.toFixed(0) + "-" + upper.toFixed(0))
    } else {
      setLimits('')
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.field}>Age</Text>
      <TextInput
        style={styles.field}
        placeholder='Your age...'
        value={age}
        onChangeText={text => setAge(text)}
        keyboardType='decimal-pad'
      />
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>{limits}</Text>
      <Button style={styles.field} title="CALCULATE"onPress={calculate}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginLeft: 16,
    marginRight: 16
  },
  field: {
    marginBottom: 8
  }
});
