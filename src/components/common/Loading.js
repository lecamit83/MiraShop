import React from 'react';
import { View, ActivityIndicator, Modal, StyleSheet, Dimensions } from 'react-native';

const Loading = ({ size, loading }) => {
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {console.log('close modal')}}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            size={size}
            animating={true} />
        </View>
      </View>
    </Modal>
  );
};

const {height,  width} = Dimensions.get('window');

const styles = StyleSheet.create({
  modalBackground: {
    flex : 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040'
  },
  activityIndicatorWrapper: {
    backgroundColor: '#EBEBEB',
    height: 180,
    width: width * 0.8,
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export { Loading };