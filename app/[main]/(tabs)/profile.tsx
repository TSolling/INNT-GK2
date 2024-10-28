
import { View, Text, Image, Pressable, ScrollView } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';


//This page should be in the AppQuery folder, and is only here for now due to easier routing while in demo. Will be moved when profile page is created.

export default function AppOverview() {

    const router = useRouter();

      // Sample data for good/bad
    const bulletpoints = [
      { title: 'You maintain ownership of your data', Desc: 'You have full control and ownership over your personal data.' , score: 1},
      { title: 'Your personal data is not sold', Desc: 'Your personal data is not sold to third parties for any purpose.' , score: 1},
      { title: 'This app may collect, use and share location data', Desc: 'The app may collect, use, and share your location data for certain features.' , score: 2},
      { title: 'Third-party cookies are used for advertising', Desc: 'Third-party cookies are used to personalize and improve advertising.' , score: 2},
      { title: 'Your private messages can be read', Desc: 'The app has access to read your private messages.' , score: 3},
      { title: 'You waive your moral right', Desc: 'By using the app, you waive your moral rights to the content you upload.' , score: 3},
      { title: 'Content uploaded may be edited by the app for any reason', Desc: 'The app reserves the right to edit or modify the content you upload.' , score: 3},
      { title: 'This app may collect, use and share location data', Desc: 'The app may collect, use, and share your location data for certain features.' , score: 2},
      { title: 'Third-party cookies are used for advertising', Desc: 'Third-party cookies are used to personalize and improve advertising.' , score: 2},
      { title: 'Your private messages can be read', Desc: 'The app has access to read your private messages.' , score: 3},
      { title: 'You waive your moral right', Desc: 'By using the app, you waive your moral rights to the content you upload.' , score: 3},
      { title: 'Content uploaded may be edited by the app for any reason fsdfsdfdsfsfsf', Desc: 'The app reserves the right to edit or modify the content you upload.' , score: 3},
    ];

//Delcare IconName type for TypeScript
type IconName = 'shield-off' | 'shield'; 
  
// Function to get icon and color based on score  
const getIconAndColor = (score: number) => { 
    if (score == 3) {
        return { icon: 'shield-off', color: 'red' };
    } else if (score == 2) {
        return { icon: 'shield', color: 'orange' };
    } else if (score == 1) {
        return { icon: 'shield', color: 'green' };
    }
};

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
                onPress={() => router.push('/appQuery/guide')}>
        <Text className="text-center text-white font-semibold">Guides</Text>
      </Pressable>
      </View>

    </View>
    
            {/* Good/Bad */}
            <ScrollView className='bg-white' contentContainerStyle={{ padding: 20 }}>
        {/* App List */}
        {bulletpoints.map((app, index) => {
        const { icon, color } = getIconAndColor(app.score) as { icon: IconName; color: string }; // Declare icon and color from getIconAndColor function.
        return (
            <Pressable key={index} className="flex-row items-center justify-between py-4 border-b border-gray-200">
                <View className="flex-row items-center">
                    <Feather className='px-2' name={icon as IconName} size={20} color={color} />
                <View>
                  <Text className="font-medium" numberOfLines={2} ellipsizeMode="tail">
                    {app.title}
                  </Text>
                  <Text className="text-gray-500 text-sm" numberOfLines={2} ellipsizeMode="tail">
                    {app.Desc}
                  </Text>
                </View>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>

        </View>
    );
}
