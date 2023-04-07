import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import "./styles.css";
import { useMutation } from "react-query";
import axios from "axios";

// Define the API endpoint URL
const API_URL = "http://192.168.18.88:8000/api/login";

// Define the mutation function for making the API request
const loginUser = async ({ email, password }) => {
  try {
    const response = await axios.post(API_URL, { email, password });
    return response; // Assuming the token is returned in the response
  } catch (error) {
    throw new Error("Failed to login");
  }
};

// Define the mutation using useMutation hook
const useLoginMutation = () => {
  return useMutation(loginUser);
};

const Signin = () => {
  const loginMutation = useLoginMutation();
  const [token, setToken] = useState({})
  const handleLogin = async (values) => {
    try {
      const { email, password } = values;
      const response = await loginMutation.mutateAsync({ email, password });
      // The token is now available in the response variable
      console.log("Token:", response);
      if(response.success == 200){setToken(response)}
      console.log("Token:", token);

      // You can persist the token in your desired storage (e.g. localStorage) here
    } catch (error) {
    //   console.error(error);
    }
  };
  return (
    <div className="sign-up">
      <div className="container">
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleLogin}
        >
          {(formikProps) => (
            <Form>
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Field as={Input} type="email" name="email" id="email" />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Field
                  as={Input}
                  type="password"
                  name="password"
                  id="password"
                />
              </FormControl>
              <Button
                onClick={handleLogin}
                mt={4}
                colorScheme="blue"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          )}

        </Formik>
            <div>{token.status}</div>
      </div>

    </div>
  );
};

export default Signin;
