import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from "../components/Screen";
import AppText from '../components/AppText/AppText';
import ErrorMessage from '../components/ErrorMessage';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {

    return (
        <Screen style={styles.container}>
            <Image 
                style={styles.logo}
                source={require("../assets/five-dice.png")} />
            <Formik
                initialValues={{ email: "", password: ""}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                    <>
                        <AppTextInput 
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            placeholder="Email"
                            keyboardTypre="email-address"
                            textContentType="emailAddress"
                            onChangeText={handleChange("email")}
                            onBlur={() => setFieldTouched("email")}
                        />
                        <ErrorMessage error={errors.email} visible={touched.email} />
                        <AppTextInput 
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            placeholder="Password"
                            textContentType="password"
                            secureTextEntry
                            onChangeText={handleChange("password")}
                            onBlur={() => setFieldTouched("password")}
                        />
                        <ErrorMessage error={errors.password} visible={touched.password} />
                        <AppButton 
                            title="Login"
                            onPress={handleSubmit}
                        />
                    </>
                ) }
            </Formik>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },
})

export default LoginScreen;