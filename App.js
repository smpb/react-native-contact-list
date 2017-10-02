'use strict'

import React from 'react';

import {
  Text,
  View,
  ScrollView,
  StatusBar,
  Platform,
} from 'react-native';
import { Header, List, ListItem, Icon } from 'react-native-elements'
import { TabNavigator } from 'react-navigation';

let contactList = [
  { name: 'Sérgio',   key: '150123421', favorite: true  },
  { name: 'Anacleto', key: '517209418', favorite: false },
  { name: 'Silvia',   key: '267902446', favorite: false },
  { name: 'Pedro',    key: '775728834', favorite: false },
  { name: 'Anabela',  key: '629452367', favorite: false },
  { name: 'Carlos',   key: '822372354', favorite: false },
  { name: 'Amélie',   key: '483001478', favorite: true  },
  { name: 'Elias',    key: '893465482', favorite: false },
  { name: 'Duarte',   key: '907476232', favorite: false },
  { name: 'Isabel',   key: '782534741', favorite: false },
  { name: 'Elisa',    key: '119710387', favorite: false },
  { name: 'José',     key: '087190363', favorite: false },
  { name: 'Madalena', key: '279727203', favorite: false },
];

const ACTIVE_TAB_COLOR = '#007aff';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

var _sort = (a, b) => { return (a.name > b.name) ? 1 : ((a.name < b.name) ? -1 : 0); };

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
      <ScrollView>
        <Header
          centerComponent={{ text: 'CONTACTS', style: { fontWeight: 'bold', color: '#000' } }}
          backgroundColor='#fff'
        />
        <List containerStyle={{marginTop: 70}}>
          {
            contactList.sort(_sort).map((l, i) => (
              <ListItem
                key={i}
                title={l.name}
                subtitle={l.key}
                leftIcon={{name: 'person'}}
              />
            ))
          }
        </List>
      </ScrollView>
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
      <ScrollView>
        <Header
          centerComponent={{ text: 'FAVORITES', style: { fontWeight: 'bold', color: '#000' } }}
          backgroundColor='#fff'
        />
        <List containerStyle={{marginTop: 70}}>
          {
            contactList.sort().filter(l => l.favorite).map((l, i) => (
              <ListItem
                key={i}
                title={l.name}
                subtitle={l.key}
                leftIcon={{name: 'person'}}
              />
            ))
          }
        </List>
      </ScrollView>
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
      <View style={{ flex : 1 }}>
        <Nav />
      </View>
    );
  }
}

