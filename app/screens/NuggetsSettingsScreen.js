import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from "../components/Forms";
import * as Yup from "yup";

import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import colors from "../config/colors";
import PickerItem from "../components/PickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).label("Price"),
  catergory: Yup.string().required().nullable().label("Catergory"),
  description: Yup.string().label("Description"),
});

const wisdomPerDay = [
  {
    label: "1",
    value: 1,
    backgroundColor: colors.HabitBuilding,
    icon: "floor-lamp",
  },
  {
    label: "2",
    value: 2,
    backgroundColor: colors.HabitBuilding,
    icon: "floor-lamp",
  },
];

function NuggetsSettingsScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField placeholder="Title" name="title" maxLength={255} />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Price"
          keyboardType="numeric"
          name="price"
          width={120}
        />
        <AppFormPicker
          items={wisdomPerDay}
          name="category"
          placeholder="Category"
          width="50%"
          PickerItemComponent={PickerItem}
          //numberOfColumns={3}
        />
        <AppFormField
          placeholder="Description"
          name="description"
          maxLength={255}
          multiline
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default NuggetsSettingsScreen;
