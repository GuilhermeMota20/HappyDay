"use client";

import { useGlobalsVariables } from "@/app/services/hooks/useGlobalsVariables";
import Modal from "./modal";
import FormConfirmPresenca from "../form";

export default function ModalConfirmGuest() {
  const { isOpenModal, onCloseModal } = useGlobalsVariables();

  return (
    <>
      {isOpenModal && (
        <Modal
          title="Falta pouco!"
          description="Preencha os campos abaixo para confirmar sua presença neste dia tão esperado."
          onClose={onCloseModal}
        >
          <FormConfirmPresenca />
        </Modal>
      )}
    </>
  )
}