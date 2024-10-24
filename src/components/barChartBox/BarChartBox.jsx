import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./barChartBox.scss";


const BarChartBox = (props) => {
    return (
        <div className="barChartBox">
             <h1 className="barChartTitle">{props.title}</h1>
            <div className="chart">
        <ResponsiveContainer width="90%" height={270}>
        <BarChart width={150} height={40} data={props.chartData}>
            <Tooltip 
            contentStyle={{background:"maroon", borderRadius : "5px"}}
            lableStyle={{display: "none"}}
            cursor={{fill: "none"}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
            />
        <Bar dataKey={props.dataKey} fill={props.color} />
        </BarChart>
      </ResponsiveContainer>
    </div>
    </div>
    );
};

export default BarChartBox;