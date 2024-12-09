import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid'
const Parcels = () => {

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "senderName", headerName: "Sender Name", width: 150 },
    { field: "recipientName", headerName: "Recipient Name", width: 150 },
    { field: "from", headerName: "From", width: 130 },
    { field: "to", headerName: "To", width: 130 },
    // { field: "weight", headerName: "Weight (kg)", type: "number", width: 130 },
    { field: "cost", headerName: "Cost ($)", type: "number", width: 130 },
    

    
  ];

  const rows = [
    {
      id: 1,
      senderName: "John Doe",
      recipientName: "Jane Smith",
      from: "New York",
      to: "Los Angeles",
      weight: 10,
      cost: 50,
    },
    {
      id: 2,
      senderName: "Alice Brown",
      recipientName: "Bob Johnson",
      from: "Chicago",
      to: "Miami",
      weight: 15,
      cost: 75,
    },
    {
      id: 3,
      senderName: "Chris Evans",
      recipientName: "Emma Davis",
      from: "Houston",
      to: "San Francisco",
      weight: 20,
      cost: 100,
    },
    {
      id: 4,
      senderName: "Laura Wilson",
      recipientName: "Michael Brown",
      from: "Dallas",
      to: "Seattle",
      weight: 12,
      cost: 60,
    },
    {
      id: 5,
      senderName: "Peter Parker",
      recipientName: "Gwen Stacy",
      from: "Phoenix",
      to: "Denver",
      weight: 8,
      cost: 40,
    },
    {
      id: 6,
      senderName: "Tony Stark",
      recipientName: "Steve Rogers",
      from: "Boston",
      to: "Atlanta",
      weight: 18,
      cost: 90,
    },
    {
      id: 7,
      senderName: "Bruce Wayne",
      recipientName: "Clark Kent",
      from: "Detroit",
      to: "Orlando",
      weight: 14,
      cost: 70,
    },
    {
      id: 8,
      senderName: "Diana Prince",
      recipientName: "Barry Allen",
      from: "San Diego",
      to: "Portland",
      weight: 22,
      cost: 110,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-[3%] ml-[5%%]">
      <div className="bg-[#fff] h-auto w-[70vw] rounded-md p-[30px]">
        <Link to="/myparcels">
          <FaArrowLeft className="text-[#444] text-[18px] m-2 cursor-pointer" />
        </Link>

        <div className="flex justify-between p-[10px]">
          <span className="text-[18px] text-[#444]">All Parcels</span>
          <span className="font-semibold text-[#444]">Anisetty Chopricaa</span>  
        </div>

        <div className="p-3">
        <DataGrid rows={rows} columns={columns}
         checkboxSelection 

        />
       
        </div>
      </div>
    </div>
  );
};

export default Parcels;
