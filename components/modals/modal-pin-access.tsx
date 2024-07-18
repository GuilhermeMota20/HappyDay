"use client";

import { useGlobalsVariables } from "@/app/services/hooks/useGlobalsVariables";
import { useEffect, useState } from "react";
import { PinInput } from 'react-input-pin-code';
import { Button } from "../ui/button";
import Modal from "./modal";
import { useRouter } from "next/navigation";

export default function ModalPinAccess() {
  const { isOpenModalPinAccess, onCloseModalPinAccess, currentUser } = useGlobalsVariables();
  const router = useRouter();

  const initialValuePin = ['', '', '', '', '', '']
  const [values, setValues] = useState(initialValuePin);

  const convertCurrentValue = values?.join("");

  let user = {
    name: "",
    router: "",
    validPinInput: "",
  };

  (() => {
    if (currentUser === "Fernanda") {
      return user = {
        name: "Fernanda",
        router: "/ListGuestFernanda",
        validPinInput: "121212"
      };
    };
    if (currentUser === "Agnes") {
      return user = {
        name: "Agnes",
        router: "/ListGuestAgnes",
        validPinInput: "232323"
      };
    };
    if (currentUser === "Joao") {
      return user = {
        name: "Joao",
        router: "/ListGuestJoao",
        validPinInput: "343434"
      };
    };
    return {};
  })();

  useEffect(() => {
    if (!isOpenModalPinAccess) {
      setValues(['', '', '', '', '', '']);
    }
  }, [isOpenModalPinAccess]);

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
                convertCurrentValue === user.validPinInput
                  ? user.validPinInput
                  : "ffffff"
              }
              autoTab={true}
              mask={true}
              size="xs"
              onChange={(_value, _index, values) => setValues(values)}
            />
          </div>

          {convertCurrentValue === user.validPinInput && (
            <Button onClick={() => {
              onCloseModalPinAccess();
              router?.push(`${user.router}`);
            }}>
              Acessar a lista
            </Button>
          )}
        </Modal>
      )}
    </>
  )
}