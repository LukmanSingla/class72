import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import * as Permissions from "expo-permissions";
import Camera from "expo-camera";
import db from "../config";
import * as firebase from "firebase";

export default class TransactionScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      hasCameraPermissions: null,
      scanned: false,
      btnState: "normal",
      studentId: "",
      bookId: "",
    };
  }
  getPermissions = async (btnState) => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    // Alalert(status);
    this.setState({
      hasCameraPermissions: status === "granted",
      btnState: btnState,
    });
  };
  handleBarCodeScanned = async ({ type, data }) => {
    if (this.state.btnState == "studentId") {
      this.setState({
        studentId: data,
        btnState: "normal",
        scanned: true,
      });
    } else if (this.state.btnState == "bookId") {
      this.setState({
        bookId: data,
        btnState: "normal",
        scanned: true,
      });
    }
  };
  render() {
    if (this.state.btnState != "normal" && this.state.hasCameraPermissions) {
      return (
        <View>
          <BarCodeScanner
            onBarCodeScanned={
              this.state.scanned ? undefined : this.handleBarCodeScanned
            }
            style={{ height: 600 }}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <ImageBackground
            source={require("../assets/background2.png")}
            style={styles.bg}
          >
            <View style={styles.upperContainer}>
              <Image
                source={require("../assets/appName.png")}
                style={styles.appName}
              />
              <Image
                source={require("../assets/appIcon.png")}
                style={styles.appIcon}
              />
            </View>
            <View style={styles.lowerContainer}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter the student id"
                  placeholderTextColor="white"
                  value={this.state.studentId}
                ></TextInput>

                <TouchableOpacity
                  style={styles.ScanBtn}
                  onPress={() => {
                    this.getPermissions("studentId");
                  }}
                >
                  <Text style={styles.btnText}>Scan QR code</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter the book id"
                  placeholderTextColor="white"
                  value={this.state.bookId}
                ></TextInput>

                <TouchableOpacity
                  style={styles.ScanBtn}
                  onPress={() => {
                    this.getPermissions("bookId");
                  }}
                >
                  <Text style={styles.btnText}>Scan QR code</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  ScanBtn: {
    backgroundColor: "red",
    alignSelf: "center",
    padding: 10,
    borderRadius: 10,
  },
  btnText: { color: "white" },
  textInput: {
    borderWidth: 1,
    width: "50%",
    height: 40,
    padding: 10,
    marginRight: 20,
    borderColor: "white",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  lowerContainer: {
    flex: 0.5,
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
  },
  upperContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  appName: { resizeMode: "contain", width: 150, height: 90 },
  appIcon: { resizeMode: "contain", width: 200, height: 200 },
});
