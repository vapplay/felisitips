import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import ColorPicker, { OpacitySlider, Panel3 } from "reanimated-color-picker";

const ColoPiker = memo(({ onSelectColor }: any) => {
  return (
    <View>
      <ColorPicker
        style={styles.pikerStyles}
        value="red"
        onComplete={onSelectColor}
      >
        <Panel3 style={styles.panelStyle} />
        <OpacitySlider />
      </ColorPicker>
    </View>
  );
});

export { ColoPiker };

const styles = StyleSheet.create({
  pikerStyles: { width: "70%", alignSelf: "center", gap: 20 },
  panelStyle: {
    width: 300,
    height: 200,
  },
});
