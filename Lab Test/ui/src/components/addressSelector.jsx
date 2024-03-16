import React, { useState } from "react"
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const AddressSelector = (props) => {

    const [selectedAddress, setSelectedAddress] = useState(null);

    const handleOnChange = (e) => {
        console.log(e.target.value)
        setSelectedAddress(e.target.value);

        // Use e.target.value directly instead of selectedAddress
        props.handleAction(e.target.value);
    }

   
    return <>
        <FormControl fullWidth>
            <InputLabel id={props.LabelId}>{props.InputLabel}</InputLabel>
            <Select
                labelId={props.LabelId}
                value={selectedAddress}
                label={props.InputLabel}
                onChange={handleOnChange}
            >
                {props.addresses?.map((address) => (
                    <MenuItem key={address} value={address}>{address}</MenuItem>
                ))}
            </Select>
        </FormControl>
    </>
}

export default AddressSelector;