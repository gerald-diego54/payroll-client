// import ColorTabs from "@/src/components/form_modals/FormNavbar";
import { NextPage } from "next";
import React from "react";
import { Box } from "@mui/material";
import OvertimeTab from "@/src/components/form_modals/OvertimeTab";
import DenseTable from "@/src/components/form_modals/OvertimeTab";
import OvertimeForm from "@/src/components/form_modals/FormComponent";
import Button from "@/src/ui/Button";

const TestComponent: NextPage = () => {
    return (
        <div>
            <Box>
                {/* <ColorTabs /> */}
                {/* <OvertimeTab /> */}
                {/* <DenseTable /> */}
                <Button />
            </Box>
        </div>
    );
};

export default TestComponent;
