import DonutChart from "components/DonutChart";
import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <NavBar />

      <div className="container">
        <h1 className="text-center text-primary py-3">Dashboard de Vendas Spring React Show !!! </h1>


        <div className="row px-3">
          <div className="col -sm -6">
            <h5 className="text-center text_secundary">Positivação das Vendas (%) !</h5>
            <BarChart />
          </div>  
          <div className="col -sm -6">
            <h5 className="text-center text_secundary">Participação por Vendedor (%)!</h5>
            <DonutChart />
          </div>
        </div>


        <div className="py-3">
          <h2 className="text-center text-primary"> Extrato das Vendas !</h2>
        </div>


        <DataTable />

      </div>

      <Footer />
    </>
  );
}

export default App;
