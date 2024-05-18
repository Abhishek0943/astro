import React, { useEffect, useState } from "react";
import { IoMdChatbubbles } from "react-icons/io";

function SessionEarning() {
  const SessionArray = [
    {
      name: "vinay",
      timing: "03/09/2024",
      rate: "★★★★",
      earning: "990",
    },
    {
      name: "Shreyansh",
      timing: "22/04/2024",
      rate: "★★★",
      earning: "900",
    },
    {
      name: "kritika",
      timing: "17/12/2024",
      rate: "★",
      earning: "340",
    },
    {
      name: "Nitin",
      timing: "22/10/2024",
      rate: "★★★★★",
      earning: "500",
    },
    {
      name: "Shyam",
      timing: "09/01/2024",
      rate: "★★★★",
      earning: "2000",
    },
    {
      name: "Shreyansh",
      timing: "22/04/2024",
      rate: "★★★",
      earning: "900",
    },
    {
      name: "Nitin",
      timing: "22/10/2024",
      rate: "★★★★★",
      earning: "500",
    },
    {
      name: "vinay",
      timing: "03/09/2024",
      rate: "★★★★",
      earning: "990",
    },
    {
      name: "kritika",
      timing: "17/12/2024",
      rate: "★",
      earning: "340",
    },
  ];

  return (
    <>
      <div style={{ padding: "10px 2%" }}>
        <div className="flex align-middle justify-between text-black">
          <h2 className="text-2xl font-bold">Session</h2>
        </div>
        <div className="overflow-auto">
          <table className="w-[100%] mt-[20px]">
            <thead className="bg-black">
              <tr>
                <th className="p-[10px] w-[70px] text-white border border-white cursor-default">
                  NO.
                </th>
                <th className="p-[10px] text-white border border-white cursor-default">
                  Name
                </th>
                <th className="p-[10px] w-[70px] text-white border border-white cursor-default">
                  Time
                </th>
                <th className="p-[10px] w-[70px] text-white border border-white cursor-default">
                  Rating
                </th>
                <th className="p-[10px] w-[70px] text-white border border-white cursor-default">
                  Earning
                </th>
                <th className="p-[10px] w-[70px] text-white border border-white cursor-default">
                  Chat
                </th>
              </tr>
            </thead>
            <tbody className="text-white">
              {SessionArray?.map((e, i) => (
                <TableDate e={e} i={i} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
const TableDate = ({ e, i }) => {
  const [name, setName] = useState(e.name);
  const [timing, setTiming] = useState(e.timing);
  const [rating, setRating] = useState(e.rate);
  const [earning, setEarning] = useState(e?.earning);

  return (
    <>
      <tr>
        <td className="bg-white p-[10px] text-center w-[70px] text-black border border-black cursor-pointer">
          {i + 1}
        </td>
        <td className="bg-white p-[10px] text-center w-[30%] text-black border border-black cursor-pointer">
          {name}
        </td>
        <td className="bg-white p-[10px] text-center w-[30%] text-black border border-black cursor-pointer">
          {timing}
        </td>
        <td className="bg-white p-[10px] text-center w-[30%] text-black border border-black cursor-pointer">
          {rating}
        </td>
        <td className="bg-white p-[10px] text-center w-[30%] text-black border border-black cursor-pointer">
          {earning}
        </td>
        <td className="bg-white p-[10px] text-center w-[30%] text-black border border-black pl-[18px] cursor-pointer">
          <IoMdChatbubbles
            // onClick={() => setModal(true)}
            className="text-black cursor-pointer"
          />
        </td>
      </tr>
    </>
  );
};
export default SessionEarning;
