import { View, Text, ScrollView, Pressable } from 'react-native';
import { Button, ButtonText, ButtonIcon } from '@/components/ui/button';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Heading } from '@/components/ui/heading';
import { Divider } from '@/components/ui/divider';
import Feather from '@expo/vector-icons/Feather';

import getDeviceInfo from '@/libs/deviceInfo';


// Define a type for app names - Letting TypeScript know that these are the only possible values
type AppName = 'Facebook' | 'Instagram' | 'Whatsapp' | 'Reddit' | 'Google' | 'Gmail' | 'TikTok';

// Define the state type
type SelectedAppsState = {
  [key in AppName]: boolean;
};

export default function SelectApps() {
 
  const router = useRouter();

  getDeviceInfo(); // Call the function to get device info. Used later on the Home screen

  // Initialize state what apps are selected
  const [selectedApps, setSelectedApps] = useState<SelectedAppsState>({
    //No apps is selected by default
    Facebook: false,
    Instagram: false,
    Whatsapp: false,
    Reddit: false,
    Google: false,
    Gmail: false,
    TikTok: false,
  });

  // Toggle selection for each app
  const toggleApp = (app: AppName) => {
    setSelectedApps(prev => ({ ...prev, [app]: !prev[app] }));
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20, flexGrow: 1 }}>
      {/* Progress bar */}
      <View className='flex-row items-center mb-6'>
        <View className='h-1 flex-1 bg-blue-600 rounded-full'></View>
        <View className='h-1 flex-1 bg-gray-300 rounded-full'></View>
      </View>

      {/* Heading and subheading */}
      <Heading className="text-2xl font-semibold mb-2">Which apps do you use?</Heading>
      <Text className="text-gray-500 mb-6">Choose the main apps that you normally use. You can always add more later on.</Text>

      {/* App options */}
      {Object.keys(selectedApps).map((app) => (
        <Pressable
          key={app}
          onPress={() => toggleApp(app as AppName)} // When pressed, set the app as selected
          className={`  py-5 px-6 mb-4 rounded-lg border ${
            selectedApps[app as AppName] ? 'bg-blue-100 border-blue-100' : 'border-gray-300'
          } flex-row justify-between items-center`}
        >
          <Text>{app}</Text>
          {selectedApps[app as AppName] && <Text>✔️</Text>}
        </Pressable>
      ))}

      {/* Button - Next */}
      <View className='mt-6'>
      <Pressable className="bg-blue-600 py-3 rounded-lg"
              onPress={() => router.push('/main/home')}>
              <Text className="text-center text-white font-semibold">Next</Text>
            </Pressable>
      </View>
          {/* Devider */}
      <View className='mt-4'>
        <Divider className="my-1 h-[1px] bg-gray-300" />
      </View>
          {/* Button - Import all installed apps */}
      <View className='mt-2'>
        <Button
          size="lg"
          variant="link"
          action="secondary"
          onPress={() => setSelectedApps(Object.keys(selectedApps).reduce((acc, key) => ({ ...acc, [key as AppName]: true }), {} as SelectedAppsState))} //Select all apps 
        >
          <ButtonText className="font-medium text-sm text-typography-900">Import all installed apps</ButtonText>
          <Feather name="download-cloud" size={20} color="black" />
        </Button>
      </View>
    </ScrollView>
  );
}
