import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Slider from "@react-native-community/slider";
import { themeTypes } from "../../../types/types";

const FontStyles = ({
  theme,
  onChange,
  onChangeWeight,
}: {
  theme: themeTypes;
  onChange: (e: number) => void;
  onChangeWeight: (e: string) => void;
}) => {
  const [fontSize, setFontSize] = useState<number>(17);
  const [fontWeight, setFontWeight] = useState<string>("100");
  const handleFontSizeChange = (value: number) => {
    onChange && onChange(value);
    setFontSize(value);
  };
  const handleFontWeightChange = (value: string) => {
    console.log(value);

    onChangeWeight && onChangeWeight(String(value));
    setFontWeight(String(value));
  };

  return (
    <View>
      <View style={{ gap: 20 }}>
        <View>
          <Text style={[styles.text, { fontFamily: theme.defaultFont }]}>
            Tamaño de letra
          </Text>
          <Slider
            style={{ width: "100%", height: 40 }}
            minimumValue={20}
            maximumValue={40}
            minimumTrackTintColor="rgb(22, 22, 22)"
            maximumTrackTintColor="#000000"
            value={fontSize}
            onValueChange={handleFontSizeChange}
          />
        </View>
        {/* <View>
          <Text style={[styles.text, { fontFamily: theme.defaultFont }]}>
            Tamaño de letra
          </Text>
          <Slider
            style={{ width: "100%", height: 40 }}
            minimumValue={100}
            maximumValue={900}
            minimumTrackTintColor="rgb(22, 22, 22)"
            maximumTrackTintColor="#000000"
            step={100}
            value={parseInt(fontWeight)}
            onValueChange={(value) => handleFontWeightChange(value.toString())}
          />
        </View> */}
      </View>
    </View>
  );
};

export { FontStyles };

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    fontWeight: "500",
    marginLeft: 12,
  },
});
