import { HiArrowSmallUp, HiArrowLongDown } from "react-icons/hi2";
import { PieChart } from "@mui/x-charts/PieChart";

const Home = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="flex items-center">
        {/* Card 1 */}
        <div className="flex flex-col text-[#d9d9d9] h-[250px] w-[350px] shadow-lg m-[20px]">
          <div className="flex flex-col items-center justify-center mt-[10%]">
            <h1 className="text-[20px] font-semibold">Users</h1>
            <div className="flex items-center mt-[20px]">
              <HiArrowSmallUp className="text-[28px] text-green-500" />
              <HiArrowLongDown className="text-[28px] text-red-500" />
            </div>
            <span className="mt-[20px] text-[18px]">100</span>
          </div>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col text-[#d9d9d9] h-[250px] w-[350px] shadow-lg m-[20px]">
          <div className="flex flex-col items-center justify-center mt-[10%]">
            <h1 className="text-[20px] font-semibold">Delivered Parcels</h1>
            <div className="flex items-center mt-[20px]">
              <HiArrowSmallUp className="text-[28px] text-green-500" />
              <HiArrowLongDown className="text-[28px] text-red-500" />
            </div>
            <span className="mt-[20px] text-[18px]">100</span>
          </div>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col text-[#d9d9d9] h-[250px] w-[350px] shadow-lg m-[20px]">
          <div className="flex flex-col items-center justify-center mt-[10%]">
            <h1 className="text-[20px] font-semibold">Pending Parcels</h1>
            <div className="flex items-center mt-[20px]">
              <HiArrowSmallUp className="text-[28px] text-green-500" />
              <HiArrowLongDown className="text-[28px] text-red-500" />
            </div>
            <span className="mt-[20px] text-[18px]">100</span>
          </div>
        </div>
      </div>

      {/* Middle Section: Pie Chart and Recent Users */}
      <div className="flex items-center justify-between">
        {/* Pie Chart */}
        <div className="h-[450px] w-[500px] text-{#fff}">
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: "Pending Parcels" },
                  { id: 1, value: 15, label: "Delivered Parcels" },
                  { id: 2, value: 20, label: "Rejected Parcels" },
                ],
                innerRadius: 30,
                outerRadius: 100,
                paddingAngle: 5,
                cornerRadius: 5,
                startAngle: -45,
                endAngle: 225,
                cx: 150,
                cy: 150,
              },
            ]}
          />
        </div>

        {/* Recent Users */}
        <div className="h-[350px] w-[300px] shadow-lg p-[20px] ml-[20px]">
          <h2 className="flex px-[20px] text-[#fff]">Recent Users</h2>
          <ol className="flex font-semibold flex-col justify-start px-[20px] mt-[10px] text-[#D9D9D9]">
            <li>1. Anisetty Chopricaa</li>
            <li>2. Chinni Pavani</li>
            <li>3. Harini A G</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Home;
