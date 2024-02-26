import { ProgressBar } from "react-native-paper";

const SwaProgressbar = ({
  animatedValue,
  progress,
  color,
  indeterminate,
  visible,
  fillStyle,
  style,
  theme,
  testID
}) => {
  return (
    <ProgressBar
      animatedValue={animatedValue}
      progress={progress}
      color={color}
      indeterminate={indeterminate}
      visible={visible}
      fillStyle={fillStyle}
      style={style}
      theme={theme}
      testID={testID}
    />
  );
};
export default SwaProgressbar;
