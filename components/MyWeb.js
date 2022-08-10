import React, {useRef, useEffect, useState} from 'react';

import {WebView} from 'react-native-webview';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const CustomHeaderWebView = props => {
  const {uri, onLoadStart, ...restProps} = props;
  const [currentURI, setURI] = useState(props.source.uri);
  const newSource = {...props.source, uri: currentURI};

  return (
    <WebView
      {...restProps}
      source={newSource}
      onShouldStartLoadWithRequest={request => {
        // If we're loading the current URI, allow it to load
        if (request.url === currentURI) return true;
        // We're loading a new URL -- change state first
        setURI(request.url);
        return false;
      }}
    />
  );
};

function MyWeb() {
  return (
    <SafeAreaView style={styles.webViewContainer}>
      <CustomHeaderWebView
        source={{
          uri: 'https://boostservices-dev.boostbusiness.my/bpt/dashboard',
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsid2ViX3BvcnRhbEBFaFFLQ0UxbGNtTm9ZVzUwRUttUnhvT20wTnp1RmhJUUNnUlZjMlZ5RVA2ZjVQbWswTnp1RmciXSwiZXhwIjoxNjYyNjI4MDAzLCJpYXQiOjE2NjAwMzYwMDMsImlzcyI6Imh0dHA6Ly9vYXV0aC1nYXRld2F5IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UTVQV3c4N0ctNklRWCIsIm5iZiI6MTY2MDAzNjAwMywic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVLbVJ4b09tME56dUZoSVFDZ1JWYzJWeUVQNmY1UG1rME56dUZnIn0.euSah0FLEb7j9av4nJ7jdMz8-xo7dJaHsfk0sbPBbb0b1myffLz56iTEKutId1CPi-lkgf0WxklepZ1DMUe40pvjZhRd-jit6DcnOUdmnslYK3uoeds7HF85hoIgytuszevBolL93YkFKJf2l6H_vy3LPlNebn_qKlrGkDK7Wroy6tJFRRhVdtRCJ9j71RswNNE1e_gLTQiUVkQ4cqY1JW6QAD9UcDRZa-MZS83yE12x-JSXdwxK4BcWkOSWa2zwursKhMJbb799ag_KBSVsJ-1_qcuVoPjldLRFA1ZAuVCwEMWSA-Sl7Pdt-3dQw1vccGMv35vqJexU1FTKf-EjRw',
          },
        }}
        // source={{uri: 'http://192.168.91.137:3000'}}
        // source={{uri: 'https://dantri.com.vn/'}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  webViewContainer: {flex: 1},
  header: {
    height: 56,
    backgroundColor: 'white',
  },
});

export default MyWeb;
