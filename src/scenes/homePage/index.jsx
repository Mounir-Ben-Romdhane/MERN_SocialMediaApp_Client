import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import Navbar from "../navbar";
import MyPostWidget from "../widgets/MyPostWidget";
import { useSelector } from "react-redux";
import UserWidget from "../widgets/UserWidget";
import PostsWidget from "../../scenes/widgets/PostsWidget";
const HomePage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const { _id, picturePath } = useSelector((state) => state.user); 

    return (
    <Box>
        <Navbar />
        <Box
            width="100%"
            padding="2rem 6%"
            display={isNonMobileScreens ? "flex" : "block"}
            gap="0.5rem"
            justifyContent="space-between"
        >
            {/* LEFT SIDE */}
            <Box flexBasis={isNonMobileScreens ? "24%" : undefined}>
                <UserWidget userId={_id} picturePath={picturePath} />
            </Box>

            {/* CENTRE WIDGET */}
            <Box
                flexBasis={isNonMobileScreens ? "48%" : undefined}
                mt={isNonMobileScreens ? undefined : "2rem"}
            >   
                <MyPostWidget picturePath={picturePath} />
                <PostsWidget userId={_id} />
            </Box>

            {/* RIGHT SIDE */}
            {isNonMobileScreens &&
                <Box flexBasis="24%"></Box>

            }

        </Box>
    </Box>
    );
}
export default HomePage;