import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const NewPlaceScreen = (props) => {
  return (
    <View>
      <Text>NewPlaceScreen</Text>
    </View>
  );
};

NewPlaceScreen.navigationOptions = {
  headerTitle: 'Add Places',
};

const styles = StyleSheet.create({

});

export default NewPlaceScreen;