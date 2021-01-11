import React from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from 'recharts';

const Graph = (props) => {

    return (

        <div
            style={{
                width: '600px',
                height: '600px',
                margin: '500px auto'
            }}
        >
            <LineChart width={500} height={300} data={props.data}>
                <XAxis dataKey="parameter" />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />

            </LineChart>
        </div>
    )
}
export default Graph;