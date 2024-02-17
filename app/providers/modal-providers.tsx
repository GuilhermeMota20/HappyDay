"use client";

import ModalConfirmGuest from "@/components/modals/modal-confirm-guest";
import ModalPinAccess from "@/components/modals/modal-pin-access";
import ModalViewMap from "@/components/modals/modal-view-map";
import { useEffect, useState } from "react";

export function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  };

  return (
    <>
      <ModalConfirmGuest />
      <ModalViewMap />
      <ModalPinAccess />
    </>
  )
}