'use client'

import "./globals.css";
import dynamic from "next/dynamic";

const AdminPage = dynamic(() => import('./pages/admin'), {
  ssr: false
});

export default function Home() {
  return (
    <AdminPage/>
  );
}
