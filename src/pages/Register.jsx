import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Formik } from "formik";
import RegisterForm, { registerSchema } from "../components/auth/RegisterForm";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

import useAuthCall from "../hooks/useAuthCall";

const Register = () => {
  const { register } = useAuthCall();

  return (
    <Container maxWidth="lg">
      <Box
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          width:"40%",
          p: 2,
          m:"auto"
        }}
      >
        <Typography variant="h4" align="center" mb={2} color="secondary.light">
          Register
        </Typography>

        <Formik
          initialValues={{
            username: "",
            first_name: "",
            last_name: "",
            image: "",
            email: "",
            password: "",
          }}
          validationSchema={registerSchema}
          onSubmit={(values, actions) => {
            register({ ...values, password2: values.password });
            actions.resetForm();
            actions.setSubmitting(false);
          }}
          component={(props) => <RegisterForm {...props} />}
        ></Formik>
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Link to="/login">Do you have an account?</Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
