import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Amplify, {Auth, API, graphqlOperation} from 'aws-amplify';
import config from './aws-exports';
// @ts-ignore
import { withAuthenticator } from "aws-amplify-react-native";
// @ts-ignore
import { getUser } from './graphql/queries';

Amplify.configure(config)

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  useEffect(() => {
    const updateUser = async () => {
      // get the current authenticated user
      // if it does not, create the user in the database

      // this get the authenticated user, and bypasscache does not use the cashed values, but always gets the new ones
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });

      if(userInfo) {
      // Check if the user already exists in the database
        // checks for the user by id, and then by the sub
      const userData = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub }))
      }
    }

    updateUser();

  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App);
