import CustomTabs from "@/src/components/form_modals/Tabs";
import { NextPage } from "next";
import React from "react";
import { Box } from "@mui/material";
// import OvertimeTab from "@/src/components/form_modals/Tables";
// import CustomTable from "@/src/components/form_modals/Tables";
// import OvertimeTable from "@/src/components/form_modals/OvertimeTable";
import DTR_Tables from "@/src/components/form_modals/DTR-Tables";

const TestComponent: NextPage = () => {
    return (
        <div>
            <Box>
                {/* <ColorTabs /> */}
                {/* <OvertimeTab /> */}
                {/* <CustomTable /> */}
                {/*<CustomTabs />*/}
                {/* <OvertimeTable /> */}
                {<DTR_Tables/>}
            </Box>
        </div>
    );
};

export default TestComponent;