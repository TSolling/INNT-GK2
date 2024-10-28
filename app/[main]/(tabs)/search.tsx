import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TextInput, Pressable, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { Heading } from '@/components/ui/heading';
import { getAllApps } from '@/libs/appwrite';

// Define the Document type of the app table in the Appwrite database
interface Document {
  $id: string;
  AppName: string;
  Category: string;
  Icon: string;
  Rating: number; 
}
export default function App() {

    const [searchQuery, setSearchQuery] = useState('');

  //set apps state
  const [apps, setApps] = useState<Document[]>([]);


// Get data about apps from Appwrite Database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllApps(); //Fetch all apps in the table
        setApps(response as unknown as Document[]); //set the output the document object defined above
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Filter apps based on search query based on app name - This make the searchbar functional
  const filteredApps = apps ? apps.filter(app => //gets all apps from the setApps state.
    app.AppName.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];

    return (
        <View className='bg-white'>

        <Heading className='text-xl font-semibold pt-2 px-4'>All Apps</Heading>

        {/* Search Bar */}
        <View className='pt-4 px-4'>
            <View className="flex-row items-center bg-gray-100 rounded-lg px-4 py-3 mb-4">
            <Feather name="search" size={18} color="gray" />
            <TextInput
                className="ml-2 flex-1 text-base"
                placeholder="Search"
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholderTextColor="#9CA3AF"
                />
            </View>
        </View>

        <ScrollView className=' bg-white' contentContainerStyle={{ padding: 20 }}>
      {/* App List */}
      {filteredApps.map((app, index) => (
        <Pressable key={index} className="flex-row items-center justify-between py-4 border-b border-gray-200">
          <View className="flex-row items-center">
          <Image
              source={{ uri: app.Icon }}
              style={{ width: 32, height: 32, borderRadius: 16, marginRight: 8, resizeMode: 'fit' }}
            />
            <View>
              <Text className="font-medium">{app.AppName}</Text>
              <Text className="text-gray-500 text-sm">{app.Category}</Text>
            </View>
          </View>
          
        <Feather name="chevron-right" size={20} color="gray" />
        </Pressable>
      ))}
    </ScrollView>
        </View>
    );
}
