
import * as React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Style from "./index.module.css"
import { Link } from 'react-router-dom';
const Blog = () => {
  return (
    <>
    <div className={Style.blog}>
           <div className={Style.team}>
        <h2 style={{fontSize:"20px"}}>OUR LATEST BLOG</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
    </div>
    </div>
    <Box sx={{ flexGrow: 1 }} style={{"height":"100vh","width":"100%"}}>
      <Grid container spacing={5} columns={12} style={{"margin":"0 auto"}}>
        <Grid item lg={4} md={6}  sm={12}  xs={12} className={Style.card}>
        <div className={Style.photo}>
  <img src="https://preview.colorlib.com/theme/bizpro/images/blog/1.jpg" alt=""/> 
 
</div>
<div className={Style.paragraph}>
Play:Akufo-Addo speaks to business community
  Posted by <Link to="" style={{color:"#d73e4d"}}>admin</Link> at 04 Feb, 2017
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis iaculis velit in tristique. Curabitur ac urna urna sed accumsan...<Link style={{color:"#d73e4d"}} to="#">Read More</Link></p>
</div>
        </Grid>
        <Grid item lg={4} md={6}  sm={12}  xs={12} className={Style.card}>
        <div className={Style.photo}>
  <img src="https://preview.colorlib.com/theme/bizpro/images/blog/2.jpg" alt=""/> 
</div>
<div className={Style.paragraph}>
Play:Akufo-Addo speaks to business community
  Posted by <Link to="" style={{color:"#d73e4d"}}>admin</Link> at 04 Feb, 2017
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis iaculis velit in tristique. Curabitur ac urna urna sed accumsan...<Link style={{color:"#d73e4d"}} to="#">Read More</Link> </p>
</div>
<div className={Style.qeyd}></div>
        </Grid>
        <Grid item lg={4} md={6}  sm={12} xs={12} className={Style.card}>
        <div className={Style.photo}>
  <img src="https://preview.colorlib.com/theme/bizpro/images/blog/3.jpg" alt=""/> 
</div>
<div className={Style.paragraph}>
Play:Akufo-Addo speaks to business community
  Posted by <Link to="" style={{color:"#d73e4d"}}>admin</Link> at 04 Feb, 2017
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis iaculis velit in tristique. Curabitur ac urna urna sed accumsan... <Link style={{color:"#d73e4d"}} to="#">Read More</Link></p>
</div>
         </Grid>
         
      </Grid>
    </Box>
    </> 
  )
}

export default Blog