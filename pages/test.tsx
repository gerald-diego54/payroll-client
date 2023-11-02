import { NextPage } from "next";
import React from "react";
import { Box } from "@mui/material";

import Button from "@/src/ui/Button";

const TestComponent: NextPage = () => {
    return (
        <div>
            <Box>
                <Button />
            </Box>
        </div>
    );
};

export default TestComponent;
