import React from "react";
import { Box } from "@material-ui/core";

import PostEditor from "./Editor";
import PostPreview from "./Preview";
import { PostProvider } from "../../../context/PostContext";
import BottomBar from "./BottomBar";

function NewPost() {

    return (
      <PostProvider>
        <Box display='flex' height='100%' overflow='scroll'>
            <Box width='50%' height='calc(90vh - 70px)' padding={2} borderRight='1px solid #ddd'>
              <PostEditor/>
            </Box>

            <Box width='50%' height='100%' padding={2}>
              <PostPreview/>
            </Box>

            <Box>
                <BottomBar></BottomBar>
            </Box>
        </Box>
      </PostProvider>
    )
}

export default NewPost;