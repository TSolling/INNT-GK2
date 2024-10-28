import { View, Text, ScrollView, TextInput, Pressable, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import React, { useEffect, useState } from 'react';
import { getAllApps } from '@/libs/appwrite';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define the Document type of the app table in the Appwrite database
interface Document {
  $id: string;
  AppName: string;
  Category: string;
  Icon: string;
  Rating: number; 
}

export default function Home() {

  //set search query state
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

   //Fetch device data from AsyncStorage
    const [version, setVersion] = useState<string | null>(null);
    const [brand, setBrand] = useState<string | null>(null);
    const [model, setModel] = useState<string | null>(null);
    const [OS, setOS] = useState<string | null>(null);

    const fetchDeviceData = async () => {
      try {
        const version = await AsyncStorage.getItem('OS Version');
        const brand = await AsyncStorage.getItem('Phone Brand');
        const model = await AsyncStorage.getItem('Phone Model');
        const OS = await AsyncStorage.getItem('OS');

        setVersion(version);
        setBrand(brand);
        setModel(model);
        setOS(OS);
      } catch (error) {
        console.error(error);
      }
    };

    // Call the fetchDeviceData &  function
    useEffect(() => {
      fetchDeviceData();
    }, []);


  return (

     <View className=' bg-white'>
    
      {/* Welcome Message - Static for now */}
      <View className='pt-4 px-4'>
      <View className="flex-row items-center bg-green-100 rounded-lg p-4 mb-6">
        <Feather name="check-circle" size={30} color="black" />
        <View className="ml-3">
          <Text className="font-semibold">You're all good!</Text>
          <Text className="text-gray-600">There is nothing for you to do.</Text>
        </View>
      </View>

      {/* My Device */}
      <View>
        <Text className="text-xl font-semibold mb-2">My Device</Text>
        <View className="flex-row items-center  py-1 ">
          <Feather name="smartphone" size={18} color="gray" />
          <Text className="ml-2 text-base">{brand} {model}</Text>
        </View>
        <View className="flex-row items-center py-1 mb-2">
          <Feather name="code" size={18} color="gray" />
          <Text className="ml-2 text-base">Android {version}</Text>
        </View>
        <View className="flex-row items-center mb-2">
          <Feather name="map-pin" size={18} color="gray" />
          <Text className="ml-2 font-semibold text-green-500 text-base">No app is currently tracking your geo-location</Text>
        </View>

      
      </View>
    
      <Text className="text-xl font-semibold mb-4">My Apps</Text>

      {/* Search Bar */}
      <View className="flex-row items-center bg-gray-100 rounded-lg px-4 py-3 mb-4">
        <Feather name="search" size={18} color="gray" />
        <TextInput
          className="ml-2 flex-1 text-base"
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery} //When the user types in the search bar, the search query state is updated
          placeholderTextColor="#9CA3AF"
          />
      </View>
      </View>

      {/* App List */}
      <ScrollView className=' bg-white' contentContainerStyle={{ padding: 20 }}>
      {filteredApps.map((app, index) => ( // Maps all the apps that match the search query
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

