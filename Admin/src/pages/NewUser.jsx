const NewUser = () => {
  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <h2 className="font-semibold">New User</h2>
      <div className="flex flex-col my-[20px]">
        <label htmlFor="">Full Name</label>
        <input
          type="text"
          placeholder="Enter Full Name"
          className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
        />
      </div>
      <div className="flex flex-col my-[20px]">
        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="Enter email"
          className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
        />
      </div>

      <div className="flex flex-col my-[20px]">
        <label htmlFor="">Age</label>
        <input
          type="Number"
          placeholder="Enter Age"
          className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
        />
      </div>

      <div className="flex flex-col my-[20px]">
        <label htmlFor="">Country</label>
        <input
          type="text"
          placeholder="Enter Country"
          className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
        />
      </div>



      <div className="flex flex-col my-[20px]">
        <label htmlFor="">Address</label>
        <input
          type="text"
          placeholder="Enter Address"
          className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
        />
      </div>

      <button className="bg-[#1e1e1e] cursor-pointer text-white p-[10px] w-[300px]">
            Create
          </button>



    </div>
  );
};

export default NewUser;
