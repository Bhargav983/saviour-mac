import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import LoginScreen from './src/screens/loginscreen/LoginScreen'
import HomeScreen from './src/screens/HomeScreen/HomeScreen/HomeScreen';
import LiveStatus from './src/screens/HomeScreen/LiveStatus/LiveStatus';
import DailyBreakup from './src/screens/HomeScreen/DailyBreakup/DailyBreakup';
import PastDetails from './src/screens/HomeScreen/PastDetails/PastDetails';
import TopNavBar from './src/screens/Navbar/TopNavBar';
import DashboardExplanation from './src/screens/HomeScreen/DotsMenu/DashboardExplanation/DashboardExplanation';
import DiagnosticInfo from './src/screens/HomeScreen/DotsMenu/DiagnosticInfo/DiagnosticInfo';
import LedBlinking from './src/screens/HomeScreen/DotsMenu/LedBlinking/LedBlinking';
import About from './src/screens/HomeScreen/DotsMenu/About/About';
import Profile from './src/screens/HomeScreen/DotsMenu/Profile/Profile';
import { DeviceProvider } from './src/context/DeviceContext';
import { EllipsisOptionsProvider } from './src/context/EllipsisContext';
import { OptionsProvider } from './src/context/OptionsContext';
import { UserProvider } from './src/context/userContext';
import Consumption from './src/screens/HomeScreen/Consumption/Consumption';
import Level from './src/screens/HomeScreen/Level/Level';
const Stack = createStackNavigator();

const App = () => {
  return (
    <UserProvider>
    <OptionsProvider>
    <EllipsisOptionsProvider>
    <DeviceProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="LiveStatus" component={LiveStatus} />
        <Stack.Screen name="DailyBreakup" component={DailyBreakup} />
        <Stack.Screen name="PastDetails" component={PastDetails} />
        <Stack.Screen name="Consumption" component={Consumption} />
        <Stack.Screen name="Level" component={Level} />
        <Stack.Screen name="TopNavBar" component={TopNavBar}/>
        <Stack.Screen name="Dashboard Explanation" component={DashboardExplanation} options={{ headerShown: false }} />
        <Stack.Screen name="Diagnostic Info" component={DiagnosticInfo} options={{ headerShown: false }}/>
        <Stack.Screen name="Led Blinking" component={LedBlinking} options={{ headerShown: false }}/>
        <Stack.Screen name="About" component={About}/>
        <Stack.Screen name="Profile" component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>

    </DeviceProvider>
    </EllipsisOptionsProvider>
    </OptionsProvider>
    </UserProvider>
  );
};

export default App;
