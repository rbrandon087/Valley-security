import React from "react";
import Vegas from "../public/las-vegas.jpg";

export interface IVideoPlayerProps {
  name: string;
}

const VideoPlayer: React.FunctionComponent<IVideoPlayerProps> = ({ name }) => {
  const videoUrl = "https://vimeo.com/929226812?share=copy";
  return (
    <div className="h-screen">
      <img
        src={Vegas}
        className="absolute -top-8 left-0 w-full h-full object-cover mt-8"
      ></img>
    </div>
  );
};

export default VideoPlayer;
