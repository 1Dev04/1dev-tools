import React, { useEffect, useState } from "react";
import {
  database,
  ref,

  set,
  onValue,
  onDisconnect,
} from "../auth/Firebase";
import { v4 as uuidv4 } from "uuid";

import "../customCSS/View.css";
import "../customCSS/style-switcher.css";

const ViewCount = () => {
  const [viewCount, setViewCountState] = useState("");

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

    fetchAndUpdateViewCount();
  }, []);

 

  return (
    <div className="body-view">
      <h4 className="name">
        <i className="bxr  bx-eye-big color-icon"></i>{" "}
        <strong>{viewCount}</strong>
      </h4>
     
    </div>
  );
};

export default ViewCount;
