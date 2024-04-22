import { Button, CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
import { Form } from "formik";
import FormTextField from "./ui/TextFields/FormTextField";
import { useSelector } from "react-redux";
import { object, string } from "yup"; //! bu şekilde de direk olarak metodları alıp yine validasyon şemamızı oluşturabiliriz.

export const loginScheme = object({
  email: string()
    .email("Lutfen valid bir email giriniz")
    .required("Email zorunludur"),
  password: string().required("password zorunludur"),
});

const loginFormFields = [
  { name: "email", label: "Email", type: "email" },
  { name: "password", label: "Şifre", type: "password" },
];

const LoginForm = ({ values, handleChange, errors, touched, handleBlur }) => {
  const { loading } = useSelector((state) => state.auth); // storeda yaptığımız fetchStart işlemini kullanmış olduk.
  return (
    <Form>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {loginFormFields.map((field) => (
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
        {!loading ? (
          <Button variant="contained" type="submit">
            Sign In
          </Button>
        ) : (
          <Button variant="contained" disabled={loading}>
            <CircularProgress />
          </Button>
        )}

        {/* <Button
          variant="contained"
          type="submit"
          disabled={loading}
          startIcon={loading && <CircularProgress />}>
          Submit
        </Button> */}
      </Box>
    </Form>
  );
};

export default LoginForm;
