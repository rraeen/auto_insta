import serviceUtil from "..";
import axios from "axios";
const insUrl = process.env.REACT_APP_BACKEND_URL_INS;

const createAppoinment = (payload) => {
  return serviceUtil
    .post("add-appoinment", payload)
    .then((res) => {
      const data = res && res.data;
      return data;
    })
    .catch((err) => {
      const errRes = err && err.response.data;
      return errRes;
    });
};
const getChat = (id) => {
  return serviceUtil
    .getById("socket/conversation", id)
    .then((res) => {
      const data = res && res.data;
      return data;
    })
    .catch((err) => {
      const errRes = err && err.response.data;
      return errRes;
    });
};
const createInstaConfig = (payload) => {
  return serviceUtil
    .post("/user/instaregistration", payload)
    .then((res) => {
      const data = res && res.data;
      return data;
    })
    .catch((err) => {
      const errRes = err && err.response.data;
      return errRes;
    });
};
const getInstance = () => {
  return serviceUtil
    .get("/user/getInstance")
    .then((res) => {
      const data = res && res.data;
      return data;
    })
    .catch((err) => {
      const errRes = err && err.response.data;
      return errRes;
    });
};
const getInstFriends = () => {
  return serviceUtil
    .get("/insta/friends")
    .then((res) => {
      const data = res && res.data;
      return data;
    })
    .catch((err) => {
      const errRes = err && err.response.data;
      return errRes;
    });
};
const sendInsMsg = (data) => {
  return axios
    .post(`${insUrl}/sendmessage`, data)
    .then((res) => res?.data)
    .catch(
      (err) => err?.response?.data || { error: "Network or server error" }
    );
};

const getInsPost = () => {
  return serviceUtil
    .get(`/insta/getPost`)
    .then((res) => res?.data)
    .catch(
      (err) => err?.response?.data || { error: "Network or server error" }
    );
};
const setAutomationChat = ({data}) => {
  return serviceUtil
    .post(`/insta/setautomationChat`,data)
    .then((res) => res?.data)
    .catch(
      (err) => err?.response?.data || { error: "Network or server error" }
    );
};
const sendZero = () => {
  return axios
    .post(`https://ins.kiistbazar.com/zero/send`)
    .then((res) => res)
    .catch(
      (err) => err?.response?.data || { error: "Network or server error" }
    );
};

export {
  createAppoinment,
  getChat,
  createInstaConfig,
  getInstance,
  getInstFriends,
  sendInsMsg,
  getInsPost,
  setAutomationChat,
  sendZero
};
