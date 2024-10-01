import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return(
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">

    <div className="relative w-[240px] h-[240px[ lg:w-[324px] lg:h-[324px] mb-8  lg:mb-0">
      <img src="/hero.svg " fill alt="hero"  dangerouslyAllowSVG={true} />
    </div>

    <div className="flex flex-col items-center gap-y-8">
      <h1 className="text-xl lg:text-3xl font-bold  text-black-600 max-w-[480px] text-center">
      Reconnect With Your Heritage With MotherTongue. 
      </h1>


      <Link href="/learn">
      <Button size="lg" variant="secondary" className="w-full" >

        Get Started
        
      </Button>
      </Link>
    </div>
    </div>
     
     

  )
}
