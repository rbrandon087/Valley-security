import React from "react";
export interface IVideoBackgroundProps {
  name: string;
  video: string;
}

const VideoBackground: React.FunctionComponent<IVideoBackgroundProps> = ({
  name,
}) => {
  return (
    <div className="relative h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        {/* Use the absolute path to your MP4 video */}
        <source src="@public/Vegas.mp4" type="Video/mp4" />
        dxs Your browser does not support the video tag.
      </video>
      {/* Add other content on top of the video */}
    </div>
  );
};

export default VideoBackground;
