import './home.scss';
import ChartBox from '../../components/chartBox/ChartBox';
import { chartBoxUser, chartBoxCalibrationDue, chartBoxEquipment, chartBoxReport, barChartBoxRevenue, stockAlertData, topItemsData } from '../../data';
import BarChartBox from '../../components/barChartBox/BarChartBox';
import PieChartBox from '../../components/pieChartBox/PieChartBox';
import StockAlert from '../../components/stockAlert/StockAlert';
import TopItems from '../../components/topItems/TopItems';



const Home = () => {
  return (
    <div className="containerr">
      <div className="home">
        <div className="box box1">
          <ChartBox {...chartBoxUser} link="/home/transaction"/>
        </div>
        <div className="box box2">
          <ChartBox {...chartBoxEquipment} link="/home/inventory"/>
        </div>
        <div className="box boxx3">
          <ChartBox {...chartBoxReport} link="/home/reports"/>
        </div>
        <div className="box box4">
          <ChartBox {...chartBoxCalibrationDue } link="calibration-due"/>
        </div>
        <div className="box box5">
          <BarChartBox {...barChartBoxRevenue }/>
        </div>
        <div className="box box6">
          <PieChartBox></PieChartBox>
        </div>
        <div className="box box7">
          <StockAlert data ={stockAlertData}/>
        </div>
        <div className="box box8">
        <TopItems data ={topItemsData}/>
         </div>
    </div>
    </div>
  );
};

export default Home;
