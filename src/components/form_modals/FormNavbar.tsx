import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export default function ColorTabs() {
    const [value, setValue] = React.useState("one");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ backgroundColor: "transparent", width: "100%", height: "100vh" }}>
            <Tabs value={value} onChange={handleChange} indicatorColor="primary">
                <Tab value="one" label="DTR LOGS" sx={{ color: "#044453" }} />
                <Tab value="two" label="OVERTIME TAB" sx={{ color: "#044453" }} />
                <Tab value="three" label="OVERTIME FORM" sx={{ color: "#044453" }} />
                <Tab value="four" label="LEAVE FORM" sx={{ color: "#044453" }} />
                <Tab value="five" label="LEAVE TAB" sx={{ color: "#044453" }} />
            </Tabs>
            <Divider />
        </Box>
    );
}
