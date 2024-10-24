import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip} from 'recharts';
import "./pieChartBox.scss";

const data = [
    { name : 'Beaker', value: 20, color: "lightblue"},
    { name : 'Microscope', value: 30, color: "green"},
    { name : 'Gloves', value: 10, color: "beige"},
    { name : 'test tube', value: 40, color: "red"},
];

const PieChartBox = () => {
    return (
        <div className='pieChartBox'>
            <h1>Equipments</h1>
            <div className='chart'>
            <ResponsiveContainer width="99%" height={300}>
            <PieChart>
            <Tooltip 
            contentStyle={{ background:"white", borderRadius: "5px" }}/>
        <Pie
          data={data}
          innerRadius={"70%"}
          outerRadius={"90%"}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((item) => (
            <Cell
            key={item.name}
            fill={item.color}
                 />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
    </div>
    <div className="options">
    {data.map((item) => (
        <div className='option' key={item.name}>
        <div className='title'>
            <div className="dot" style={{ backgroundColor: item.color}}/>
            <span>{item.name}</span>
        </div>
        <span className='value'>{item.value}</span>
        </div>
    ))}
    </div>
    </div>
)
}

export default PieChartBox;