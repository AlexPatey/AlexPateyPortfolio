import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
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
          <Typography variant="h6" color="#9ba5a6" fontFamily={'Poppins'} fontWeight={500} noWrap className="navbarTitle">
            {"<!--Alex Patey Portfolio-->"}
          </Typography>
          <div className="navbarLinksContainer">
            <GitHub className='headerMargin' onClick={() => window.open("https://github.com/AlexPatey")}
                sx={{ cursor: 'pointer', color: "#9ba5a6" }}/>
            <LinkedIn className='headerMargin' onClick={() => window.open("https://www.linkedin.com/in/alex-patey-b98a7519a/")}
                sx={{ cursor: 'pointer', color: "#9ba5a6" }}/>
            <a className='cvLink' href={"../Alex Patey Resume.pdf"} target="_blank" rel="noreferrer">{"Resume"}</a>
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
          }}
          className='introContainer'
        >
          <Container maxWidth="sm">
            <Typography
              variant='h2'
              align="center"
              color="#808d8e"
              fontFamily={'Poppins'}
              fontWeight={400}
              gutterBottom
              className='nameText'
            >
              Alex Patey
            </Typography>
            <Typography variant="h5" align="center" color="#808d8e" fontFamily={'Poppins'} paragraph className='descText'>
              {"<!--👋 Hi, I am a passionate full-stack developer who loves to learn new technologies and stacks. Below are some of my personal projects.-->"}
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
        <Container sx={{ py: 8, bgcolor: '#232e31' }} maxWidth="100%" className='projectContainer'>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-12 cardCol'>
              <Card
                  sx={{ bgcolor: "#405458", height: 'auto', display: 'flex', flexDirection: 'column', borderRadius: "0px" }}
                  >
                    <div>
                      <img className='projectImage' src='../images/OCRProjectThumbnail.png' alt='OCR Project Thumbnail' />
                    </div>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" fontWeight={"500"} fontFamily={'Poppins'} color={"#9ba5a6"} className="projectTitle">
                    {"<!--OCR 'Optical Character Recognition' Project-->"}
                    </Typography>
                    <Typography variant="h6" fontWeight={"300"} fontFamily={'Poppins'} color={"#9ba5a6"} className="projectDesc">
                      This project allows a user to extract text (both-handwritten and digital) from uploaded images and then save the text to a .txt file.
                    </Typography>
                    <Typography variant="h6" fontWeight={"300"} fontFamily={'Poppins'} color={"#9ba5a6"} className="projectDesc">
                      Uses Google Cloud API, C#, HTML5, CSS3, JavaScript, ASP.NET Core, SQL.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <button size="small" className='btn buttonLinks' onClick={() => window.open("https://www.youtube.com/watch?v=Tfn7-S6s54I&t=16s&ab_channel=AlexP")}>View Video Demo</button>
                    <button size="small" className='btn buttonLinks' onClick={() => window.open("https://github.com/AlexPatey/alexpweb-repo")}>View Code</button>
                  </CardActions>
                </Card>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 cardCol'>
              <Card
                  sx={{ bgcolor: "#405458", height: 'auto', display: 'flex', flexDirection: 'column', borderRadius: "0px" }}
                  >
                    <div>
                      <img className='projectImage' src='../images/TicTacToe.png' alt='OCR Project Thumbnail' />
                    </div>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" fontWeight={"500"} fontFamily={'Poppins'} color={"#9ba5a6"} className="projectTitle">
                    {"<!--Tic Tac Toe React Project-->"}
                    </Typography>
                    <Typography variant="h6" fontWeight={"300"} fontFamily={'Poppins'} color={"#9ba5a6"} className="projectDesc">
                      Tic Tac Toe game built entirely in React. Includes move history allowing users to return to previous game states. Built following React's tic tac toe tutorial.
                    </Typography>
                    <Typography variant="h6" fontWeight={"300"} fontFamily={'Poppins'} color={"#9ba5a6"} className="projectDesc">
                      Uses React, JavaScript, HTML5, CSS3, Bootstrap
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <button size="small" className='btn buttonLinks' onClick={() => window.open("https://aspnetcorereacttictactoe.azurewebsites.net/")}>View Live Demo</button>
                    <button size="small" className='btn buttonLinks' onClick={() => window.open("https://github.com/AlexPatey/ASPNetCoreReact")}>View Code</button>
                  </CardActions>
                </Card>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 cardCol'>
              <Card
                  sx={{ bgcolor: "#405458", height: 'auto', display: 'flex', flexDirection: 'column', borderRadius: "0px" }}
                >
                  <div>
                    <img className='projectImage' src='../images/ALP3.png' alt='Convex Hull Project' />
                  </div>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" fontWeight={"500"} fontFamily={'Poppins'} color={"#9ba5a6"}  className="projectTitle">
                    {"<!--Convex Hull Simulator Project-->"}
                    </Typography>
                    <Typography variant="h6" fontWeight={"300"} fontFamily={'Poppins'} color={"#9ba5a6"} className="projectDesc">
                      This project simulates the convex hull algorithm (finds the smallest convex polygon for a given set of points). Educational tool for computational geometry.
                    </Typography>
                    <Typography variant="h6" fontWeight={"300"} fontFamily={'Poppins'} color={"#9ba5a6"} className="projectDesc">
                      Uses VB.Net, Windows Forms.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <button size="small" className='btn buttonLinks' onClick={() => window.open("https://github.com/AlexPatey/ConvexHullSimulator")}>View Code</button>
                  </CardActions>
                </Card>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 cardCol'>
              <Card
                  sx={{ bgcolor: "#405458", height: 'auto', display: 'flex', flexDirection: 'column', borderRadius: "0px" }}
                >
                  <div>
                    <img className='projectImage' src='../images/LOS3.png' alt='Line of Sight Project' />
                  </div>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" fontWeight={"500"} fontFamily={'Poppins'} color={"#9ba5a6"}  className="projectTitle">
                    {"<!--Line of Sight Project-->"}
                    </Typography>
                    <Typography variant="h6" fontWeight={"300"} fontFamily={'Poppins'} color={"#9ba5a6"} className="projectDesc"> 
                      This project was built in C++ using a game engine called 'Pixel Game Engine,' the aim of this project is to simulate shadow casting.
                    </Typography>
                    <Typography variant="h6" fontWeight={"300"} fontFamily={'Poppins'} color={"#9ba5a6"} className="projectDesc">
                      Uses C++.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <button size="small" className='btn buttonLinks' onClick={() => window.open("https://github.com/AlexPatey/Shadow-Casting")}>View Code</button>
                  </CardActions>
                </Card>
            </div>
          </div>
            {/* <Typography variant="h6" align="center" color="#808d8e" fontFamily={'Poppins'} paragraph>
              {"<!--More projects and more project hosting coming soon. 🔨-->"}
            </Typography> */}
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: '#232e31', p: 6,}} component="footer" className='footerContainer'>
        <Typography variant="h6" color="#808d8e"  align="center" fontFamily={'Poppins'} gutterBottom>
          {"<!--External Links and Contact Info-->"}
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
                    alex.patey@btinternet.com • 07941 060016 • <a href={"../Alex Patey Resume.pdf"} target="_blank" rel="noreferrer">{"Download Resume"}</a>
                </Typography>
            </div>
        </div>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}