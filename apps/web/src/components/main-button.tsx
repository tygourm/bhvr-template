import { SidebarCloseIcon, SidebarOpenIcon } from "lucide-react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useHoverDirty } from "react-use";

import reactLogo from "@/assets/react.svg";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";

function MainButton() {
  const { open, toggleSidebar } = useSidebar();
  const ref = useRef<HTMLButtonElement>(null!);
  const hovered = useHoverDirty(ref);
  const { t } = useTranslation();

  return (
    <Button ref={ref} variant="ghost" size="icon" onClick={toggleSidebar}>
      {!hovered && <img src={reactLogo} alt={t("common.appLogo")} />}
      {hovered && open && <SidebarCloseIcon />}
      {hovered && !open && <SidebarOpenIcon />}
    </Button>
  );
}

export { MainButton };
