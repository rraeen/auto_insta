const { InsDB } = require("../config/db");
const axios = require("axios");
const InstaModel = require("../InsModels/InstaChatModel");
const InstaModelLocal = require("../models/InstaModel");
const ChatSettingModel = require("../models/ChatSettingModel");
const baseUrl="https://graph.instagram.com/v22.0"

const fetchInstagramProfilePic = async (username) => {
    // try {
    //     const url = `https://www.instagram.com/${username}/?__a=1&__d=dis`;
    //     const response = await axios.get(url, {
    //         headers: {
    //             'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    //         }
    //     });

    //     const data = response.data;
    //     const profilePic = data?.graphql?.user?.profile_pic_url;
        
    //     console.log("Profile Picture URL:", response);
    //     return profilePic;
        
    // } catch (error) {
    //     console.error("Error fetching Instagram data:", error.message);
    // }
};

const getFriendsList = async (req, res) => {
  try {
    const users = await InstaModel.find({});
    if (users && users.length > 0) {
      return res.status(200).json({ userList: users });
    }
    return res.status(404).json({ userList: [], message: "User not found" });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
const setAutomationChat = async (req, res) => {
  const {userId,friendId}=req.body
  try {
    const isPresent= await ChatSettingModel.find({userId,friendId});
    if(!isPresent){
      await ChatSettingModel.create(req.body)
      return res.status(201).json({ status:true,msg:"Chat setting saved Successfully"});
    }
    await ChatSettingModel.updateOne({userId,friendId},{ $set:req.body })
    return res.status(200).json({ status:true,msg:"Chat setting updated Successfully"});
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
const getMyPosts = async (req, res) => {
  try {
    const url = `${baseUrl}/me/media?fields=id,caption,media_url,media_type,thumbnail_url,permalink,timestamp,metric`;
    const result=await axios.get(url,{
      headers: {
        Authorization: `Bearer ${process.env.INS_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    })

    if (result?.data?.data && result?.data?.data?.length > 0) {
      return res.status(200).json({ mediaList: result?.data?.data });
    }
    return res.status(404).json({ mediaList: [], message: "User not found" });
  } catch (err) {
    console.log(err)
    return res.status(400).json({ message: err.message });
  }
};

module.exports = { getFriendsList,getMyPosts,setAutomationChat };
