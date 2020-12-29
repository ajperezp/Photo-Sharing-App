import React from "react";

const post = {
  id: 1,
  description: "Fireworks from Charles River",
  likes: 35,
  author: null,
  published_at: "2020-12-29T19:11:27.052Z",
  created_at: "2020-12-29T19:11:24.772Z",
  updated_at: "2020-12-29T19:11:27.088Z",
  image: {
    id: 5,
    name: "matthew-landers-v_Ydqd4ckSM-unsplash.jpg",
    alternativeText: "",
    caption: "",
    width: 2995,
    height: 4800,
    formats: {
      thumbnail: {
        name: "thumbnail_matthew-landers-v_Ydqd4ckSM-unsplash.jpg",
        hash: "thumbnail_matthew_landers_v_Ydqd4ck_SM_unsplash_f41120fb50",
        ext: ".jpg",
        mime: "image/jpeg",
        width: 97,
        height: 156,
        size: 4.8,
        path: null,
        url:
          "/uploads/thumbnail_matthew_landers_v_Ydqd4ck_SM_unsplash_f41120fb50.jpg",
      },
      large: {
        name: "large_matthew-landers-v_Ydqd4ckSM-unsplash.jpg",
        hash: "large_matthew_landers_v_Ydqd4ck_SM_unsplash_f41120fb50",
        ext: ".jpg",
        mime: "image/jpeg",
        width: 624,
        height: 1000,
        size: 143.16,
        path: null,
        url:
          "/uploads/large_matthew_landers_v_Ydqd4ck_SM_unsplash_f41120fb50.jpg",
      },
      medium: {
        name: "medium_matthew-landers-v_Ydqd4ckSM-unsplash.jpg",
        hash: "medium_matthew_landers_v_Ydqd4ck_SM_unsplash_f41120fb50",
        ext: ".jpg",
        mime: "image/jpeg",
        width: 468,
        height: 750,
        size: 86.39,
        path: null,
        url:
          "/uploads/medium_matthew_landers_v_Ydqd4ck_SM_unsplash_f41120fb50.jpg",
      },
      small: {
        name: "small_matthew-landers-v_Ydqd4ckSM-unsplash.jpg",
        hash: "small_matthew_landers_v_Ydqd4ck_SM_unsplash_f41120fb50",
        ext: ".jpg",
        mime: "image/jpeg",
        width: 312,
        height: 500,
        size: 39.69,
        path: null,
        url:
          "/uploads/small_matthew_landers_v_Ydqd4ck_SM_unsplash_f41120fb50.jpg",
      },
    },
    hash: "matthew_landers_v_Ydqd4ck_SM_unsplash_f41120fb50",
    ext: ".jpg",
    mime: "image/jpeg",
    size: 3677.13,
    url: "/uploads/matthew_landers_v_Ydqd4ck_SM_unsplash_f41120fb50.jpg",
    previewUrl: null,
    provider: "local",
    provider_metadata: null,
    created_at: "2020-12-29T19:09:36.458Z",
    updated_at: "2020-12-29T19:10:35.971Z",
  },
};

export default ({ description, likes, url }) => {
  const API_URL = "http://localhost:1337";
  const formatImageUrl = (url) => `${API_URL}${url}`;

  return (
    <div className="Post">
      <img className="Post__Image" src={formatImageUrl(url)} />
      <h4>{description}</h4>
      <div>
        <span>Likes: {likes}</span>
      </div>
    </div>
  );
};
