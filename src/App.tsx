import {
  Box,
  Button,
  Card,
  TextField
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import "./App.css";

function App() {
  // prueba de formik con MUI
  const handleSubmit = (values: any) => {
    console.log('se envio',values);
  };

  const handleValidate = (values: any) => {
    console.log("Validate", values);
    let error: any = {};
    if (values.Nombre.length < 3) {
      error.Nombre = "El nombre debe tener mas de 3 caracteres";
    }
    if (!values.Nombre) {
      error.Nombre = 'Campo obligatorio';
    }
    return error;
  };

  return (
    <>
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Formik
          validate={handleValidate}
          initialValues={{ Nombre: "" }}
          onSubmit={handleSubmit}
        >
          <Form style={{ width: "400px" }}>
            <Field type="text" name="Nombre">
              {({ field, form }: any) => {
                console.log(form);
                return (
                  <>
                    <TextField
                      {...field}
                      required
                      label="Nombre"
                      placeholder="Escribe"
                      sx={{ width: "100%" }}
                      error={form.errors.Nombre}
                      helperText={form.errors.Nombre}
                    />
                  </>
                );
              }}
            </Field>

            
            <Box sx={{ mt: 2}}>
              <Button sx={{ width: "100%" }} type="submit" variant="outlined">
                Enviar
              </Button>
            </Box>
          </Form>
        </Formik>
      </Card>
    </>
  );
}

export default App;
