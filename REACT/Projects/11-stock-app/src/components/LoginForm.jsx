import { Button, CircularProgress } from "@mui/material";
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { Form } from "formik"
import { useSelector } from "react-redux"
import { object, string } from "yup"; //! bu şekilde de direk olarak metodları alıp yine validasyon şemamızı oluşturabiliriz. 

export const loginScheme = object({
  email: string()
    .email("Lutfen valid bir email giriniz")
    .required("Email zorunludur"),
  password: string()
    .required("password zorunludur")
})

const LoginForm = ({ values, handleChange, errors, touched, handleBlur }) => {
  const { loading } = useSelector(state => state.auth);// storeda yaptığımız fetchStart işlemini kullanmış olduk.
  return (
    <Form>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Email"
          name="email"
          id="email"
          type="email"
          variant="outlined"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.email && errors.email}
          error={touched.email && Boolean(errors.email)}
        />
        <TextField
          label="password"
          name="password"
          id="password"
          type="password"
          variant="outlined"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.password && errors.password}
          error={touched.password && Boolean(errors.password)}
        />
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
}

export default LoginForm
