import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";


type Props = {
    className?: string;           
};

export const Sidebar = ({className} : Props) => {
    return(
        <div className={cn("flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col", className,)}>
            <Link href="/learn">
          <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">

                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">

                    <Image src="/logo.svg" height={40} width={40} alt="logo" />
                    <h1 className="text-1xl font-bold text-blue-600">
                        MotherTongue
                    </h1>
                    
                  
                    </div>
                   
                
            </div>
            </Link>

            <div className="flex flex-col gap-y-2 flex-1">

                <SidebarItem label="Learn" href="/learn" iconSrc="/learn.svg"/>
                <SidebarItem label="Leaderboard" href="/leaderboard" iconSrc="/leaderboard.svg"/>
                <SidebarItem label="Quests" href="/quests" iconSrc="/quests.svg"/>
                <SidebarItem label="Shop" href="/shop" iconSrc="/shop.svg"/>


            </div>
        </div>
    );
};