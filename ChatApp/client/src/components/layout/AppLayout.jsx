import { Drawer, Grid, Skeleton } from "@mui/material";
import Header from "./Header";
import Title from '../shared/Title';
import ChatList from '../specific/ChatList';
import { samepleChats } from '../../constants/SampleData';
import { useParams } from "react-router-dom";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {

    const params = useParams();
    const chatId = params.chatId;

    const handleDeleteChat = (e, chatId, groupChat) => {
    //   dispatch(setIsDeleteMenu(true));
    //   dispatch(setSelectedDeleteChat({ chatId, groupChat }));
    //   deleteMenuAnchor.current = e.currentTarget;
      e.preventDefault();
      console.log("delete", chatId, groupChat);
    };

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
           <ChatList chats={samepleChats} chatId={chatId} handleDeleteChat={handleDeleteChat}/>
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