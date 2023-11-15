import * as React from "react";
import { Tabs as MUITabs, Tab, styled } from "@mui/material";
import { EnumTabs } from "@/types/tabs.d";

const CustomTabs: React.FC<{ onTabChange: (tabs: EnumTabs) => void; tabName: EnumTabs }> = ({
    onTabChange,
    tabName,
}) => {
    const Tabs = styled(MUITabs)(({ theme }) => ({
        "& .MuiTab-root.Mui-selected": {
            color: "#ffffff",
            borderBottom: "2px solid transparent",
        },
    }));

    return (
        <Tabs
            TabIndicatorProps={{ style: { backgroundColor: "#ffffff" } }}
            value={tabName}
            onChange={(event, tab) => onTabChange(tab)}
            variant="fullWidth"
        >
            <Tab value={EnumTabs.TAB_ONE} label={EnumTabs.TAB_ONE} sx={{ color: "#ffffff" }} />
            <Tab value={EnumTabs.TAB_TWO} label={EnumTabs.TAB_TWO} sx={{ color: "#ffffff" }} />
            <Tab value={EnumTabs.TAB_THREE} label={EnumTabs.TAB_THREE} sx={{ color: "#ffffff" }} />
            <Tab value={EnumTabs.TAB_FOUR} label={EnumTabs.TAB_FOUR} sx={{ color: "#ffffff" }} />
            <Tab value={EnumTabs.TAB_FIVE} label={EnumTabs.TAB_FIVE} sx={{ color: "#ffffff" }} />
        </Tabs>
    );
};

export default CustomTabs;
