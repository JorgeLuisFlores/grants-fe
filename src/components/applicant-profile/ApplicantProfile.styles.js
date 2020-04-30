import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  leftpanel: {
    padding: theme.spacing(1),
    textAlign: 'center',
    },
  bioname: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    gridTemplateRows: '1fr',
    gap: '1px 1px'
  },
  grants: {
    width: "90%",
    margin: '40px auto'
  },
  profilepaper: {
    padding: theme.spacing(1),
    backgroundColor: 'lightGray'
  },
  profile: {
    margin: '1rem auto',
    width: '90%',
    display: 'grid',
    gridTemplateColumns: '0.65fr 1.35fr',
    gridTemplateRows: '1fr',
    gap: '1px 90px',
  }

}));