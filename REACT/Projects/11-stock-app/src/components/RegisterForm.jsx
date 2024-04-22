import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
import { Form } from "formik";
import * as Yup from "yup";
import FormTextField from "./ui/TextFields/FormTextField";

//! Yup ile istediğimiz alanlara istediğimiz validasyon koşullarını
//  oluşturuyoruz. Sonra oluşturduğumuz bu şemayı formike tanımlayarak
//  kullanıyoruz. Böylelikle formik hem formumuzu yönetiyor hem de verdiğimiz
//  validationSchema yı uyguluyor. Dikkat edilmesi gereken husus; formikte
//  tanımladığımız initialValues daki keylerle, Yupta tanımladığımız keylerin
//  aynı olması. Eğer bir harf bile farklı olsa o alanla ilgili yazdığınız
//  validation çalışmaz.
export const SignupSchema = Yup.object().shape({
  username: Yup.string().min(3).max(15).required("Required!"),
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Er muss mindestens 8 Zeichen lang sein!")
    .max(50, "Er darf maximal 50 Zeichen lang sein!")
    .matches(/\d+/, "Muss mindestens eine Ziffer enthalten!")
    .matches(/[a-z]/, "Muss mindestens einen Kleinbuchstaben enthalten!")
    .matches(/[A-Z]/, "Muss mindestens einen Großbuchstaben enthalten!")
    .matches(
      /[@$?!%&*]+/,
      "Muss mindestens ein Sonderzeichen (@$!%*?&) enthalten!"
    )
    .required(),
});

const SignUpForm = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
  isSubmitting,
}) => {
  const registerFormFields = [
    { name: "username", label: "Username", type: "text" },
    { name: "firstName", label: "First Name", type: "text" },
    { name: "lastName", label: "Last Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "password", label: "Password", type: "password" },
  ];

  return (
    <div>
      <Form>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {registerFormFields.map((field) => (
            <FormTextField
              key={field.name}
              {...field}
              value={values[field.name]}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched[field.name] && errors[field.name]}
              error={touched[field.name] && Boolean(errors[field.name])}
            />
          ))}

          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Loading..." : "Sign Up"}
          </Button>
        </Box>
      </Form>
    </div>
  );
};

export default SignUpForm;
