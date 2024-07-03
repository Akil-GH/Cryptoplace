import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

const Linechart = ({ historicalData }) => { // Destructure props
    const [data, setData] = useState([["Date", "Prices"]]);

    useEffect(() => {
        let datacopy = [["Date", "Prices"]];
        if (historicalData && historicalData.prices) { // Ensure historicalData is not undefined
            historicalData.prices.forEach((item) => {
                datacopy.push([`${new Date(item[0]).toLocaleDateString().slice(0, -5)}`, item[1]]);
            });
            setData(datacopy);
        }
    }, [historicalData]);

    return (
        <Chart
            chartType='LineChart' // Corrected chart type
            data={data}
            height="100%" // Adjusted height to a fixed value
            legendToggle
        />
    );
};

export default Linechart;
