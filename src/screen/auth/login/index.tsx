import {
  Text,
  Image,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { Constants } from "./constants";
import UserIcon from "@/assets/svg/register/userIcon.svg";
import MainButton from "@/component/button/mainButton";
import { AuthStackScreenProps } from "@/navigation/navigation_Models/auth_Models/authModels";
import TextInputField from "@/component/input/TextInput";
import TextButton from "@/component/button/textButton";
import { ErrorFlash } from "@/utlis/flashMessage";
import { isPassword, isString } from "@/utlis/validations";

const LogIn = ({ navigation }: AuthStackScreenProps<"LogInScreen">) => {
  const [form, setForm] = useState({
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
  });

  const handleLogIn = () => {
    if (isString(form.email)) {
      ErrorFlash(Constants.VALID_EMAIL);
    } else if (form.email === "") {
      ErrorFlash(Constants.EMAIL_REQUIRED);
      // else if (isPassword(form.password)) {
      //   ErrorFlash(Constants.VALID_PASS);
      // }
    } else if (form.password === "") {
      ErrorFlash(Constants.PASSWORD_REQUIRED);
    } else {
      navigation.navigate("AppBottomTopScreen");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >

      {/* Customize the StatusBar */}
      <StatusBar
        backgroundColor={'translucent'} // Set your background color
        barStyle="dark-content" // Light or dark content
        translucent
      />
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll_container}
      >
        <View style={styles.container}>
          {/* Add Image */}
          <Image
            style={styles.image}
            source={require("@/assets/image/onBoarding/image_copy.png")}
          />

          <View style={styles.data_container}>
            {/* white container */}
            <View style={styles.white_container}>
              {/* Add icon */}
              <View style={styles.icon_container}>
                {/* border Radius */}
                <View style={styles.icon_border_radius_container}>
                  <UserIcon />
                </View>
              </View>
              {/* title & subTitle Container */}
              <View style={styles.title_container}>
                {/* title */}
                <Text style={styles.title}>{Constants.TITLE}</Text>
                {/* sub title */}
                <Text style={styles.sub_title}>{Constants.SUB_TITLE}</Text>
              </View>

              <View style={styles.textInput_container}>
                {/* Email */}
                <TextInputField
                  placeholder={Constants.PLACEHOLDER_EMAIL}
                  value={form.email}
                  onChangeText={(text) => setForm({ ...form, email: text })}
                  onFocus={() => setForm({ ...form, emailError: "" })}
                  textError={form.emailError}
                  onBlur={() => {
                    if (form.email === "") {
                      setForm({
                        ...form,
                        emailError: Constants.EMAIL_REQUIRED,
                      });
                    } else {
                      setForm({ ...form, emailError: "" });
                    }
                  }}
                />

                {/* Password */}
                <TextInputField
                  placeholder={Constants.PLACEHOLDER_PASSWORD}
                  value={form.password}
                  onChangeText={(text) => setForm({ ...form, password: text })}
                  onFocus={() => setForm({ ...form, passwordError: "" })}
                  secureTextEntry
                  textError={form.passwordError}
                  onBlur={() => {
                    if (form.password === "") {
                      setForm({
                        ...form,
                        passwordError: Constants.PASSWORD_REQUIRED,
                      });
                    } else {
                      setForm({ ...form, passwordError: "" });
                    }
                  }}
                />
              </View>

              {/* Button */}
              <MainButton
                style={[styles.button_container]}
                title={Constants.BUTTON}
                onPress={handleLogIn}
              />

              {/* Don't have an account? Register */}
              <View style={styles.registerContainer}>
                <Text style={styles.registerText}>
                  {" "}
                  {Constants.HAVE_NOT_ACC}{" "}
                </Text>
                <TextButton
                  title={Constants.REGISTER_BUTTON_TITLE}
                  onPress={() => {
                    navigation.navigate("RegisterScreen");
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LogIn;
