import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { TabName } from "@/types/tabs.d";

const CustomTabs = () => {
    const [value, setValue] = React.useState("one");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ backgroundColor: "transparent", width: "100%", height: "100vh" }}>
            <Tabs value={value} onChange={handleChange} indicatorColor="primary">
                <Tab value={TabName.TAB_ONE} label="DTR LOGS" sx={{ color: "#044453" }} />
                <Tab value={TabName.TAB_TWO} label="OVERTIME TAB" sx={{ color: "#044453" }} />
                <Tab value={TabName.TAB_THREE} label="OVERTIME FORM" sx={{ color: "#044453" }} />
                <Tab value={TabName.TAB_FOUR} label="LEAVE FORM" sx={{ color: "#044453" }} />
                <Tab value={TabName.TAB_FIVE} label="LEAVE TAB" sx={{ color: "#044453" }} />
            </Tabs>
            <Divider />
        </Box>
    );
};

export default CustomTabs;
