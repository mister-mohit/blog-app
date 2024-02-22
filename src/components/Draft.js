import { IoMdCreate } from "react-icons/io";

const Draft = () => {
  return (
    <div className="h-64 bg-red-200 px-40 pt-8 ">
      <div>
        <div className="relative h-36 w-36 border-solid border-black border-2 rounded-sm flex justify-center items-center">
          <button className='absolute border-solid border-black border-2 max-h-fit inline-block'>
            <IoMdCreate className="text-5xl" />
          </button>
        </div>
        <p>Start New Blog</p>
      </div>
      <div></div>
    </div>
  );
};

export default Draft;
