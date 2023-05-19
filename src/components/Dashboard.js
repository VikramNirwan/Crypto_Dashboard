import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoins } from "../redux/action/action";
import { CryptoChart } from "./CryptoChart";
import { ExchangeCoins } from "./ExchangeCoins";
import { SideBar } from "./SideBar";
import { Portfolio } from "./Portfolio";
import { SearchBar } from "./SearchBar";
import { Header } from "./Header";

//Dashboard is the parent component

function Dashboard() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.default);

  useEffect(() => {
    if (data.coinList.length === 0) {
      dispatch(fetchCoins());
    }
  }, [data.coinList.length, dispatch]);

  return (
    <>
      <div className="bg-white my-2">
        <Header />
      </div>
      <hr />
      <div className="my-4 mx-4 bg-gray-100 backdrop-blur-md">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 sm:grid-cols-1 gap-2">
          <div className="md:col-span-3 grid-cols-3 sm:grid-cols-3 container-fluid">
            <SearchBar />
            <CryptoChart />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <Portfolio />
              <ExchangeCoins />
            </div>
          </div>
          <SideBar />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
