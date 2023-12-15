import { Platform, StyleSheet, Text, View } from 'react-native';
import  * as ExpoWidgetsModule from "@bittingz/expo-widgets/src/index"

export default function App() {
  // ExpoWidgetsModule.setWidgetData({ message: 'Hello from app!' })
  ExpoWidgetsModule.setWidgetData('Hello from app! dsfs')

  return (
    <View style={styles.container}>
      <Text>Example App!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
