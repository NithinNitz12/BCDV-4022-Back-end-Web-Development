import React, { useEffect, useState } from "react";
import AddressSelector from "./addressSelector";
import Header from "./header";
import BlockDetails from "./blockDetails";
import WidgetsIcon from "@mui/icons-material/Widgets";

function Blocks() {
  // mock ethereum address ===> move and fetch from backend api
  const [ethereumAddresses, setEthereumAddresses] = useState(null);

  // mock block details ===> fetch from backend api
  const [selectedBlock, setSelectedBlock] = useState(null);

  // useEffect hook ===>
  // fetch the data from the backend API
  // set (useState) the Data to state to rerender
  useEffect(() => {
    fetch("http://localhost:5000/blocks/addresses")
      .then((res) => res.json())
      .then((json) => setEthereumAddresses(json))
      .catch((error) => console.error(error));
  }, []);

  const handleOnChange = (address) => {
    // alert(`fetch block details with address ${address}`);
    // fetch block details ==> backend and re-render with selected block
    console.log("block---",address);
    fetch(`http://localhost:5000/blocks/details/${address}`)
      .then((res) => res.json())
      .then((json) => setSelectedBlock(json))
      .catch((error) => console.error(error));
    
  };
  console.log(selectedBlock);

  return (
    <>
      <Header title="Blocks" headerSize="h5" icon={WidgetsIcon} />
      <AddressSelector
        InputLabel="Ethereum Block"
        LabelId="ethereum-block-select-label"
        handleAction={handleOnChange}
        addresses={ethereumAddresses}
      />

      <div class="container">
        <BlockDetails {...selectedBlock} />
      </div>
    </>
  );
}

export default Blocks;
