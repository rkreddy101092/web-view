import React, { Component } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <WebViewTest />
    </View>
  );
}

class WebViewTest extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://www.google.com/' }}
        style={{ marginTop: 50 }}
      />
    )
  }
}
