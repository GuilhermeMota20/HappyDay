"use client";

import { useGlobalsVariables } from "@/app/services/hooks/useGlobalsVariables";
import { useState } from "react";
import { PinInput } from 'react-input-pin-code';
import { Button } from "../ui/button";
import Modal from "./modal";
import { useRouter } from "next/navigation";

export default function ModalPinAccess() {
  const { isOpenModalPinAccess, onCloseModalPinAccess, currentUser } = useGlobalsVariables();
  const router = useRouter();

  const initialValuePin = ['', '', '', '', '', '']
  const [values, setValues] = useState(initialValuePin);

  const isCurrentUser = currentUser === "Fernanda";
  const convertCurrentValue = values?.join("");
  const validPinInput = isCurrentUser ? "121320" : "138874";

  return (
    <>
      {isOpenModalPinAccess && (
        <Modal
          title="Digite sua senha"
          description="Digite sua senha para acesar a lista de convidados confirmados."
          onClose={() => {
            onCloseModalPinAccess();
            setValues(initialValuePin);
          }}
        >
          <div className="w-full h-full p-8 flex items-center justify-center">
            <PinInput
              values={values}
              validate={
                convertCurrentValue === validPinInput
                  ? validPinInput
                  : "ffffff"
              }
              autoTab={true}
              mask={true}
              size="lg"
              onChange={(value, index, values) => setValues(values)}
            />
          </div>

          {convertCurrentValue === validPinInput && (
            <Button onClick={() => {
              router?.push(`${isCurrentUser ? "/ListGuestFernanda" : "ListGuestJoao"}`)
              onCloseModalPinAccess();
            }} >
              Acessar a lista
            </Button>
          )}
        </Modal>
      )}
    </>
  )
}