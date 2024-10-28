import React from 'react';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

import "../global.css";

//Demo entry point for now
export default function App() {
    return (
        <View className='flex-1 items-center justify-center'>
            <Text className='text-3xl text-center'>Hello world!</Text>
            <Link href='/onboarding' className='text-blue-500 underline'>Go to welcome screen</Link>
        </View>
    );
}
