import React, { useEffect, useState } from "react";
import { database, ref, get, set } from "../page/Firebase"; // แก้ไขการ import

import '../customCSS/View.css';
import '../customCSS/style-switcher.css';

const ViewCount = () => {
  const [viewCount, setViewCountState] = useState(0); // เปลี่ยนชื่อฟังก์ชัน setViewCount เพื่อไม่ให้สับสนกับฟังก์ชัน set ของ Firebase

  useEffect(() => {
    // ฟังก์ชันดึงและอัพเดตจำนวนการเข้าชม
    const fetchAndUpdateViewCount = async () => {
      const viewRef = ref(database, "views"); // ชี้ไปที่ path "views" ใน Realtime Database
      const snapshot = await get(viewRef);

      if (snapshot.exists()) {
        const currentCount = snapshot.val(); // ดึงจำนวนการเข้าชมปัจจุบัน
        
        const updatedCount = currentCount + 1; // เพิ่มการเข้าชมอีก 1
        set(viewRef, updatedCount); // อัพเดตจำนวนการเข้าชมในฐานข้อมูล
        setViewCountState(updatedCount); // อัพเดตค่าใน state
      } else {
        set(viewRef, 1); // ถ้ายังไม่มีค่าในฐานข้อมูล ให้ตั้งเป็น 1
        setViewCountState(1); // ตั้งค่าจำนวนการเข้าชมเป็น 1 ใน state
      }
    };

    fetchAndUpdateViewCount();
  }, []);

  return (
    <div className="body-view">
      <h4 className="name"><i className="bx bxs-user color-icon"></i> <strong>{viewCount}</strong></h4>
    </div>
  );
}

export default ViewCount;