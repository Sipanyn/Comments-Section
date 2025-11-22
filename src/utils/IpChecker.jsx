import { useEffect, useState } from "react";
import axios from "axios";
import { useSupa } from "../supa-Store";
import { useUpdateUser } from "./useUpdateUser";
export default function IpChecker() {
  //   const [ip, setIp] = useState("");
  const setIp = useSupa((state) => state.setIp);
  const ip = useSupa((state) => state.ip);
  const { mutate } = useUpdateUser();
  useEffect(() => {
    const fetchIP = async () => {
      try {
        const res = await axios.get("https://ipapi.co/json"); // or use ipify.org, ipinfo.io
        setIp(res.data.ip);
        mutate(res.data.ip);
      } catch (err) {
        console.error("Failed to fetch IP:", err);
      }
    };

    fetchIP();
  }, []);

  return;
}
