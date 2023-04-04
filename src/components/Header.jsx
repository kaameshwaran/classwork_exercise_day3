import React from "react";
import AppBar from '@material-ui/core/AppBar'
import Box from "@material-ui/core/Box";
import { Toolbar } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import CoffeeIcon from '@mui/icons-material/Coffee';
import EmojiFoodBeverageOutlinedIcon from '@mui/icons-material/EmojiFoodBeverageOutlined';
import BakeryDiningRounded from "@mui/icons-material/BakeryDiningRounded";


function Header(){

return(
    <div class='container-fluid'>
    <AppBar style={{backgroundColor:'#eab904'}}>
    <Toolbar style={{display:'flex', justifyContent:'space-between'}}>
    <Box>
    <Typography variant="h3"> COFFEE DAY!🧡</Typography>
  
    </Box>
    <List component='nav'>
        <ListItem component='div' >
            <ListItemText >
                <Typography color="inherit" variant="h6">
                    <CoffeeIcon /> Coffee
                </Typography>
            </ListItemText>
            <ListItemText inset>
                <Typography color="inherit" variant="h6">
                    <EmojiFoodBeverageOutlinedIcon /> Tea
                </Typography>
            </ListItemText>
            <ListItemText inset>
                <Typography color="inherit" variant="h6">
                    <BakeryDiningRounded /> Pastries
                </Typography>
            </ListItemText>
        </ListItem>
    </List>
    </Toolbar>
    </AppBar>
    </div>
)
}


export default Header;