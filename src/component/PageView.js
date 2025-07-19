import React, { useEffect, useState } from "react";
import {
  database,
  ref,
  get,
  set,
  onValue,
  onDisconnect,
} from "../page/Firebase";
import { v4 as uuidv4 } from "uuid";

import "../customCSS/View.css";
import "../customCSS/style-switcher.css";

const ViewCount = () => {
  const [viewCount, setViewCountState] = useState("");
  const [likeCount, setLikeCountState] = useState("");
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    // ฟังก์ชันดึงและอัพเดตจำนวนการเข้าชม

    const fetchAndUpdateViewCount = () => {
      let sessionId = sessionStorage.getItem("session_id");

      if (!sessionId) {
        sessionId = uuidv4();
        sessionStorage.setItem("session_id", sessionId);
      }

      const sessionRef = ref(database, `views/sessions/${sessionId}`);
      const countRef = ref(database, "views/count");
      const sessionsRef = ref(database, "views/sessions");

      // ตั้ง onDisconnect ก่อน แล้วค่อยตั้งค่า session
      onDisconnect(sessionRef)
        .remove()
        .then(() => {
          // ตั้ง session ว่า active
          return set(sessionRef, true);
        })
        .catch((error) => {
          console.error("Failed to setup onDisconnect or set session:", error);
        });

      // ฟังข้อมูล session ทั้งหมด เพื่ออัปเดตจำนวน
      onValue(sessionsRef, (snapshot) => {
        const sessions = snapshot.val() || {};
        const count = Object.keys(sessions).length;

        // อัปเดต count ใน DB และ state ในแอป
        set(countRef, count).catch((err) => {
          console.error("Failed to update view count:", err);
        });

        setViewCountState(count);
      });
    };

    const fetchAndUpdateLikeCount = async () => {
      const likeRef = ref(database, "likes");

    
      const unsubscribe = onValue(likeRef, (snapshot) => {
        if (snapshot.exists()) {
          setLikeCountState(snapshot.val());
        } else {
          setLikeCountState(0);
        }
      });

      return () => unsubscribe();
    };

    fetchAndUpdateViewCount();
    fetchAndUpdateLikeCount();
  }, []);

  const handleLikeClick = async () => {
    if (hasLiked) return;

    const likeRef = ref(database, "likes");
    const snapshot = await get(likeRef);

    if (snapshot.exists()) {
      const currentCount = snapshot.val();
      const updatedCount = currentCount + 1;

      await set(likeRef, updatedCount);
      setHasLiked(true); // ป้องกันกดซ้ำ

      const textAlert = document.querySelector(".body-view .text-Al");
      const iconAlert = document.querySelector(".alert .close-btn");

      textAlert?.classList.add("hidden");
      iconAlert?.classList.add("hidden");
    }
  };

  return (
    <div className="body-view">
      <h4 className="name">
        <i className="bxr  bx-eye-big color-icon"></i>{" "}
        <strong>{viewCount}</strong>
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
