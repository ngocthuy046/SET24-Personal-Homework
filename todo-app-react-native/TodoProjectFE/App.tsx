import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import store from './__app__/redux/store'; // Đảm bảo rằng store đã được cấu hình đúng
import HomeScreen from './__app__/_screens/HomeScreen'; // Import HomeScreen từ thư mục _screens

import { Colors } from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  // Định nghĩa style nền dựa trên chế độ sáng/tối
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}> 
      <SafeAreaView style={[styles.safeAreaView, backgroundStyle]}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View style={[styles.mainView, { backgroundColor: isDarkMode ? Colors.black : Colors.white }]}>
          <HomeScreen />
        </View>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  mainView: {
    flex: 1,
  },
});

export default App;
