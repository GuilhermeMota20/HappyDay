"use client";

import { useGlobalsVariables } from "@/app/services/hooks/useGlobalsVariables";
import FormConfirmPresenca from "../form";
import Modal from "./modal";

export default function ModalConfirmGuest() {
  const { isOpenModal, onCloseModal } = useGlobalsVariables();

  return (
    <>
      {isOpenModal && (
        <Modal
          title="Falta pouco!"
          description="Preencha os campos abaixo para confirmar sua presença neste dia tão esperado. Por favor, confirmar sua presença apenas se puder comparecer, agradecemos sua consideração"
          onClose={onCloseModal}
        >
          <FormConfirmPresenca />
        </Modal>
      )}
    </>
  )
}