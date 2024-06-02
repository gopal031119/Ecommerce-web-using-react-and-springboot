import { LoadingButton } from "@mui/lab";
import { Container, CssBaseline, Box, Avatar, Typography, TextField, FormControlLabel, Checkbox, Grid } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { store, useAppDispatch } from "../../app/store/configureStore";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { signInUser } from "./accountSlice";


export default function SignInPage(){
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch();
    const {register, handleSubmit, formState:{isSubmitting, errors, isValid}} = useForm({
      mode:'onTouched'
    })

    async function submitForm(data: FieldValues){
      try{
        //dispatching the sign in action
        await dispatch(signInUser(data));
        //check if the user is logged in
        const {user} = store.getState().account;
        if(user){
          //navigate it to store page
          navigate(location.state?.from || '/store');
        }else{
          toast.error('Sign in Failed. Please try again');
        }        
      }catch(error){
        console.log('Error signing in:', error);
        toast.error('Sign in Failed. Please try again');
      }
    }
    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit(submitForm)} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
                {...register('username', {required:'Username is required'})}
                error={!!errors.username}
                helperText={errors?.username?.message as string}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                id="password"
                {...register('password', {required:'Password is required'})}
                error={!!errors.password}
                helperText={errors?.password?.message as string}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <LoadingButton loading={isSubmitting}
                disabled={!isValid}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </LoadingButton>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>    
    );
  }
