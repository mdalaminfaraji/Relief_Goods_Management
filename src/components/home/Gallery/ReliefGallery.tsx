/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox } from "lightbox.js-react";
import { Card } from "antd";

// https://i.ibb.co/zQQ78hx/SDG-1-No-Poverty-0.jpg
// https://i.ibb.co/9t3gWWX/R.jpg
const photos = [
  {
    src: "https://i.ibb.co/WPbgLpK/20200121-taal-relief-goods-gc-2.webp",
    width: 4,
    height: 3,
  },
  {
    src: "https://i.ibb.co/0mBHYvX/relief-goods.jpg",
    width: 1,
    height: 1,
  },
  {
    src: "https://i.ibb.co/Gk7mNXy/R-1.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "https://i.ibb.co/0fs466X/6.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "https://i.ibb.co/KmFcGtj/FAO-Charlie-R.webp",
    width: 3,
    height: 4,
  },
  {
    src: "https://i.ibb.co/Z8bdtrs/OIP-1.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "https://i.ibb.co/sFB0J5H/OIP.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "https://i.ibb.co/Kb0PJqx/ece076-54ac9c55f9424ec282b6ba560cfe3e21-mv2.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "https://i.ibb.co/M1yQCF3/k-SDx-Bs-UPJssp-F0-Nr-1586767050.jpg",
    width: 4,
    height: 3,
  },
];
const ReliefGallery: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Card
      style={{ maxWidth: "1280px", margin: "40px auto", paddingInline: "20px" }}
    >
      <h1 style={{ textAlign: "center", margin: "40px 0" }}>
        Relief Goods Photo Gallery
      </h1>
      <Gallery
        photos={photos}
        onClick={() => {
          setIsOpen(true);
        }}
      />
      <SlideshowLightbox
        images={photos}
        showThumbnails={true}
        open={isOpen}
        lightboxIdentifier="lbox1"
        onClose={() => {
          setIsOpen(false);
        }}
      ></SlideshowLightbox>
    </Card>
  );
};

export default ReliefGallery;
