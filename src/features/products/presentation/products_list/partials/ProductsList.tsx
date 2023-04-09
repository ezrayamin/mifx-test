import { View, Text, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import Product from '../../../models/product_model'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Rating } from 'react-native-ratings'

export default function ProductsList({ products }: { products: Product[] }) {
    return (
        <FlatList
            className='py-2 px-8'
            numColumns={2}
            data={products}
            keyExtractor={item => item.id}
            renderItem={product => {

                const ProductLabel = () => {
                    if (product.item.new) {
                        return <Text>New</Text>
                    }
                    if (product.item.out_of_stock) {
                        return <View className='bg-red-500 self-start p-1 rounded'><Text className='text-white text-center'>out of Stock</Text></View>
                    }
                    return <View />
                }

                return (
                    <View className='flex justify-center p-2 bg-white rounded-md m-2 w-40'>
                        <View
                            className='w-full h-20 justify-center items-center relative'
                        >
                            <View className='absolute top-0 flex flex-row justify-between items-center w-full'>
                                <ProductLabel />
                                <Pressable className='w-8 h-8 rounded-2xl flex items-center justify-center bg-white'>
                                    <FontAwesome5
                                        size={12}
                                        name='heart'
                                    />
                                </Pressable>
                            </View>
                            <Image
                                className='w-20 h-14 object-contain mt-7'
                                source={{ uri: product.item.image }}
                            />
                        </View>
                        <View className='items-start mt-2'>
                            <Rating
                                readonly
                                startingValue={product.item.rating}
                                imageSize={15}
                            />
                        </View>
                        <Text className='text-gray-600 mt-2'>{product.item.name}</Text>
                        <View className='flex flex-row justify-between items-center mt-1'>
                            <Text className='font-semibold'>{product.item.price}</Text>
                            <Text className='text-gray-600'>{product.item.off}</Text>
                        </View>
                    </View>
                )
            }}
        />
    )
}