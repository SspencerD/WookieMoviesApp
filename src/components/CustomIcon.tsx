/* eslint-disable react/react-in-jsx-scope */
import {Text, TouchableOpacity} from 'react-native';
import AntdD from 'react-native-vector-icons/AntDesign';

interface Props {
  iconName: string;
  label: string;
  onPress: () => void;
}
const CustomIcon = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      className="flex-col items-center justify-start w-[50%] bg-black ">
      <AntdD name={props.iconName} size={30} color={'#ffffff'} />
      <Text className="text-xs text-center text-white font-openSans">
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomIcon;
