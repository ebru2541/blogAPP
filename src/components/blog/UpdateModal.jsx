import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { Form } from "formik";
import { Formik } from "formik";
import { object } from "yup";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import { StyleSubmit } from "../../styles/globalStyle";
import useAuthCall from "../../hooks/useAuthCall";

export const registerSchema = object({
  new_password1: Yup.string()
    .required("password zorunludur")
    .min(8, "password en az 8 karakter olmalıdır")
    .max(20, "password en fazla 20 karakter olmalıdır")
    .matches(/\d+/, "Password bir sayı içermelidir")
    .matches(/[a-z]/, "Password bir küçük harf içermelidir")
    .matches(/[A-Z]/, "Password bir büyük harf içermelidir")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password bir özel karakter içermelidir"),

  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("new_password1"), null],
    "Parola Yanlış"
  ),
});

const UpdateModal = () => {
  const { changePassword } = useAuthCall();

  return (
    <Formik
      initialValues={{
        new_password1: "",
        passwordConfirmation: "",
      }}
      validationSchema={registerSchema}
      onSubmit={(values, actions) => {
        changePassword({
          ...values,
          new_password2: values.passwordConfirmation,
        });
        console.log(values);
        actions.resetForm();
        actions.setSubmitting(false);
      }}
    >
      {({
        handleChange,
        touched,
        errors,
        values,
        handleBlur,
        handleSubmit,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2}}>
            <TextField
              label="password"
              name="new_password1"
              id="new_password1"
              type="password"
              variant="outlined"
              required
              value={values.new_password1}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.new_password1 && errors.new_password1}
              error={touched.new_password1 && Boolean(errors.new_password1)}
            />
            <TextField
              label="password"
              name="passwordConfirmation"
              id="passwordConfirmation"
              type="password"
              variant="outlined"
              required
              value={values.passwordConfirmation}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                touched.passwordConfirmation && errors.passwordConfirmation
              }
              error={
                touched.passwordConfirmation &&
                Boolean(errors.passwordConfirmation)
              }
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={StyleSubmit}
            >
              Submit
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default UpdateModal;
