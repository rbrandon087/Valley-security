import React from "react";

export interface IGalleryProps {
  name: string;
}

const Gallery: React.FunctionComponent<IGalleryProps> = ({ name }) => {
  return <div>Gallery</div>;
};

export default Gallery;
