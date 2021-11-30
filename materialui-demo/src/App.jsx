import React from 'react';
import { Typography, AppBar, CssBaseline, Toolbar, Container, Grid,  } from '@material-ui/core';
// import { PhotoCamera } from '@material-ui/icons';
import Paper from '@material-ui/core/Paper';

import useStyles from './styles';

//  Typography, AppBar, CardMedia, CssBaseline, Grid, Toolbar, Container 
// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <AppBar position="relative" elevation="0" color="white">
                <Toolbar>
                    <Typography variant="h4" className={classes.titlename}>
                        BENITA REGO
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <Container maxWidth="sm" >
                    <Grid container className={classes.containergrid} alignItems="stretch" spacing={1}>
                        <Grid item xs={12} sm={6} md={6}>
                            <Grid container justifyContent="center" spacing={2}>
                            {[0, 1].map((value) => (
                                <Grid key={value} item>
                                <Paper className={classes.paper} />
                                </Grid>
                            ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
                {/* <div className={classes.container}>
                    <Container maxWidth="sm" >
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Hello Everyone, I am Benita Rego and I take some perfectly imperfect pcitures and have them on my Instagram Handle @picturenot.perfect. Kindly support my page!
                        </Typography>
                        <div className={classes.button}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Secondary action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia 
                                    className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title= "Image Title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5">
                                        Heading
                                    </Typography>
                                    <Typography>
                                        This is a media card, describe it
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">View</Button>
                                    <Button size="small" color="primary">Edit</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        ))}
                    </Grid>
                </Container> */}
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Made with love by Benita Rego
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                    Something here to give footer a purpose!
                </Typography>
            </footer>
        </>
    );
}

export default App;