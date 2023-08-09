
import './App.css';
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import UseButton from './component/useButton';
import UseButtonGroup from './component/useButtonGroup';
import UseSwiperSlide from './component/useSwiperSlide';


import UseAjaxPost from "./component/useAjaxPost";




import UseSpeedDial from "./component/useSpeedDial";
import UseBasicPagination from "./component/useBasicPagination";


import UseAjaxGet from "./component/useAjaxGet";
import UseToastGrid from "./component/useToastGrid";
import UseToastGridAjaxGet from "./component/useToastGridAjaxGet";




function App() {



    const [openDrawer, setOpenDrawer] = useState(false);

    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };
    const data = ['list'];
  return (
    <div className="App">
      <header >
      </header>

        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleDrawerOpen}
                    sx={{ mr: 3 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    MyApp Dev2
                </Typography>
            </Toolbar>
        </AppBar>


        <Drawer anchor="left" open={openDrawer} onClose={handleDrawerClose}  >

            <List sx={{ width: 250}}>
                {data.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon /> }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

        </Drawer>



        <article>
            <UseToastGridAjaxGet/>
            <UseAjaxGet/>
            <UseToastGrid/>
            <UseButton/>
            <UseButtonGroup/>
            <UseSwiperSlide/>
            <UseBasicPagination/>

            <UseAjaxPost/>
        </article>
        <UseSpeedDial/>
    </div>



  );
}

export default App;
