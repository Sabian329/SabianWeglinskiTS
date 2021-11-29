import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import { Logo, ModalContentStyled } from "./Styled";
import { IModalProps } from "../../Constans/Interfaces";

export const TechnologiesModal = ({
  onClose,
  isOpen,
  name,
  logo,
  description,
}: IModalProps) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContentStyled>
        <ModalHeader display="flex">
          <Logo src={logo} />
          {name}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>{description}</Text>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContentStyled>
    </Modal>
  );
};
