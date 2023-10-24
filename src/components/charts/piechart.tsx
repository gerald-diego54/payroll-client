import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
datasets: [
    {
      label: 'Percentage of Employees by Gender',
      data: [70,30],
      backgroundColor: [
        '#EAF6ED',
        '#67C587',
      ],
      borderColor: [
        '#EAF6ED',
        '#67C587',
      ],
      borderWidth: 1,
    },   
  ],
  labels: ['Male','Female'],
};

export function Piechart() {
    return (
    <Paper sx={{position: "relative", backgroundColor: '#044453', width: '381px', height: '419px'}}>
    <Box sx={{width: '200px', height: '200px', margin: "auto",}}>
    <Pie
    options={{ maintainAspectRatio: true }}
    data={data} 
    />
    </Box>
    </Paper>
    )
}
