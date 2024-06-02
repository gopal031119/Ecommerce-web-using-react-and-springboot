import { Grid, TextField, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form"

export default function AddressForm(){
    const {register, formState: {errors}} = useFormContext();
    return (
        <>
        <Typography variant="h6" gutterBottom>
            Shipping Address
        </Typography>
        <form>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              {...register("firstName")}
              label="First name"
              fullWidth
              helperText="Enter First Name"
              autoComplete="given-name"
              variant="standard"
              error={!!errors.firstName} 
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              {...register("lastName")}
              label="Last name"
              helperText="Enter Last Name"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              error={!!errors.lastName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              {...register("address1")}
              label="Address line 1"
              helperText="Enter Address Line 1"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
              error={!!errors.address1}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              {...register("address2")}
              label="Address line 2"
              helperText="Enter Address Line 2"
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
              error={!!errors.address2}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              {...register("city")}
              label="City"
              helperText="Enter City"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
              error={!!errors.city}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              {...register("state")}
              label="State/Province/Region"
              helperText="Enter State"
              fullWidth
              variant="standard"
              error={!!errors.state}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              {...register("zip")}
              label="Zip / Postal code"
              helperText="Enter Zip"
              fullWidth
              autoComplete="shipping postal-code"
              variant="standard"
              error={!!errors.zip}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              {...register("country")}
              label="Country"
              helperText="Enter Country"
              fullWidth
              autoComplete="shipping country"
              variant="standard"
              error={!!errors.country}
            />
          </Grid>          
        </Grid>
        </form>
        </>
    )
}