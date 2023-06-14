'use client'

import { useContext } from "react";
import { Header } from "@/app/components/Header";
import { ModalRepo } from "@/app/components/ModalRepo";
import { Repos } from "@/app/components/Repos";
import { ReposContext } from "./context/ReposContext";

export default function Home() {
  const {state: {openModal}} = useContext(ReposContext)
  return (
    <main className="relative">
      <div className={`${openModal ? 'blur-[3px]' : 'blur-none'}`}>
      <Header />
      <Repos />
      </div>
      {openModal === true && <ModalRepo />}
      {/* <ModalRepo /> */}
    </main>
  )
}
