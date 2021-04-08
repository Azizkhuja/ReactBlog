import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

const useStyles = makeStyles(theme => ({
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%"
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  }
}));

const Blogs = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia component="img" alt="Contemplative Reptile" height="140" image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                React useContext
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.cardActions}>
            <Box className={classes.author}>
              <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              <Box ml={2}>
                <Typography variant="subtitle2" component="p">
                  Clemens Joe
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" component="p">
                  May 14, 2020
                </Typography>
              </Box>
            </Box>
            <Box>
              <BookmarkBorderIcon />
            </Box>
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
};

export default Blogs;
