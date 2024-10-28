
import * as Device from 'expo-device';
import AsyncStorage from '@react-native-async-storage/async-storage';


// Function to get relevant device info and store it in AsyncStorage
const getDeviceInfo = async () => {
    try {
        //declares variables
        const version = Device.osVersion ?? '';
        const OS = Device.osName ?? '';
        const brand = Device.brand ?? '';
        const model = Device.modelName ?? '';
        
        //stores the variables in AsyncStorage
        await AsyncStorage.setItem('OS Version', version);
        await AsyncStorage.setItem('Phone Brand', brand);
        await AsyncStorage.setItem('Phone Model', model);
        await AsyncStorage.setItem('OS', OS);
    } catch (error) {
        console.error('Error getting device info:', error);
    }
};

export default getDeviceInfo;
