"use client";

import ModalConfirmGuest from "@/components/modals/modal-confirm-guest";
import ModalPinAccess from "@/components/modals/modal-pin-access";
import ModalViewMap from "@/components/modals/modal-view-map";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function ModalProvider() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  const formatPathname = pathname.replace("/", "");
  const currentEndereco = () => {
    if (formatPathname == "Agnes") {
      return true;
    };

    if (formatPathname == "Fernanda") {
      return false;
    };

    if (formatPathname == "Joao") {
      return false;
    };

    return undefined;
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  };

  return (
    <>
      <ModalConfirmGuest />
      <ModalViewMap
        isAgnes={currentEndereco}
      />
      <ModalPinAccess />
    </>
  )
}