import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React, { memo } from "react";

interface CustomModalProps {
  isOpen?: any;
  onClose?: () => void;
  children: JSX.Element | JSX.Element[];
}
const CustomModalBottom: React.FC<CustomModalProps> = ({
  isOpen = false,
  onClose,
  children,
}) => {
  return (
    <View style={styles.container}>
      <Modal
        visible={isOpen}
        animationType="fade"
        transparent={true}
        onRequestClose={onClose}
      >
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPress={onClose}
        >
          <View style={styles.modalContent}>
            {children}
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={{ fontWeight: "500", fontSize: 18 }}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export { CustomModalBottom };

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
    backgroundColor: "rgba(0, 0, 0, 0.17)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    gap: 20,
    bottom: 0,
    position: "absolute",
    width: "100%",
  },
  openButton: {
    backgroundColor: "#f194ff",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  closeButton: {
    marginTop: 20,
    alignSelf: "center",
  },
});
