import { useScrollTop } from "@/app/services/hooks/useScrollTop";
import { cn } from "@/lib/utils"
import Image from "next/image";

type Props = {
  isChildrenHappyDay: boolean;
};

export default function Header({ isChildrenHappyDay }: Props) {
  const scrolled = useScrollTop();

  return (
    <>
      <header className={cn(
        "flex items-center gap-2 justify-between py-4 px-8 sm:px-16 fixed w-full top-0 left-0 z-50",
        scrolled && "shadow-md backdrop-blur-md bg-slate-50/90"
      )}>
        {isChildrenHappyDay && (
          <>
            <Image src="/images/bolofofos-logo.svg" alt="aaa" width={80} height={80} />
            <audio src="/audio/bolofofos-parabens-pra-voce.mp3" autoPlay loop controls className="bg-none" />
          </>
        )}

        {!isChildrenHappyDay && (
          <span className={cn(
            "text-slate-100 uppercase font-bold",
            scrolled && "text-slate-900"
          )}>
            Nanda
          </span>
        )}
      </header >
    </>
  )
}