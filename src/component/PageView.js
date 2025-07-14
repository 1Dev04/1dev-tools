import React, { useEffect, useState } from "react";
import { database, ref, get, set } from "../page/Firebase";

import "../customCSS/View.css";
import "../customCSS/style-switcher.css";

const ViewCount = () => {
  const [viewCount, setViewCountState] = useState("");
  const [likeCount, setLikeCountState] = useState("");
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    // ฟังก์ชันดึงและอัพเดตจำนวนการเข้าชม
    const fetchAndUpdateViewCount = async () => {
      const viewRef = ref(database, "views");
      const snapshot = await get(viewRef);

      if (snapshot.exists()) {
        const currentCount = snapshot.val();
        const updatedCount = currentCount + 1;
        set(viewRef, updatedCount);
        setViewCountState(updatedCount);
      } else {
        set(viewRef, 1);
        setViewCountState(1);
      }
    };

    const fetchAndUpdateLikeCount = async () => {
      const likeRef = ref(database, "likes");
      const snapshot = await get(likeRef);
      if (snapshot.exists()) {
        setLikeCountState(snapshot.val());
      } else {
        set(likeRef, 0);
        setLikeCountState(0);
      }
    };

    fetchAndUpdateViewCount();
    fetchAndUpdateLikeCount();
  }, []);

  const handleLikeClick = async () => {
    if (hasLiked) return; // กดได้ครั้งเดียวจนกว่าจะ reload

    const likeRef = ref(database, "likes");
    const snapshot = await get(likeRef);

    if (snapshot.exists()) {
      const currentCount = snapshot.val();
      const updatedCount = currentCount + 1;
      var count = null;
      if (updatedCount) {
        setHasLiked(true); 
            count = currentCount + 1;
      }

      await set(likeRef, updatedCount);
      setLikeCountState(count);
      setHasLiked(true); // ห้ามกดซ้ำ

      const textAlert = document.querySelector(".body-view .text-Al");
      const iconAlert = document.querySelector(".alert .close-btn");
      

      textAlert?.classList.add("hidden");
      iconAlert?.classList.add("hidden");


    }
  };

  return (
    <div className="body-view">
      <h4 className="name">
        <i className="bx bxs-user color-icon"></i> <strong>{viewCount}</strong>
      </h4>
      <h4 className="name1 like-page" onClick={handleLikeClick}>
        <button>
          <i className="bx bxs-heart color-icon"></i>{" "}
        </button>
      </h4>
      <strong className="text-heart"> {likeCount}</strong>
      <div className="alert">
        <span className="close-btn">
          <i className="bx bxs-up-arrow-alt"></i>
        </span>
      </div>
      <br></br>
      <div className="text-Al">
        Click on the <strong>Heart</strong>.
      </div>
    </div>
  );
};

export default ViewCount;
