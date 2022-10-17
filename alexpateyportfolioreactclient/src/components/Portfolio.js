import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GitHub, HomeMax, LinkedIn } from '@mui/icons-material';
import "../customCSS.css";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Portfolio() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" sx={{ bgcolor: "#405458" }} fontFamily={'Poppins'}>
        <Toolbar sx={{
            width: "100%",
            justifyContent: "space-between"
          }}>
          <Typography variant="h6" color="#9ba5a6" fontFamily={'Poppins'} fontWeight={500} noWrap>
            {"<!--Alex Patey Portfolio-->"}
          </Typography>
          <div>
            <GitHub className='headerMargin' onClick={() => window.open("https://github.com/AlexPatey")}
                sx={{ cursor: 'pointer', color: "#9ba5a6" }}/>
            <LinkedIn className='headerMargin' onClick={() => window.open("https://www.linkedin.com/in/alex-patey-b98a7519a/")}
                sx={{ cursor: 'pointer', color: "#9ba5a6" }}/>
          </div>
        </Toolbar>
      </AppBar>
      <main bgcolor="#232e31">
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: '#232e31',
            pt: 8,
            pb: 6,
            minHeight: "calc(100vh - 258px)"
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="#808d8e"
              fontFamily={'Poppins'}
              fontWeight={400}
              gutterBottom
            >
              Alex Patey
            </Typography>
            <Typography variant="h5" align="center" color="#808d8e" fontFamily={'Poppins'} paragraph>
            {"<!--Hi, I am a passionate full-stack developer who loves to learn new technologies and stacks. Below are some of my personal projects.-->"}
            </Typography>
            {/* <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack> */}
          </Container>
        </Box>
        {/*<Container sx={{ py: 8, bgcolor: '#232e31' }} maxWidth="100%">
           <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid> 
        </Container>*/}
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: '#232e31', p: 6,}} component="footer">
        <Typography variant="h6" color="#808d8e"  align="center" fontFamily={'Poppins'} gutterBottom>
            External Links and Contact Info
        </Typography>
        <div className='externalLinks'>
            <div>
                <GitHub className='headerMargin' onClick={() => window.open("https://github.com/AlexPatey")}
                        sx={{ cursor: 'pointer', color: "#808d8e" }}/>
                <LinkedIn className='headerMargin' onClick={() => window.open("https://www.linkedin.com/in/alex-patey-b98a7519a/")}
                    sx={{ cursor: 'pointer', color: "#808d8e" }}/>
            </div>
            <div className='contactInfo'>
                <Typography variant="h7" color="#808d8e" fontFamily={'Poppins'} fontWeight={500} className='headerPadding email'>
                    alex.patey@btinternet.com • 07941 060016
                </Typography>
            </div>
        </div>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}