'use strict'

import React from 'react';
import { 
  NavigatorIOS,
  TabBarIOS,
  StatusBar,
  StyleSheet,
  Text, 
  View,
  FlatList,
} from 'react-native';

let contactList = [
  { name: 'Sérgio',   key: '960123421', favorite: true  },
  { name: 'Anacleto', key: '917209418', favorite: false },
  { name: 'Silvia',   key: '937902446', favorite: false },
  { name: 'Pedro',    key: '935728834', favorite: false },
  { name: 'Anabela',  key: '929452367', favorite: false },
  { name: 'Carlos',   key: '962372354', favorite: false },
  { name: 'Amélie',   key: '933001478', favorite: true  },
  { name: 'Elisa',    key: '919710387', favorite: false },
  { name: 'José',     key: '967190363', favorite: false },
];

class ContactRow extends React.Component {
  render () {
    let info = this.props.info;
    let onlyFavorites = this.props.onlyFavorites;

    if (onlyFavorites && (! info.favorite)) return null;

    return (
      <View style={styles.itemView}>
        <Text style={styles.itemName}>{info.name}</Text>
        <Text style={styles.itemKey}> {info.key.match(/\w{3}/g).join(' ')}</Text>
      </View>
    );
  }
}

class ContactList extends React.Component {
  render () {
    let onlyFavorites = (this.props.onlyFavorites || false);

    return (
      <View style={styles.pane}>
        <FlatList
          data = {contactList}

          renderItem = { ({item}) => <ContactRow info={item} onlyFavorites={ onlyFavorites } /> }
        />
      </View>
    );
  }
}

class ContactsScreen extends React.Component {
  render() {
    return ( <ContactList /> );
  }
}

class FavoritesScreen extends React.Component {
  render() {
    return ( <ContactList onlyFavorites={true} /> );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedTab: 'tabContacts'};
  }

  setTab(tabId) { this.setState({selectedTab: tabId}); }

  render() {

    return (
      <View style={{ flex : 1 }}>
        <StatusBar barStyle="dark-content" />
        <TabBarIOS>
          <TabBarIOS.Item 
            systemIcon="contacts"
            selected={this.state.selectedTab === 'tabContacts'}
            onPress={() => this.setTab('tabContacts')}
          >
            <NavigatorIOS translucent={false} style={{ flex : 1 }} initialRoute={{ title: 'Contacts', component: ContactsScreen }} />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            systemIcon="favorites"
            selected={this.state.selectedTab === 'tabFavorites'}
            onPress={() => this.setTab('tabFavorites')}
          >
            <NavigatorIOS translucent={false} style={{ flex : 1 }} initialRoute={{ title: 'Favorites', component: FavoritesScreen }} />
          </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pane: {
      flex: 1,
      padding: 0,
      backgroundColor: '#ddd',
  },
  itemView : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
    borderColor: '#ccc',
    borderBottomWidth: StyleSheet.hairlineWidth,
    backgroundColor: '#fff',
  },
  itemName : { fontWeight: 'bold', fontSize: 18, },
  itemKey :  { fontWeight: '100', fontSize: 12, paddingTop: 5, },
});

