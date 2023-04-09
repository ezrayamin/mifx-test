import { View, SafeAreaView, ActivityIndicator, Text } from 'react-native'
import React from 'react'
import Header from './partials/ProductsHeader'
import CategoryList from './partials/CategoryList'
import ProductsList from './partials/ProductsList'
import useProductsList from './utils/useProductsList'

export default function ProductsListScreen() {
  const {
    products,
    categories,
    isLoading,
    isError,
    errorMessage
  } = useProductsList()
  return (
    <SafeAreaView className='bg-slate-100 h-full'>
      <Header />
      <CategoryList
        categories={categories}
      />
      {
        isLoading ?
          <View className='flex justify-center items-center h-5/6'>
            <ActivityIndicator size="large" />
          </View>
          :
          isError ?
            <View className='justify-center items-center h-5/6'>
              <Text className='text-lg'>{errorMessage}</Text>
            </View> :
            <ProductsList
              products={products}
            />
      }
    </SafeAreaView>
  )
}