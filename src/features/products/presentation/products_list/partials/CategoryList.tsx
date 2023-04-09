import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Category from '../../../models/category_model'

export default function CategoryList({ categories }: { categories: Category[] }) {
  return (
    <ScrollView className='px-4'
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {
        categories.map(category => {
          return (
            <View
              key={category.id}
              className='bg-white mr-4 p-3 rounded-md'
            >
              <Text>{category.name}</Text>
            </View>
          )
        })
      }
    </ScrollView>
  )
}