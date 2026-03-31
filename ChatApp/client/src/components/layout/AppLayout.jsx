import React from 'react'
import { Drawer, Grid, Skeleton } from "@mui/material";
import Header from "./Header";
import Title from '../shared/Title';
import ChatList from '../specific/ChatList';
import { samepleChats } from '../../constants/SampleData';

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Title />
        <Header />

        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            size={{ xs: 12, sm: 4, md: 3, lg: 3 }}
            sx={{
              display: { xs: "none", sm: "block" },
            }}
            height={"100%"}
          >
           <ChatList chats={samepleChats}/>
          </Grid>
          <Grid item size={{ xs: 12, sm: 8, md: 5, lg: 6 }} height={"100%"}>
            <WrappedComponent {...props} />
          </Grid>

          <Grid
            item
            size={{ xs: 12, sm: 12, md: 4, lg: 3 }}
            height={"100%"}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
              bgcolor: "rgba(0,0,0,0.85)",
            }}
          >
            Third
          </Grid>
        </Grid>
      </>
    )
  }
}

export default AppLayout;