import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Fade } from '@mui/material';
import { logOut } from '../../features/account/accountSlice';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/configureStore';

export default function SignedInMenu(){
    const dispatch = useAppDispatch();
    const {user} = useAppSelector(state=>state.account);
    const [anchorEl, setAnchorEl] = React.useState(null); 
    const open = Boolean(anchorEl);
    const handleClick=(event:any)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () =>{
        setAnchorEl(null);
    }
     return (
        <>
               <Button
                 onClick={handleClick}
                 color='inherit'
                 sx={{typography:'h6'}}
                 >
                 Hi, {user?.username}
               </Button>
               <Menu anchorEl={anchorEl} open={open} onClose={handleClose} TransitionComponent={Fade}> 
                 <MenuItem onClick={handleClose}>Profile</MenuItem>
                 <MenuItem component={Link} to="/orders">My Orders</MenuItem>
                 <MenuItem onClick={()=>dispatch(logOut())}>Logout</MenuItem>
               </Menu>
         </>
       );
}