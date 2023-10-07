import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import {
  Container,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Link,
  Avatar,
  CssBaseline,
  Box,
  IconButton,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import VisibilityIcon from '@mui/icons-material/Visibility';
//import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { grey, teal } from '@mui/material/colors';

const defaultTheme = createTheme();

export const SignUp = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  //const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [userDecision, setUserDecision] = useState(null);

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const domain = email.substring(email.lastIndexOf('@') + 1);
    const allowedDomains = ['gmail.com', 'hotmail.com', 'outlook.com', 'autonoma.edu.co'];

    return re.test(email) && allowedDomains.includes(domain);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    const repeatPassword = data.get('repeatPassword');

    if (!validateEmail(email)) {
      setErrorMessage('El correo electrónico no es válido');
      setOpenSnackbar(true);
      return;
    }

    if (password !== repeatPassword) {
      setErrorMessage('Las contraseñas no coinciden');
      setOpenSnackbar(true);
      return;
    } else {
      console.log('Contraseñas coinciden, puedes enviar el formulario.');
    }

    const data2 = {
      name: 'Juan',
      lastname: 'Perez',
      email: email,
      password: password,
    };

    console.log(data2);
    try {
      // Aquí puedes realizar una solicitud HTTP para registrar al usuario
      // const response = await auth.signUp(data2);
      // console.log(response);
      // if (response.status === 201) {
      //   setRegistrationSuccess(true);
      // }
      // ...
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleAgree = () => {
    setUserDecision('agree');
    setOpen(false);
  };

  const handleDisagree = () => {
    setUserDecision('disagree');
    setOpen(false);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Paper
            elevation={10}
            sx={{
              padding: 3,
              borderRadius: 4,
              backgroundColor: 'white', // Color de fondo
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: teal[500] }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              sx={{
                marginBottom: 3,
                color: teal[500], // Color del texto del título
              }}
            >
              Sign up
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sm={{ mt: 1 }}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              sx={{ my: 2 }}
              InputProps={{
                startAdornment: (
                  <EmailIcon color="action" sx={{ display: 'flex', alignItems: 'center' }}>
                    {/* Centra verticalmente el icono */}
                  </EmailIcon>
                ),
              }}
            />

            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              sx={{ my: 2 }}
              InputProps={{
                startAdornment: (
                  <VpnKeyIcon color="action" sx={{ display: 'flex', alignItems: 'center' }}>
                    {/* Centra verticalmente el icono */}
                  </VpnKeyIcon>
                ),
                endAdornment: (
                  <IconButton color="primary">
                    <VisibilityIcon />
                  </IconButton>
                ),
              }}
            />

            <TextField
              required
              fullWidth
              name="repeatPassword"
              label="Repeat Password"
              type="password"
              id="repeatPassword"
              autoComplete="new-password"
              sx={{ my: 2 }}
              InputProps={{
                startAdornment: (
                  <VpnKeyIcon color="action" sx={{ display: 'flex', alignItems: 'center' }}>
                    {/* Centra verticalmente el icono */}
                  </VpnKeyIcon>
                ),
              }}
            />
              <Grid container spacing={1}>
                <Grid item xs={8}>
                  <FormControlLabel
                    control={<Checkbox value="agree" color="primary" />}
                    label="I agree to the"
                    sx={{ textAlign: 'right' }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Link
                    href="#"
                    variant="body2"
                    onClick={handleClickOpen}
                    style={{ color: teal[500], textDecoration: 'none' }}
                  >
                    Terms & Conditions
                  </Link>
                </Grid>
              </Grid>
              {userDecision && <p>You chose: {userDecision}</p>}
              <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
              >
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                  {errorMessage}
                </Alert>
              </Snackbar>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: teal[500], // Color de fondo del botón
                  color: grey[50], // Color del texto del botón
                  '&:hover': {
                    backgroundColor: teal[700], // Color de fondo del botón al pasar el cursor
                  },
                }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>
      </Container>

      {/* Diálogo de Términos y Condiciones */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Terms & Conditions</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* Aquí puedes agregar el contenido de los Términos y Condiciones */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDisagree} color="primary">
            Disagree
          </Button>
          <Button onClick={handleAgree} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

