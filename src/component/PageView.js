import React, { useEffect, useState } from "react";
import { database, ref, get, set, onValue, onDisconnect } from "../page/Firebase";
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

      // ถ้ายังไม่มี session id ให้สร้างใหม่
      if (!sessionId) {
        sessionId = uuidv4();
        sessionStorage.setItem("session_id", sessionId);
      }

      const sessionRef = ref(database, `views/sessions/${sessionId}`);
      const countRef = ref(database, "views/count");

      // ⚠️ ต้องตั้ง onDisconnect ก่อนทำ set
      onDisconnect(sessionRef)
        .remove()
        .then(() => {
          // เมื่อ onDisconnect ถูกตั้งสำเร็จ ➜ ค่อย set session
          set(sessionRef, true);
        });

      // ฟังทุก session ➜ คำนวณ count
      const sessionsRef = ref(database, "views/sessions");
      onValue(sessionsRef, (snapshot) => {
        const sessions = snapshot.val() || {};
        const count = Object.keys(sessions).length;

        // อัปเดต count
        set(countRef, count);
        setViewCountState(count);
      });
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
