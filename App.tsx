import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import ProductsListScreen from './src/features/products/presentation/products_list';

export default function App() {
  return (
    <View>
    <ProductsListScreen />
    </View>
  );
}

