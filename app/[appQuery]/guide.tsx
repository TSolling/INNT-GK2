
import { View, Text, Image, Pressable, ScrollView } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';


//This page will be combined with the app overview page later using react-native-gesture-handler, so it will be displayed by swiping left/right.
//This is just a temporary page for now to show the design of the page. When it gets implented the navbar will also be back.

//Will be implemented later when logic for backend is implemented :-)


export default function AppGuide() {

  const router = useRouter();

  const guide = [
    { title: 'Remove ad preferences', time: '3 min.' },
    { title: 'Disable location tracking', time: '2 min.' },
    { title: 'Review app permissions', time: '5 min.' },
    { title: 'Enable two-factor authentication', time: '4 min.' },
    { title: 'Clear app cache', time: '1 min.' },
    { title: 'Manage privacy settings', time: '3 min.' },
    { title: 'Control video autoplay', time: '2 min.' },
    { title: 'Set up screen time limits', time: '4 min.' },
  ];



    return (
        <View className='bg-white'> 

        {/* App Main info */}
        <View className="bg-white p-4">
      {/* Profile Picture and Info in Row */}
      <View className="flex-row items-center mb-4">
        <Image
          source={{ uri: 'https://static.vecteezy.com/system/resources/previews/023/986/939/non_2x/tiktok-logo-tiktok-logo-transparent-tiktok-icon-transparent-free-free-png.png' }} // Replace with actual image URL
          className="w-20 h-20 rounded-full mr-4"
        />
        <View>
          <Text className="text-lg font-bold">TikTok</Text>
          <Text className="text-gray-500">Entertainment</Text>
        </View>
      </View>

      
      {/* Stats Section with Dividers */}
      <View className="flex-row justify-around py-2 px-2 ">
        <View className="items-center">
          <Text className="font-semibold">3.8</Text>
          <Text className="text-gray-500 text-sm">Rating</Text>
        </View>
        <View className="border-l border-gray-200 mx-2" />
        <View className="items-center">
          <Text className="font-semibold">12</Text>
          <Text className="text-gray-500 text-sm">Notes</Text>
        </View>
        <View className="border-l border-gray-200 mx-2" />
        <View className="items-center">
          <Text className="font-semibold">8</Text>
          <Text className="text-gray-500 text-sm">Guides</Text>
        </View>
      </View>

        {/* Button */}
        <View className='py-2'>
      <Pressable className="bg-blue-600 py-3 rounded-lg"
      onPress={() => router.push('/tabs/profile')}>
        <Text className="text-center text-white font-semibold">Overview</Text>
      </Pressable>
      </View>

    </View>
    
            {/* Guides */}
            <ScrollView className='bg-white' contentContainerStyle={{ padding: 20 }}>

            {guide.map((data, index) => (
              <Pressable key={index} className="flex-row items-center justify-between py-4 border-b border-gray-200">
                <View className="flex-row items-center">
                  <View>
                    <Text className="font-medium">{data.title}</Text>
                    <View className="flex-row items-center">
                      <Feather className=' pr-2' name="clock" size={12} color="gray" />
                      <Text className="text-gray-500 text-sm">{data.time}</Text>
                    </View>
                  </View>
                </View>
                
                <Feather name="chevron-right" size={20} color="gray" />
              </Pressable>
            ))}
            </ScrollView>

        </View>
    );
}
