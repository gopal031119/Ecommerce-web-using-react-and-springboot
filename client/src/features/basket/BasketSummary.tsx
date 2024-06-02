import { Box, Typography, TableContainer, Paper, Table, TableBody, TableRow, TableCell } from "@mui/material";
import { useAppSelector } from "../../app/store/configureStore";

export default function BasketSummary(){
    const {basket} = useAppSelector(state=>state.basket);
    const subTotal = basket?.items.reduce((sum, item)=> sum + (item.quantity*item.price), 0) ?? 0;
    const shipping = 200;

    // Function to format the price with INR currency symbol
    const formatPrice = (price: number): string =>{
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 2
        }).format(price);
    };
    return (
        <Box mt={4} p={2} bgcolor="background.default" borderRadius={8} boxShadow={3}>
            <Typography variant="h5" gutterBottom>
                Basket Summary
            </Typography>
            <TableContainer component={Paper} variant="outlined">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>Subtotal</TableCell>
                            <TableCell align="right">{formatPrice(subTotal)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Shipping</TableCell>
                            <TableCell align="right">{formatPrice(shipping)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><strong>Total</strong></TableCell>
                            <TableCell align="right"><strong>{formatPrice(subTotal + shipping)}</strong></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}