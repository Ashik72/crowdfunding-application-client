import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import "./Room.css";
var roomID = getUrlParams().get("roomID") || randomID(12);
function randomID(len) {
  const meetingUrl = window.location.protocol + window.location.host + window.location.pathname + "?roomID=" +roomID
  console.log(meetingUrl);
  let result = "";
  if (result) return result;
  var chars = "1234567890",
    maxPos = chars.length,
    i;
  len = len || 12;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(url = window.location.href) {
  let urlStr = url.split("?")[1];
  return new URLSearchParams(urlStr);
}

function Room() {
  const { user } = useContext(AuthContext);
  const userMeetName = user?.displayName;
  const userImg = user?.photoURL;
  let myMeeting = async (element) => {
    // generate Kit Token
    const appID = 485293435;
    const serverSecret = "16bdd2d48829208c6c6b29022a0099ea";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      userMeetName
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Meeting link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
  };
  return (
    <div className=" bg-slate-400">
      <div className="h-[100vh] w-[90%] mx-auto relative meet-wrapper">
        <div className=" meeting-nav flex item-center justify-between max-w-[90%] mx-auto py-4 px-4">
          <Link to="/">
            {" "}
            <img
              src="https://i.ibb.co/86Knzb1/logo1.png"
              alt="logo"
              className="max-w-[30%]"
            />
          </Link>
          <div className="threeDot text-2xl cursor-pointer text-white">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>
        <div
          className="myCallContainer max-w-[90%] mx-auto rounded-lg h-full pt-2  pb-7"
          ref={myMeeting}
        ></div>
      </div>
    </div>
  );
}

export default Room;
