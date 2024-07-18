"use client";

import { useGlobalsVariables } from "@/app/services/hooks/useGlobalsVariables";
import Modal from "./modal";
import IframeGoogleMap from "../iframe-google-map";
import IframeGoogleMapAgnes from "../iframe-google-map-agnes";

interface ModalViewMapProps {
  isAgnes: () => boolean | undefined;
};

export default function ModalViewMap({ isAgnes }: ModalViewMapProps) {
  const { isOpenModalViewMap, onCloseModalViewMap } = useGlobalsVariables();

  return (
    <>
      {isOpenModalViewMap && (
        <Modal
          title="Nao sabe como chegar?"
          description="Aqui esta um mapa para facilitar sua locomoção."
          onClose={onCloseModalViewMap}
        >
          {isAgnes() ? (
            <IframeGoogleMapAgnes />
          ) : (
            <IframeGoogleMap />
          )}
        </Modal>
      )}
    </>
  )
}