import React, {useState} from "react";
import Data from "./Data";
import Details from "./Details";


export default function DataPage() {
  const [allData, setAllData] = useState([]);

  function addData(newData) {
    setAllData((prevNotes) => {
      return [...prevNotes, newData];
    });
  }

  return (
    <div>
      <div>
        <Details onAdd={addData} />
        {allData.map((dataItem, index) => {
          return (
            <Data
              key={index}
              work={dataItem.work}
              about={dataItem.about}
              fName={dataItem.fName}
              lName={dataItem.lName}
              email={dataItem.email}
              country={dataItem.country}
              city={dataItem.city}
              state={dataItem.state}
              zip={dataItem.zip}
              street={dataItem.street}
            />
          );
        })}
      </div>
      <Data></Data>
    </div>
  );
}
