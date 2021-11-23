import React from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import { Logo } from "./Styled";

interface IModalProps {
  onClose: () => void;
  isOpen: boolean;
  name: string;
  logo: string;
  description: string;
}

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
      <ModalContent>
        <ModalHeader display="flex">
          <Logo src={logo} />
          {name}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>{description}</Text>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};
