import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import TopBanner from "../../shared/topBanner/TopBanner";

const VideoChat = () => {
  const [roomCode, setRoomCode] = useState("");
  const [meetingError, setMeetingError] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRoomCode = (event) => {
    event.preventDefault();
    if (roomCode !== "445566") {
      setMeetingError("Your meeting ID is not valid!");
    } else {
      navigate(`/room/${roomCode}`);
    }
  };

  return (
    <div>
      <TopBanner>Meeting Information</TopBanner>
      <div className="py-32 ">
        <h1 className="text-center text-red-700 font-semibold text-2xl py-4">
          {roomCode && roomCode !== "445566" ? meetingError : ""}
        </h1>
        <div className="flex items-center justify-center">
          <form action="" onSubmit={handleRoomCode}>
            <label htmlFor="roomCode" className="font-semibold text-xl">
              Join Meeting
            </label>

            <div>
              <input
                type="text"
                required
                placeholder="Your name"
                id="roomCode"
                className="border-spacing-1 border border-gray-400 outline-0 h-10 p-4 my-2 max-w-[100%]"
                defaultValue={user?.displayName}
                readOnly
              />
            </div>
            <div>
              <input
                type="text"
                required
                placeholder="Meeting ID or personal link name"
                id="roomCode"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                className="border-spacing-1 border border-gray-400 outline-0 h-10 p-4 my-2"
              />
            </div>
            <Button variant="contained" type="submit">
              Join meeting
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VideoChat;
