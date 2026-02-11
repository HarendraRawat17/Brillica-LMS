import {BellRingIcon,BookMarked,BriefcaseBusiness, FolderLock, House, InfoIcon, LogOut, LucideAirplay,MessageCircleMore, NotebookPen,ShieldCheck, Users2} from "lucide-react";
export const sidebarComp = [
  {
    name: 'Dashboard', 
    path: '/dashboard',
    icon: House
  },
  {
    name: 'Batches',
    path: '/batches',
    icon: Users2
  },
{
  name: 'Test Modules',
  path: '/tests',
  icon: BookMarked
},
{
  name: 'Resources',
  path: '/resources',
  icon: FolderLock
},
{
  name: 'Assignments',
  path: '/assignment',
  icon: NotebookPen
},
{
  name: 'Job Posts',
  path: '/posts',
  icon: BriefcaseBusiness
},
{
  name: 'Notification',
  path: '/notification',
  icon: BellRingIcon
},
{
  name: 'Chat',
  path: '/chat',
  icon: MessageCircleMore
},
{
  name: 'Batch Add Request',
  path: '/newbatch',
  icon: LucideAirplay
},
{
  name: 'Policies',
  path: '/policy',
  icon: ShieldCheck
},
{
  name: 'Help',
  path: '/help',
  icon: InfoIcon
},
{
  name: 'Log Out',
  path: '/logout', onclick: true,
  icon: LogOut 
},
];