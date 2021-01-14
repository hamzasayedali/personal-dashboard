import React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Grid, Container} from '@material-ui/core';
import { makeStyles, hexToRgb, rgbToHex } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
  };


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein, };
  }
  
  const rows = [
    createData('ECE 109', "Chapter 1: Intro to Materials Chem", 6.0, 24, 4.0),
    createData('ECE 109', "Chapter 2: Atomic Structure and Interatomic Bonding", 9.0, 37, 4.3),
    createData('ECE 204', "Lecture 1: Intro (Wed Jan 13th 11:30-1:00)", 16.0, 24, 6.0),
    createData('ECE 222', "Practice Problems 1", 3.7, 67, 4.3),
    createData('ECE 240', "Assignment 1", 16.0, 49, 3.9),
  ];

  const columns = [
    "Class",
    "Task",
    "Est. Duration",
    "Actual Duration",
    "Completed"
  ];
  

const Tasks = () => {
    const classes = useStyles();

    return (
        <Container spacing={0}>
            <Grid container justify="space-between"  alignItems="stretch" spacing={0}>
                <Grid item sm={8}>
                <TableContainer component={Paper}>
          <Table className={classes.table} color="transparent" aria-label="simple table">
            <TableHead>
              <TableRow>
                  {columns.map((col)=>(
                      <TableCell>{col}</TableCell>
                  ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.calories}</TableCell>
                  <TableCell align="left">{row.fat}</TableCell>
                  <TableCell align="left">{row.carbs}</TableCell>
                  <TableCell align="left"><Checkbox></Checkbox></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
                </Grid>

        </Grid>
        </Container>
        
        
      );
}

export default Tasks;