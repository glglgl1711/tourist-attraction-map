import Image from "next/image";
import styles from "./page.module.css";
import Maps from "@/components/maps";

export default function Home() {
  return (
    <div style={{width: '100%' , height : '100vh'}}>
      <Maps/>
    </div>
  );
}
