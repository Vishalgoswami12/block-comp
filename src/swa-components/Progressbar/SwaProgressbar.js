import { ProgressBar } from "react-native-paper";
import themeObject from "../../Constants/Globaltyle"
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
      color={themeObject?.theme?.PrimaryColor?.Primary800 || "#329FFF"}
      indeterminate={indeterminate}
      visible={visible}
      fillStyle={fillStyle}
      style={style}
      testID={testID}
    />
  );
};
export default SwaProgressbar;
