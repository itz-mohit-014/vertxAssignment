import {
  Bell,
  ChartNoAxesCombined,
  Earth,
  LayoutDashboard,
} from "lucide-react";

const navLinks = [
  {
    id: 1,
    title: "Dashboard",
  },
  {
    id: 1,
    title: "Analytics",
  },
  {
    id: 1,
    title: "Connect",
  },
  {
    id: 1,
    title: "Activity",
  },
  {
    id: 1,
    title: "Dealroom",
  },
];

const MobileSidebar = () => {
  const Icons = [LayoutDashboard, ChartNoAxesCombined, Earth, Bell];

  return (
    <div className="bg-black h-[60] flex justify-between py-4 px-6 lg:hidden sticky bottom-0 left-0 z-50">
      {navLinks.map((link, i) => {
        const Icon = Icons[i] ? Icons[i] : "";
        return (
          <div
            key={link.id}
            className="flex flex-col items-center justify-center gap-0.5"
          >
            {Icon ? (
              <Icon size={20} />
            ) : (
              <img height="28px" width="28px" src="/dealroom.png" alt="icon" />
            )}
            <span className="text-[8px] font-semibold">{link.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default MobileSidebar;
