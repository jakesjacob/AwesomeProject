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

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).label("Price"),
  catergory: Yup.string().required().nullable().label("Catergory"),
  description: Yup.string().label("Description"),
});

const category = [
  {
    label: "Habit Building",
    value: 1,
    backgroundColor: colors.HabitBuilding,
    icon: "floor-lamp",
  },
  {
    label: "Personal Finance",
    value: 2,
    backgroundColor: colors.PersonalFinance,
    icon: "cash-100",
  },
  {
    label: "Mindfulness",
    value: 3,
    backgroundColor: colors.Mindfulness,
    icon: "brain",
  },
  {
    label: "Soft Skills",
    value: 4,
    backgroundColor: colors.SoftSkills,
    icon: "account-multiple",
  },
  {
    label: "Hard Skills",
    value: 5,
    backgroundColor: colors.HardSkills,
    icon: "book-open-page-variant",
  },
  {
    label: "Literacy",
    value: 6,
    backgroundColor: colors.Literacy,
    icon: "script-text-outline",
  },
  {
    label: "Life Philosphy",
    value: 7,
    backgroundColor: colors.LifePhilosphy,
    icon: "thought-bubble-outline",
  },
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
          width={120}
        />
        <AppFormPicker
          items={category}
          name="category"
          placeholder="Category"
          width="50%"
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
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
