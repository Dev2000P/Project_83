import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";




export default class CreateStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewImage: "image_1",
      dropdownHeight: 40,
    };
  }


  render() {
  
      let preview_images = {
        image_1: require("../assets/image_1.jpg"),
        image_2: require("../assets/image_2.jpg"),
        image_3: require("../assets/image_3.jpg"),
        image_4: require("../assets/image_4.jpg"),
        image_5: require("../assets/image_5.jpg"),
        image_6: require("../assets/image_6.jpg"),
        image_7:require("../assets/image_7.jpg"),
      };
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>New Post</Text>
            </View>
          </View>
          <View style={styles.fieldsContainer}>
            <Image
              source={preview_images[this.state.previewImage]}
              style={styles.previewImage}
            ></Image> 
            <View style={{ height: RFValue(this.state.dropdownHeight) }}>
            <DropDownPicker
                items={[
                  { label1: "Image 1", value: "image_1" },
                  { label2: "Image 2", value: "image_2" },
                  { label3: "Image 3", value: "image_3" },
                  { label4: "Image 4", value: "image_4" },
                  { label5: "Image 5", value: "image_5" },
                  {label6:"Image 6",value:"image_6"},
                  {label7:"Image 7",value:"image_7"}
                ]}
                defaultValue={this.state.previewImage}
                open={this.state.dropdownHeight == 215 ? true : false}
                onOpen={() => {
                  this.setState({ dropdownHeight: 200 });
                }}
                onClose={() => {
                  this.setState({ dropdownHeight: 200 });
                }}
                style={{
                  backgroundColor: "transparent",
                  borderWidth: 1,
                  borderColor: "white",
                }}
                textStyle={{
                  color: this.state.dropdownHeight == 200 ? "black" : "white",
                  
                }}
                onSelectItem={(item) =>
                  this.setState({
                    previewImage: item.value,
                  })
                }
              />
            </View>
            <ScrollView>

              <TextInput
              style={[
                styles.inputFont,
                styles.inputFontExtra,
                styles.inputTextBig
              ]}
              onChangeText={caption=>this.setState({caption})}
              placeholder={"Caption"}
              multiLine={true}
              numberOfLines={4}
              placeholderTextColor="white"
              />

          </ScrollView>
          </View>
          <View style={{ flex: 0.08 }} />
        </View>
      );
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c",
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row",
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center",
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    
  },
  fieldsContainer: {
    flex: 0.85,
  },
  previewImage: {
    width: "93%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain",
  },
  inputFont: { height: RFValue(40), borderColor: "white", borderWidth: RFValue(1), borderRadius: RFValue(10), paddingLeft: RFValue(10), color: "white", marginTop: RFValue(10),}, inputFontExtra: { marginTop: RFValue(15), }, inputTextBig: { textAlignVertical: "top", padding: RFValue(5), },
});