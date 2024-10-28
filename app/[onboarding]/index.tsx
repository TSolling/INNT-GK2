import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router, useRouter } from 'expo-router';
import { useWindowDimensions } from 'react-native';

import { Heading } from '@/components/ui/heading';
import { Button, ButtonText} from '@/components/ui/button';

export default function OnboardingScreen() {

  

    const { width, height } = useWindowDimensions(); // Get the screen dimensions

    return (

        <View style={{ flex: 1, backgroundColor: 'white' }}>
        {/* Image Container */}
        <View style={{ width: width, height: height * 0.5 }} className="bg-blue-100 items-center justify-center self-center">
          <Image
            source={{ uri: 'https://media.4-paws.org/d/2/5/f/d25ff020556e4b5eae747c55576f3b50886c0b90/cut%20cat%20serhio%2002-1813x1811-720x719.jpg' }}
            style={{ width: width, height: height * 0.5 }}
          />
        </View>
  
        
        <SafeAreaView className="flex-1 px-6 py-10">
          
          {/* Dots Indicator */}
          <View className="flex-row p-4 mb-4">
            <View className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <View className="w-2.5 h-2.5 rounded-full bg-gray-300" />
            <View className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          </View>
  
          {/* Header & Desc. */}
          <View className="items-center space-y-2">
          <Heading className="text-3xl text-center">Welcome to the app!</Heading>
            <Text className="text-gray-500 text-center">
              Dette er ikke en del af de 5 sider ifølge GK2 formalia.
            </Text>
            <Text className='text-gray-500 text-center font-bold pt-4'>Denne side skal ignoreres. :-)</Text>
          </View>
  
                {/* Button */}
          <View className='py-2'>
            <Pressable className="bg-blue-600 py-3 rounded-lg"
              onPress={() => router.push('/onboarding/selectApps')}>
              <Text className="text-center text-white font-semibold">Start</Text>
            </Pressable>
            </View>
              </SafeAreaView>
      </View>
    );
}