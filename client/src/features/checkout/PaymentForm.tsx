import { Checkbox, FormControlLabel, Grid, TextField, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form"

export default function PaymentForm(){
    const {register, formState:{errors}} = useFormContext();
    return (
        <>
        <Typography variant="h6" gutterBottom>
            Payment Form 
        </Typography>
        <form>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
           // required
            id="cardName"
            {...register("cardName")}
            label="Name on card"
            helperText="Enter Name on Card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            error={!!errors.cardName}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
          //  required
            id="cardNumber"
            {...register("cardNumber")}
            label="Card number"
            helperText="Enter Card Number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            error={!!errors.cardNumber}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
           // required
            id="expDate"
            {...register("expDate")}
            label="Expiry date"
            helperText="Enter Expiry Date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            error={!!errors.expDate}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            //required
            id="cvv"
            {...register("cvv")}
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            error={!!errors.cvv}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
      </form>
        </>

    )
}