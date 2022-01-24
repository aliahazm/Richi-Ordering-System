import * as React from "react";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, SafeAreaView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { TouchableWithoutFeedback } from "react-native-web";

export default function Map() {
  const { pin, setPin } = React.useState({
    latitude: 3.1276306667385088,
    longitude: 101.59564717471058,
  });

  return (
    <View style={{ marginTop: 0, flex: 1 }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        GooglePlacesSearchQuery={{
          rankby: "distance",
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: "AIzaSyD7A-E6FDKKIHMZkytIGIHXGN6Ct7hYPlo",
          language: "en",
          radius: 3000,
        }}
        styles={{
          container: {
            flex: 0,
            position: "absolute",
            width: "100%",
            zIndex: 1,
          },
          listView: { backgroundColor: "white" },
        }}
      />

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 3.1276306667385088,
          longitude: 101.59564717471058,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        //provider = "google"
      >
        <Marker
          coordinate={{ latitude: 3.1890222, longitude: 101.7695761 }}
          pinColor="red"
        >
          <Callout>
            <Text>Richiamo Bukit Antarabangsa</Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: 3.131330353809242,
            longitude: 101.4689368683749,
          }}
          pinColor="red"
        >
          <Callout>
            <Text>Richiamo Setia Alam</Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: 3.106647732504003,
            longitude: 101.53966135621228,
          }}
          pinColor="red"
        >
          <Callout>
            <Text>Richiamo Shah Alam</Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: 2.9473267789318935,
            longitude: 101.7912482997462,
          }}
          pinColor="red"
        >
          <Callout>
            <Text>Richiamo Bandar Sri Putra</Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: 3.035097647021528,
            longitude: 101.61272047249929,
          }}
          pinColor="red"
        >
          <Callout>
            <Text>Richiamo Puchong Utama</Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: 3.19964864968824,
            longitude: 101.58800123488047,
          }}
          pinColor="red"
        >
          <Callout>
            <Text>Richiamo Kota Damansara</Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: 3.16674051901527,
            longitude: 101.5852546644177,
          }}
          pinColor="red"
        >
          <Callout>
            <Text>Richiamo Kelana Jaya</Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: 3.295624623035178,
            longitude: 101.74455640646624,
          }}
          pinColor="red"
        >
          <Callout>
            <Text>Richiamo IIUM</Text>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: 2.920796695859591,
            longitude: 101.63640776729993,
          }}
          pinColor="red"
        >
          <Callout>
            <Text>Richiamo Cyberjaya</Text>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
