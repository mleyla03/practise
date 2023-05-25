
import * as React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Style from "./index.module.css"
const Blog = () => {
  return (
    <>
    <div className={Style.blog}>
           <div className={Style.team}>
        <h2 style={{fontSize:"20px"}} >MEET OUR TEAM</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
    </div>
    </div>
    <Box sx={{ flexGrow: 1 }} style={{"height":"100vh","width":"100%"}}>
      <Grid container spacing={6} columns={12} style={{"margin":"0 auto"}}>
   
        <Grid item lg={4} md={6}  sm={12}  xs={12} className={Style.card}>
        <div className={Style.photo}>
  <img src="https://preview.colorlib.com/theme/bizpro/images/team/1.jpg.webp" style={{width:"250px", height:"250px"}} alt=""/> 
   <div className={Style.pac}>
    <h4>Gonzalez Gina</h4>
    <p>Web Developer</p>
   </div>

</div>

        </Grid>
        <Grid item lg={4} md={6}  sm={12}  xs={12} className={Style.card}>
        <div className={Style.photo}>
  <img src="https://preview.colorlib.com/theme/bizpro/images/team/2.jpg.webp" style={{width:"250px", height:"250px"}} alt=""/> 
<div className={Style.pac}>
    <h4>Holly Vincenzini</h4>
    <p>Media Partner</p></div>
</div>



<div className={Style.qeyd}></div>
        </Grid>
        <Grid item lg={4} md={6}  sm={12} xs={12} className={Style.card}>
        <div className={Style.photo}>
  <img src="https://preview.colorlib.com/theme/bizpro/images/team/3.jpg.webp" style={{width:"250px", height:"250px"}} alt=""/> 
<div className={Style.pac}>
    <h4>Ramirez Minita</h4>
    <p>Graphic Design</p>
</div>
</div>

         </Grid>
         
      </Grid>
    </Box>
    </> 
  )
}

export default Blog