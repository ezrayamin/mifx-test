import { View, Text, Pressable } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function Header() {
  return (
    <View className='flex flex-row justify-between align-middle px-4 py-2'>
      <View className='w-1/3 flex flex-row justify-between items-center'>
        <Pressable className='w-8 h-8 rounded-2xl flex items-center justify-center bg-white'>
          <FontAwesome5
            size={16}
            name='arrow-left'
          />
        </Pressable>
        <Text className='text-xl font-semibold'>
          Products
        </Text>
      </View>
      <View>
        <Pressable className='w-8 h-8 rounded-2xl flex items-center justify-center bg-white'>
          <MaterialIcons
            name='tune'
            size={20}
          />
        </Pressable>
      </View>
    </View>
  )
}