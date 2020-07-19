import React from "react";
import TextField from "@material-ui/core/TextField";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import "./styles.scss";
import { Box } from "@material-ui/core";

export default function Input() {
    return (
        <Box
            display="flex"
            id="input-box"
            p={3}
            alignContent="center"
            style={{ background: "rgba(255,255,255,0.6)" }}
        >
            <Box mr={2}>
                <ExploreOutlinedIcon
                    style={{ width: "60px", height: "60px" }}
                />
            </Box>
            <Box flexGrow={1}>
                <TextField id="input-local" fullWidth />
            </Box>
        </Box>
    );
}
