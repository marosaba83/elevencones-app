import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputText from "../components/form/InputText";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
});

const FormikForm = () => (
  //   <div>
  //     <h1>Signup</h1>
  //     <Formik
  //       initialValues={{
  //         name: "",
  //         email: ""
  //       }}
  //       validationSchema={SignupSchema}
  //       onSubmit={values => {
  //         console.log(values);
  //       }}
  //     >
  //       {({ errors, touched }) => (
  //         <Form>
  //           <Field name="name" component={TextInput} />
  //           <ErrorMessage name="name" />
  //           <Field name="email" type="email" />
  //           <ErrorMessage name="email" />
  //           <button type="submit">Submit</button>
  //         </Form>
  //       )}
  //     </Formik>
  //   </div>

  <Formik
    initialValues={{ email: "", password: "" }}
    validate={values => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      setSubmitting(true);
      console.log(values);
      //Make API calls here

      setTimeout(() => {
        setSubmitting(false);
        alert(`Submitted Successfully ->  ${JSON.stringify(values, null, 2)}`);
      }, 2000);
    }}
    render={({ submitForm, isSubmitting, values }) => (
      <Form>
        <Field
          placeholder="emilioooo"
          type="email"
          name="email"
          id="email"
          component={InputText}
        />
        <Field
          type="password"
          label="Password"
          name="password"
          id="password"
          component={InputText}
        />
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
        <pre>{JSON.stringify(values, null, 2)}</pre>
      </Form>
    )}
  />
);

export default FormikForm;
