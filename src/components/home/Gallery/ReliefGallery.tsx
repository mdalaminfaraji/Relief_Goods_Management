/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox } from "lightbox.js-react";
const photos = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1,
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 4,
    height: 3,
  },
];
const ReliefGallery: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>
        My Photo Gallery
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
    </div>
  );
};

export default ReliefGallery;
