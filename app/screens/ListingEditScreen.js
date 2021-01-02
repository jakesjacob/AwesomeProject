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

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).label("Price"),
  catergory: Yup.string().required().nullable().label("Catergory"),
  description: Yup.string().label("Description"),
});

const category = [
  { label: "Furniture", value: 1 },
  { label: "Wood", value: 2 },
  { label: "Bricks", value: 3 },
  { label: "Labour", value: 4 },
];

function ListingEditScreen(props) {
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
        />
        <AppFormPicker
          items={category}
          name="category"
          placeholder="Category"
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

export default ListingEditScreen;
