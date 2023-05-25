import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import IconButton from '@mui/material/IconButton';
import Style from "./index.module.css"
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
      <Box >
        <AppBar position="fixed" style={{"backgroundColor":" rgba(0, 0, 0, 0.587)","height":"50px","width":"100%"}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            
            >
     
            </IconButton>
           <nav>
            <div><img src='https://preview.colorlib.com/theme/bizpro/images/logo/logo.png.webp' alt='' style={{"height":"30px","width":"100px"}}></img></div>
            <ul>
                
                <li><Link style={{color:"white"}}  calssName= {Style.links}to ="/">Home</Link></li>
                <li><Link  style={{color:"white"}}calssName= {Style.links} to ="">About</Link></li>
                <li><Link style={{color:"white"}} calssName= {Style.links} to ="">Services</Link></li>
                <li><Link style={{color:"white"}} calssName= {Style.links} to ="">Portflio</Link></li>
                <li><Link style={{color:"white"}} calssName= {Style.links} to ="">Team</Link></li>
               <li><Link  style={{color:"white"}}calssName= {Style.links} to ="/link">Link</Link></li>
               <li><Link style={{color:"white"}} calssName= {Style.links} to ="">Skill</Link></li>
               <li><Link style={{color:"white"}} calssName= {Style.links} to ="">Clients</Link></li>
               <li><Link style={{color:"white"}} calssName= {Style.links} to ="">Blog</Link></li>
               <li><Link style={{color:"white"}} calssName= {Style.links} to ="">Contact</Link></li>
            </ul>

           </nav>
 
          </Toolbar>
        </AppBar>
      </Box>
    );
  }