import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const useStyles = makeStyles((theme) => ({

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
 
    
  },
}));

 function SimpleSelect() {
  const classes = useStyles();
  const [Option, setOption] = React.useState('');

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel>Opción</InputLabel>
   
        <Select 

          value={Option}
          onChange={handleChange}
        >
           <MenuItem value="">
            <em>Ninguna</em>
          </MenuItem>
          <MenuItem value={'Carne y pollo'}>Carne y pollo</MenuItem>
          <MenuItem value={'Pollo y Kibbe'}>Pollo y Kibebe</MenuItem>
          <MenuItem value={'Falafel y pollo'}>Falafel y pollo</MenuItem>
          <MenuItem value={'Falafel y carne'}>Falafel y Kibbe</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
export default SimpleSelect