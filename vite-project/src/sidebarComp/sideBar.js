import {BellRingIcon,BookMarked,BriefcaseBusiness, FolderLock, House, InfoIcon, LogOut, LucideAirplay,MessageCircleMore, NotebookPen,ShieldCheck, Users2} from "lucide-react";
export const sidebarComp = [
  {
    name: 'Dashboard', 
    path: '/dashboard',
    icon: House,
    id:1
  },
  {
    name: 'Batches',
    path: '/batches',
    icon: Users2,
    id:2
  },
{
  name: 'Test Modules',
  path: '/tests',
  icon: BookMarked,
  id:3
},
{
  name: 'Resources',
  path: '/resources',
  icon: FolderLock,
  id:4
},
{
  name: 'Assignments',
  path: '/assignment',
  icon: NotebookPen,
  id:5
},
{
  name: 'Job Posts',
  path: '/posts',
  icon: BriefcaseBusiness,
  id:6
},
{
  name: 'Notification',
  path: '/notification',
  icon: BellRingIcon,
  id:7
},
{
  name: 'Chat',
  path: '/chat',
  icon: MessageCircleMore,
  id:8
},
{
  name: 'Batch Add Request',
  path: '/newbatch',
  icon: LucideAirplay,
  id:9
},
{
  name: 'Policies',
  path: '/policy',
  icon: ShieldCheck,
  id:0
},
{
  name: 'Help',
  path: '/help',
  icon: InfoIcon,
  id: 11
},
{
  name: 'Log Out',
  path: '/logout', onclick: true,
  icon: LogOut,
  id: 12
},
];