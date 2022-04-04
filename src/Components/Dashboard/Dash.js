import React from 'react';
import { Bar, BarChart, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dash = () => {
const data=[
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    }
]


    return (

        <div className='my-5'>
    <LineChart width={800} height={500} data={data}>

        <Line dataKey={'investment'}> </Line>
        <Line dataKey={'revenue'}> </Line>
        <Line dataKey={'sell'}> </Line>
    

          <XAxis dataKey={'month'}></XAxis>
          <YAxis ></YAxis>
            </LineChart> 
     <PieChart width={400} height={400}>
          <Pie
            dataKey="revenue"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip/>
            </PieChart>
            
             <BarChart width={150} height={40} data={data}>
          <Bar dataKey="investment" fill="#8884d8" />
        </BarChart>

        </div>
        
    
        
       

      
    );
};

export default Dash;