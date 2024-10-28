import { Client, Databases } from 'react-native-appwrite';

const client = new Client();

//API keys, please don't joink :C
const endpoint = 'https://cloud.appwrite.io/v1';
const projectId = '66f96ac1000331ce7421';
const platform = 'Innt.Privacy';
const databaseId = '66f96c5900355a8952cd';
const tableId = '66f96cc7000104d4fa22';


// Set the client's endpoint, project, and platform
client
    .setEndpoint(endpoint || '') 
    .setProject(projectId || '') 
    .setPlatform(platform || '') 

const databases = new Databases(client);

// Function to get all apps lsited in the database table. Gets executed in the Home screen
export const getAllApps = async () => {
    try {
        const app = await databases.listDocuments(
            databaseId || '',
            tableId || ''); 
        return app.documents;
    }
    catch (error) {
        console.error(error);
    }
}