import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

interface CustomModalProps {
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  children: JSX.Element | JSX.Element[];
  modalStyle?: ViewStyle;
}
const CustomModal: React.FC<CustomModalProps> = ({
  isOpen = false,
  onOpen,
  onClose,
  children,
  modalStyle
}) => {
  return (
    <View style={styles.container}>
      <Modal
        visible={isOpen}
        animationType="fade"
        transparent={true}
        onRequestClose={onClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {children}
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={{ fontWeight: "500", fontSize: 18 }}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export { CustomModal };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    gap: 20,
  },
  openButton: {
    backgroundColor: "#f194ff",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  closeButton: {
    marginTop: 20,
  },
});
