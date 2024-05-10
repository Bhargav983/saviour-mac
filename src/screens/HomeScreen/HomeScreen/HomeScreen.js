import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import RIcon from 'react-native-remix-icon';
import styles from './HomeStyles';
import TopNavBar from '../../Navbar/TopNavBar';
import LiveStatus from '../LiveStatus/LiveStatus';
import DailyBreakup from '../DailyBreakup/DailyBreakup';
import Consumption from '../Consumption/Consumption';
import Level from '../Level/Level';
import PastDetails from '../PastDetails/PastDetails';
import { useOptionsContext } from '../../../context/OptionsContext';
import { useEllipsisOptions } from '../../../context/EllipsisContext';
import { useUser } from '../../../context/userContext';
import { useDeviceContext } from '../../../context/DeviceContext';

const BottomNavbar = ({ navigation }) => {
  const { selectedDevice } = useDeviceContext();

  const [activeTab, setActiveTab] = useState('LiveStatus');
  const { hideOptions } = useOptionsContext();
  const { hideEllipsisOptions } = useEllipsisOptions();
  const { user } = useUser();

  useEffect(() => {
    if (!user.email || !user.phone) {
      navigation.navigate('LoginScreen');
    }
  }, [user, navigation]);

  // Log the selected device to the console
  console.log('Home Screen Selected Device:', selectedDevice.plan_type);

  useEffect(() => {
    if (selectedDevice.plan_type === 0) {
      setActiveTab('LiveStatus');
    } else if (selectedDevice.plan_type === 1) {
      setActiveTab('LiveStatus');
    }
  }, [selectedDevice.plan_type]);
  

  const navigateToScreen = (screenName) => {
    setActiveTab(screenName);
    hideOptions();
    hideEllipsisOptions();
  };

  return (
    <>
      <TopNavBar email={user.email} phone={user.phone} />
      {selectedDevice.plan_type === 0 && (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigateToScreen('LiveStatus')}
          >
            <RIcon
              name="ri-global-line"
              size={28}
              color={activeTab === 'LiveStatus' ? 'white' : 'black'}
            />
            <Text
              style={[
                styles.label,
                activeTab === 'LiveStatus' && { color: 'white' },
              ]}
            >
              LIVE STATUS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigateToScreen('DailyBreakup')}
          >
            <RIcon
              name="ri-time-line"
              size={28}
              color={activeTab === 'DailyBreakup' ? 'white' : 'black'}
            />
            <Text
              style={[
                styles.label,
                activeTab === 'DailyBreakup' && { color: 'white' },
              ]}
            >
              DAILY BREAKUP
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigateToScreen('PastDetails')}
          >
            <RIcon
              name="ri-bar-chart-fill"
              size={28}
              color={activeTab === 'PastDetails' ? 'white' : 'black'}
            />
            <Text
              style={[
                styles.label,
                activeTab === 'PastDetails' && { color: 'white' },
              ]}
            >
              PAST DETAILS
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {selectedDevice.plan_type === 1 && (
        <View style={styles.container2}>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigateToScreen('LiveStatus')}
          >
            <RIcon
              name="ri-global-line"
              size={28}
              color={activeTab === 'LiveStatus' ? 'white' : 'black'}
            />
            <Text
              style={[
                styles.label,
                activeTab === 'LiveStatus' && { color: 'white' },
              ]}
            >
              LIVE
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigateToScreen('Consumption')}
          >
            <RIcon
              name="ri-time-line"
              size={28}
              color={activeTab === 'Consumption' ? 'white' : 'black'}
            />
            <Text
              style={[
                styles.label,
                activeTab === 'Consumption' && { color: 'white' },
              ]}
            >
             CONSUMPTION
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigateToScreen('Level')}
          >
            <RIcon
              name="ri-bar-chart-fill"
              size={28}
              color={activeTab === 'Level' ? 'white' : 'black'}
            />
            <Text
              style={[
                styles.label,
                activeTab === 'Level' && { color: 'white' },
              ]}
            >
              LEVEL
            </Text>
          </TouchableOpacity>
        </View>
      )}

{selectedDevice.plan_type === 0 && (
  <>
    {activeTab === 'LiveStatus' && <LiveStatus />}
    {activeTab === 'DailyBreakup' && <DailyBreakup />}
    {activeTab === 'PastDetails' && <PastDetails />}
  </>
)}

{selectedDevice.plan_type === 1 && (
  <>
    {activeTab === 'LiveStatus' && <LiveStatus />}
    {activeTab === 'Consumption' && <Consumption />}
    {activeTab === 'Level' && <Level />}
  </>
)}

    </>
  );
};

export default BottomNavbar;
