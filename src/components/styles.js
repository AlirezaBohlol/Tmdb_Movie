import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection:'column',
    height: '100%',
  },
  toolbar: {
    height: '70%',
  },
  content: {
    flexGrow: '1',
    padding: '2em',
  },
}));
