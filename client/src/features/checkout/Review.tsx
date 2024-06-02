import { Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { Product } from "../../app/models/product";
import BasketSummary from "../basket/BasketSummary";
import { useAppSelector } from "../../app/store/configureStore";

export default function Review(){
    const {basket} = useAppSelector(state=>state.basket);
    // Define the extractImageName function
    const extractImageName = (item: Product): string | null => {
        if (item && item.pictureUrl) {
            const parts = item.pictureUrl.split('/');
            if (parts.length > 0) {
                return parts[parts.length - 1];
            }
        }
        return null;
    };

    // Function to format the price with INR currency symbol
    const formatPrice = (price: number): string =>{
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 2
        }).format(price);
    };
    return (
        <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Image</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {basket?.items.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  {product.pictureUrl && (
                    <img src={"/images/products/"+extractImageName(product)} alt="Product" width="50" height="50" />
                  )}
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{formatPrice(product.price)}</TableCell>
              </TableRow>
            ))}            
          </TableBody>
        </Table>
      </TableContainer>
      <BasketSummary />
    </>
    )
}