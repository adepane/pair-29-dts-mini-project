import { AppBar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { content1, content2, content3, content4 } from "../../constants/mocks/footer";
import BasicList from "../List/BasicList";

const Footer = () => {
    const [state, setState] = useState({
        mobileView: false,
    });

    const { mobileView } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        }
    }, []);

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
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '80%' }}>
                    <BasicList data={content1} />
                    {mobileView ? '' : <><BasicList data={content2} /><BasicList data={content3} /><BasicList data={content4} /></>}
                </div>
                <Typography
                    variant="subtitle2"
                    // component={"text"}
                    style={{
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