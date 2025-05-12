const Conversation = require("../models/Conversation");
const Message = require("../models/Message");
const userModel = require("../models/userModel");

const getOnlineUsers = async (users) => {
    try {
      const onlineUsers = await userModel.find(
        { _id: { $in: Object.keys(users) } },
        'username name email role'
      );
      return onlineUsers;
    } catch (error) {
      console.error('Error fetching online users:', error);
      return [];
    }
  };


const getConversation =  async (req, res) => {
  const usrIdA=req?.params?.id
  const usrIdB=req?.user?.id
    try {
      const conversation = await Conversation.findOne({
        participants: { $all: [usrIdA, usrIdB] },
      });
      if(conversation){
        const msg=await Message.find({conversationId:conversation._id})
        res.status(200).json(msg);
      } else {
        const newConversation = new Conversation({
          participants: [usrIdA, usrIdB],
        });
        await newConversation.save();
      }
    } catch (error) {
      console.error('Error fetching online users:', error);
      return [];
    }
  };


  module.exports = { getOnlineUsers,getConversation };