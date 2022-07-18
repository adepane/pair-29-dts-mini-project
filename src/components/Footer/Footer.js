import { AppBar, Typography } from "@mui/material";
import React from "react";
import { content1, content2, content3, content4 } from "../../constants/mocks/footer";
import BasicList from "../List/BasicList";

const Footer = () => {
    return (
        <AppBar
            position="static"
            sx={{
                top: 'auto',
                bottom: 0,
                maxHeight: 'auto',
                paddingX: 'auto',
                paddingY: 5,
                backgroundColor: '#141414'
            }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 950 }}>
                    <BasicList data={content1} />
                    <BasicList data={content2} />
                    <BasicList data={content3} />
                    <BasicList data={content4} />
                </div>
                <Typography
                    variant="subtitle2"
                    // component={"text"}
                    style={{
                        width: 950,
                        color: '#808080',
                        display: 'flex',
                        alignItems: 'start',
                        marginTop: 20
                    }}
                >
                    © 2022 Movies, All Right Reserved
                </Typography>
            </div>
        </AppBar>
    )
}

export default Footer;