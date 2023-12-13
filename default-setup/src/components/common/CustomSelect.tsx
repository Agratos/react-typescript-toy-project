import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { CSSProperties } from 'styled-components';

interface CustomSelectProps {
    value?: any;
    label?: string
    list: any[];
    selectStyle?: CSSProperties,
    itemStyle?: CSSProperties,
    onChange: (value: any) => void
}

const CustomSelect = ({value, label, list, selectStyle, itemStyle, onChange}: CustomSelectProps) => {
    return (
        <Select 
            onChange={(e) => onChange(e.target.value)}
            label={label}
            value={value}
            style={selectStyle}
            sx={{
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #dadce0",
                    borderRadius: "5px 5px 0 0",
                },
                "&.MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                        borderColor: "rgba(0, 0, 0, 0.23)"
                    },
                }
            }}
        >
            {list.map(({value, label}) => (
                <MenuItem value={value} key={value+label} style={itemStyle}>{label}</MenuItem>
            ))}
        </Select>
    )
}

export default CustomSelect