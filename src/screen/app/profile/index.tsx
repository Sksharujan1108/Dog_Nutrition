import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import HomeBackTitleHeader from "@/component/backTitleHeader";
import { styles } from "./styles";
import MainButton from "@/component/button/mainButton";
import { ProfileStackScreenProps } from "@/navigation/navigation_Models/app_Models/profile/profile_Models";
import TextInputField from "@/component/input/TextInput";
import { Constants } from "./constants";
import ProfileImagePicker from "@/component/profileImagePicker";
import { SuccessFlash } from "@/utlis/flashMessage";
import EditButton from "@/component/button/editButton";

const Profile = ({ navigation }: ProfileStackScreenProps<"ProfileScreen">) => {
  const [form, setForm] = useState({
    name: "",
    nameError: "",
    phoneNumber: "",
    phoneNumberError: "",
    age: "",
    ageError: "",
    address: "",
    addressError: "",
  });

  const [isEdit, setIsEdit] = useState(false);
  const [isSaved, setIsSaved] = useState(false); // New state to track if form is saved


  // Function to handle the "Edit" action
  const handleEdit = () => {
    setIsEdit(true);
    setIsSaved(false); // Reset saved state when entering edit mode
  };

  // Function to handle the "Save" action with validation
  const handleSave = () => {
    let isValid = true;

    // Validate Name
    if (form.name === "") {
      setForm((prevForm) => ({
        ...prevForm,
        nameError: Constants.NAME_REQUIRED,
      }));
      isValid = false;
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        nameError: "",
      }));
    }

    // Validate Phone Number
    if (form.phoneNumber === "") {
      setForm((prevForm) => ({
        ...prevForm,
        phoneNumberError: Constants.PHONE_NUMBER_REQUIRED,
      }));
      isValid = false;
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        phoneNumberError: "",
      }));
    }

    // Validate Age
    if (form.age === "") {
      setForm((prevForm) => ({
        ...prevForm,
        ageError: Constants.AGE_REQUIRED,
      }));
      isValid = false;
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        ageError: "",
      }));
    }

    // Validate Address
    if (form.address === "") {
      setForm((prevForm) => ({
        ...prevForm,
        addressError: Constants.ADDRESS_REQUIRED,
      }));
      isValid = false;
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        addressError: "",
      }));
    }

    // If all fields are valid, save and exit edit mode
    if (isValid) {
      setIsEdit(false);
      setIsSaved(true); // Set saved state to true
      console.log("Form saved successfully:", form);
      SuccessFlash('Saved successfully')
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <HomeBackTitleHeader
        title={"Profile"}
        onPressBack={() => {
          navigation.goBack();
        }}
        onPressCart={() => {
          navigation.navigate("CartScreenStack", {
            name: "CartScreen",
          });
        }}
      />
      <View style={styles.main_container}>
        <ScrollView
          contentContainerStyle={styles.scroll_view_container}
          showsVerticalScrollIndicator={false}
        >
          {/* Image Picker */}
          <ProfileImagePicker />

          {/* Text Input */}
          <View style={styles.text_input_container}>
            {/* Name */}
            <Text style={styles.text_title}> {"FULL NAME"} </Text>
            <TextInputField
              inputContainer={styles.input_container}
              placeholder={Constants.PLACEHOLDER_NAME}
              editable={isEdit}
              value={form.name}
              onChangeText={(text) => setForm({ ...form, name: text })}
              onFocus={() => setForm({ ...form, nameError: "" })}
              textError={form.nameError}
              onBlur={() => {
                if (form.name === "") {
                  setForm({ ...form, nameError: Constants.NAME_REQUIRED });
                } else {
                  setForm({ ...form, nameError: "" });
                }
              }}
            />

            {/* Phone Number */}
            <Text style={styles.text_title}> {"MOBILE NUMBER"} </Text>
            <TextInputField
              inputContainer={styles.input_container}
              placeholder={Constants.PLACEHOLDER_PHONE_NUMBER}
              editable={isEdit}
              value={form.phoneNumber}
              onChangeText={(text) => setForm({ ...form, phoneNumber: text })}
              onFocus={() => setForm({ ...form, phoneNumberError: "" })}
              textError={form.phoneNumberError}
              onBlur={() => {
                if (form.phoneNumber === "") {
                  setForm({
                    ...form,
                    phoneNumberError: Constants.PHONE_NUMBER_REQUIRED,
                  });
                } else {
                  setForm({ ...form, phoneNumberError: "" });
                }
              }}
            />

             {/* Age */}
             <Text style={styles.text_title}> {"AGE"} </Text>
            <TextInputField
              inputContainer={styles.input_container}
              placeholder={Constants.PLACEHOLDER_AGE}
              editable={isEdit}
              value={form.age}
              onChangeText={(text) => setForm({ ...form, age: text })}
              onFocus={() => setForm({ ...form, ageError: "" })}
              textError={form.ageError}
              onBlur={() => {
                if (form.age === "") {
                  setForm({
                    ...form,
                    ageError: Constants.AGE_REQUIRED,
                  });
                } else {
                  setForm({ ...form, ageError: "" });
                }
              }}
            />

            {/* Address */}
            <Text style={styles.text_title}> {"ADDRESS"} </Text>
            <TextInputField
              inputContainer={styles.address_text_input_container}
              placeholder={Constants.PLACEHOLDER_ADDRESS}
              editable={isEdit}
              value={form.address}
              onChangeText={(text) => setForm({ ...form, address: text })}
              multiline={true}
              onFocus={() => setForm({ ...form, addressError: "" })}
              textError={form.addressError}
              onBlur={() => {
                if (form.phoneNumber === "") {
                  setForm({
                    ...form,
                    addressError: Constants.ADDRESS_REQUIRED,
                  });
                } else {
                  setForm({ ...form, addressError: "" });
                }
              }}
            />
          </View>
          {/* Button */}
          {isEdit ? (
            <MainButton
              style={styles.save_button_style}
              title={Constants.SAVE}
              onPress={handleSave}
            />
          ) : (
            <EditButton
              title={Constants.EDIT}
              onPress={handleEdit}
            />
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default Profile;
