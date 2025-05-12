import { Box, Divider, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useEffect, useRef, useState } from "react";
import SearchInput from "../../components/atoms/InputBox/SearchInput";
import Avtar from "../../components/atoms/Avtar/Avtar";
import GetMessage from "../../components/atoms/Message/GetMessage";
import SendMessage from "../../components/atoms/Message/SendMessage";
import SendIcon from "@mui/icons-material/Send";
import { useTheme } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import {
  connectSocket,
  setOnlineNotification,
} from "../../redux/socketReducer";
import {
  getInstFriends,
  sendInsMsg,
} from "../../services/userServices/allServices.js";
import ScrollUp from "../../components/atoms/ScrollUp";
import { useNavigate, useParams } from "react-router-dom";
import GlassModal, {
  SettingsToggle,
} from "../../components/atoms/modelPopup/GlassModal.js";
import DropDownInput from "../../components/atoms/InputBox/DropDownInput.js";
import TextAreaInput from "../../components/atoms/InputBox/TextAreaInput.js";
import { GlassSwitch } from "../../components/atoms/Button/GlassSwitch.js";
import RobotButton from "../../components/atoms/icons/RobotButton.js";

function isKeywordMatching(keyword, str) {
  if (!keyword || !str) return false;
  const regex = new RegExp(keyword, "i");
  return regex.test(str);
}

function DoctorSupport() {
  const nav = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [botActive, setBotActive] = useState(true);
  const {id}=useParams()
  const instanceId = useSelector((state) => state.user.instaInstanceId);

  const note = useSelector((state) => state.socket.onlineNotification);
  const [chat, setChat] = useState("");
  const [seletedUser, setSeletedUser] = useState();
  const [chats, setChats] = useState([]);
  const dis = useDispatch();
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [filternlineUsers, setFilterOnlineUsers] = useState([]);
  // const {onlineUsers}=useSelector((state)=>state.socket)
  const getFriends = async () => {
    const res = await getInstFriends();
    if (res?.userList?.length > 0) {
      setOnlineUsers(res?.userList);
      setFilterOnlineUsers(res?.userList);
      setSeletedUser((o) => {
        return res?.userList.find((v) => o?.instaId == v?.instaId);
      });
    }
  };
  const [chatSettingData, setChatSettingData] = useState({
    userId: instanceId,
    friendId: "",
    mode: "",
    systemPrompt: "",
    active: false,
  });

  const handleChat = (e) => {
    setChat(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      userId: seletedUser.instaId,
      msg: chat,
    };
    setSeletedUser((o) => {
      const newobj = {
        msg: chat,
        userId: seletedUser.instaId,
        user: "self",
      };
      return {
        ...o,
        chatArr: [...o.chatArr, newobj],
      };
    });
    const res = await sendInsMsg(payload);
    setChat("");
    // getFriends()
  };

  const dispatch = useDispatch();
  const handleConnect = () => {
    dispatch(connectSocket());
  };

  const handleChange = (e) => {
    setChatSettingData((o) => {
      return {
        ...o,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSearch = (e) => {
    const val = e.target.value;
    if (!val) {
      setFilterOnlineUsers(onlineUsers);
    } else {
      setFilterOnlineUsers(() => {
        return onlineUsers.filter((o) => isKeywordMatching(val, o.name));
      });
    }
  };

  const { palette } = useTheme();
  const { barOpen } = useSelector((state) => state.user);
  console.log(chatSettingData);

  useEffect(() => {
    getFriends();
  }, [note]);
  useEffect(() => {
    setChatSettingData((o) => ({
      ...o,
      userId: id,
      friendId: seletedUser?.instaId,
    }));
  }, [id,seletedUser]);

  return (
    <Box sx={{ height: "100vh" }}>
      <Grid container>
        <Grid size={3} className=" h-screen">
          <Box my={3.25}>
            <SearchInput handleSearch={handleSearch} />
            {/* <button onClick={handleConnect}>Connect Socket</button> */}
          </Box>
          <Divider />
          <Box sx={{ overflow: "auto", height: "75vh" }}>
            {filternlineUsers?.length > 0 &&
              filternlineUsers.map((o) => (
                <Avtar user={seletedUser} setUser={setSeletedUser} data={o} />
              ))}
          </Box>
        </Grid>
        <Grid size={9} sx={{ borderLeft: `2px solid ${palette.s}` }}>
          <Box sx={{ height: "12vh" }}>
            {seletedUser && (
              <>
                <div
                  className={`flex justify-start items-center p-5 'bg-slate-800' duration-300 transition-colors w-full`}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <div className={`flex justify-start items-center`}>
                    <div className="avatar mr-2">
                      <div className="ring-primary ring-offset-base-100 w-12 rounded-full">
                        <img
                          src={
                            seletedUser?.profile_pic ||
                            "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                          }
                          alt="User Avatar"
                        />
                      </div>
                    </div>
                    <div className="ml-1 flex justify-center items-center">
                      <h1 className="h6">{seletedUser?.name || ""}</h1>
                    </div>
                  </div>
                  {/* <IconButton onClick={()=> nav(`/dashboard/${instanceId?`${instanceId}/chatSettings` :"config"}`)}> */}
                  {/* <GlassSettingsIcon /> */}
                  <div className="flex justify-center items-center">
                    <RobotButton />
                    <SettingsToggle onClick={() => setIsOpen((o) => !o)} />
                  </div>

                  {/* </IconButton> */}
                </div>
              </>
            )}
          </Box>
          <Divider />
          <div className="chatbg">
            <ScrollUp data={seletedUser?.chatArr}>
              {seletedUser ? (
                seletedUser?.chatArr?.map((o, i) =>
                  o.user == "self" ? (
                    <SendMessage key={i} data={o} />
                  ) : (
                    <GetMessage key={i} data={o} />
                  )
                )
              ) : (
                <div className="flex justify-center items-center h-[66vh]">
                  No user selected
                </div>
              )}
              {/* <div ref={messagesEndRef} /> */}
            </ScrollUp>
            {seletedUser && (
              <Box pb={2}>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  className="flex items-center gap-2 m-2 bg-transparent mx-5 my-3"
                >
                  <input
                    type="text"
                    value={chat}
                    onChange={handleChat}
                    className="grow outline-none input input-bordered"
                    placeholder="Search"
                  />
                  <IconButton type="submit" sx={{ marginLeft: -6.5 }}>
                    <SendIcon />
                  </IconButton>
                </Box>
              </Box>
            )}
          </div>
        </Grid>
      </Grid>
      <GlassModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={
          <div className="flex">
            <SettingsToggle />
            <h3 className="text-xl font-semibold text-white ml-2">
              Chat Settings-{seletedUser?.name}
            </h3>
          </div>
        }
      >
        <div>
          <div className="flex justify-end items-center">
            <GlassSwitch
              checked={chatSettingData?.active}
              onChange={(e) =>
                handleChange({
                  target: { name: "active", value: e.target.checked },
                })
              }
            />
          </div>
          <DropDownInput
            name="mode"
            value={chatSettingData?.mode}
            onChange={handleChange}
          />
          <TextAreaInput
            name={"systemPrompt"}
            value={chatSettingData?.systemPrompt}
            onChange={handleChange}
          />
        </div>
      </GlassModal>
    </Box>
  );
}

export default DoctorSupport;
