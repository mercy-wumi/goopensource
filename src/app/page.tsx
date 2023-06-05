import { Header } from "@/app/components/Header";
import { ModalRepo } from "@/app/components/ModalRepo";
import { Repos } from "@/app/components/Repos";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Repos />
      {/* <ModalRepo /> */}
    </main>
  )
}
