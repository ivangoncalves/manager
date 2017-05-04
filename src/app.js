import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import firebase from 'firebase';

class App extends Component {
    componentWillMount() {
        var config = {
        apiKey: "AIzaSyB3RlzMLvd94To_6KFQFBNzdCkWgRz57Ck",
        authDomain: "manager-394d1.firebaseapp.com",
        databaseURL: "https://manager-394d1.firebaseio.com",
        projectId: "manager-394d1",
        storageBucket: "manager-394d1.appspot.com",
        messagingSenderId: "673856709873"
    };

    firebase.initializeApp(config);

    }
    
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View style={{ flex: 1 }}>
                    <Header headerText="Manager" />
                    <Text>
                        Manager app. 
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;
