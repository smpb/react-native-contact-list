'use strict'

import React from 'react';

import {
  Text,
  View,
  StatusBar,
  Platform,
} from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements'
import { TabNavigator } from 'react-navigation';

let contactList = [
  { name: 'Sérgio',   key: '150123421', favorite: true  },
  { name: 'Anacleto', key: '517209418', favorite: false },
  { name: 'Silvia',   key: '267902446', favorite: false },
  { name: 'Pedro',    key: '775728834', favorite: false },
  { name: 'Anabela',  key: '629452367', favorite: false },
  { name: 'Carlos',   key: '822372354', favorite: false },
  { name: 'Amélie',   key: '483001478', favorite: true  },
  { name: 'Elisa',    key: '119710387', favorite: false },
  { name: 'José',     key: '087190363', favorite: false },
];

const ACTIVE_TAB_COLOR = '#007aff';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

class ContactsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name='ios-contacts'
        type='ionicon'
        color={tintColor}
      />
    ),
  };

  render() {
    return (
      <List containerStyle={{marginBottom: 20}}>
        {
          contactList.map((l, i) => (
            <ListItem
              key={i}
              title={l.name}
              subtitle={l.key}
              leftIcon={{name: 'person'}}
            />
          ))
        }
      </List>
    );
  }
}

class FavoritesScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name='ios-star-outline'
        type='ionicon'
        color={tintColor}
      />
    ),
  };

  render() {
    return (
      <List containerStyle={{marginBottom: 20}}>
        {
          contactList.filter(l => l.favorite ).map((l, i) => (
            <ListItem
              key={i}
              title={l.name}
              subtitle={l.key}
              leftIcon={{name: 'person'}}
            />
          ))
        }
      </List>
    );
  }
}

const Nav = TabNavigator(
  {
    Contacts: {
      screen: ContactsScreen,
    },
    Favorites: {
      screen: FavoritesScreen,
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: ACTIVE_TAB_COLOR,
    },
  }
);

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex : 1, paddingTop: STATUSBAR_HEIGHT, }}>
        <StatusBar translucent={false} barStyle="dark-content" />
        <Nav />
      </View>
    );
  }
}
