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
import MobileSelectCustomBox from "@/component/input/customCheckBox";
import TextButton from "@/component/button/textButton";
import { ErrorFlash, SuccessFlash } from "@/utlis/flashMessage";
import { isString } from "@/utlis/validations";

const Register = ({ navigation }: AuthStackScreenProps<"RegisterScreen">) => {
  const [form, setForm] = useState({
    firstName: '',
    firstNameError: '',
    lastName: '',
    lastNameError: '',
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
  });

  const [isChecked, setIsChecked] = useState(false); // Track if checkbox is checked

  const handleLogIn = () => {
    if ((form.firstName = '')) {
      ErrorFlash(Constants.FIRST_NAME_REQUIRED);
    } else if (form.lastName === "") {
      ErrorFlash(Constants.LAST_NAME_REQUIRED);
    } else if (form.email === "") {
      ErrorFlash(Constants.VALID_EMAIL);
    } else if (form.password == '') {
      ErrorFlash(Constants.VALID_PASS);
    } else {
      SuccessFlash(Constants.REGISTER_SUCCESS);
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
          {/* Image Container*/}
          {/* Add Image */}
          <Image
            style={styles.image}
            source={require("@/assets/image/onBoarding/onBoard_Image.webp")}
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
                {/* First Name */}
                <TextInputField
                  placeholder={Constants.FIRST_NAME}
                  value={form.firstName}
                  onChangeText={(text) => setForm({ ...form, firstName: text })}
                  onFocus={() => setForm({ ...form, firstNameError: "" })}
                  textError={form.firstNameError}
                  onBlur={() => {
                    if (form.firstName === "") {
                      setForm({
                        ...form,
                        firstName: Constants.FIRST_NAME_REQUIRED,
                      });
                    } else {
                      setForm({ ...form, firstNameError: "" });
                    }
                  }}
                />
                {/* Last Name */}
                <TextInputField
                  placeholder={Constants.LAST_NAME}
                  value={form.lastName}
                  onChangeText={(text) => setForm({ ...form, lastName: text })}
                  onFocus={() => setForm({ ...form, lastNameError: "" })}
                  textError={form.lastNameError}
                  onBlur={() => {
                    if (form.lastName === "") {
                      setForm({
                        ...form,
                        lastNameError: Constants.LAST_NAME_REQUIRED,
                      });
                    } else {
                      setForm({ ...form, lastNameError: "" });
                    }
                  }}
                />
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

              {/* check Terms Conditions */}
              <View style={styles.term_and_condition_container}>
                {/* Select Custom Box */}
                <MobileSelectCustomBox
                  isChecked={isChecked}
                  setIsChecked={setIsChecked}
                />
                {/* Text */}
                <Text style={styles.terms_and_condition_tex}>
                  {Constants.ACCEPT_TEAM_AND_CONDITIONS}
                </Text>
              </View>

              {/* Button */}
              <MainButton
                style={[styles.button_container]}
                title={Constants.BUTTON}
                onPress={handleLogIn}
                disabled={!isChecked} // Disable the button if checkbox is not checked
              />

              <View style={styles.alreadyAccContainer}>
                <Text style={styles.alreadyAccText}>
                  {Constants.ALREADY_HAVE_TITLE}
                </Text>
                <TextButton
                  textStyle={styles.textButtonStyle}
                  title={Constants.LOGIN_BUTTON_TITLE}
                  onPress={() => {
                    navigation.navigate("LogInScreen");
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

export default Register;
