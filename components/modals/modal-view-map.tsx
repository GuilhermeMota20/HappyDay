"use client";

import { useGlobalsVariables } from "@/app/services/hooks/useGlobalsVariables";
import Modal from "./modal";
import IframeGoogleMap from "../iframe-google-map";

export default function ModalViewMap() {
  const { isOpenModalViewMap, onCloseModalViewMap } = useGlobalsVariables();

  return (
    <>
      {isOpenModalViewMap && (
        <Modal
          title="Nao sabe como chegar?"
          description="Aqui esta um mapa para facilitar sua locomoção."
          onClose={onCloseModalViewMap}
        >
          <IframeGoogleMap />
        </Modal>
      )}
    </>
  )
}