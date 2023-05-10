import { useState, useEffect } from "react";
import { DailyDataItemType } from "@/helpers/common/DataTypes";

export const initialData = [];
export const useDailyDatas = () => {
  const LOCAL_STORAGE_KEY = "dailyDatas";
  const [dailyDatas, setDailyDatas] = useState<DailyDataItemType[]>(() => {
    if (typeof window !== "undefined") {
      const savedDailyDatas = window.localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedDailyDatas !== null) return JSON.parse(savedDailyDatas);
    }
    return initialData;
  });

  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dailyDatas));
  }, [LOCAL_STORAGE_KEY, dailyDatas, setDailyDatas]);

  return {
    dailyDatas,
    setDailyDatas,
  };
};
