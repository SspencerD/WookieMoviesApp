/* eslint-disable react/react-in-jsx-scope */
import Icon from 'react-native-vector-icons/AntDesign';
import {View} from 'react-native';

type Props = {
  imbRating: number;
};

const StartsRating = (props: Props) => {
  const integerPart = Math.floor(props.imbRating) / 2;

  return (
    <View className="flex-row w-full">
      {[...Array(5)].map((_, index) => {
        if (index < integerPart) {
          return <Icon key={index} name="star" size={26} color={'#f1b62d'} />;
        } else {
          return <Icon key={index} name="staro" size={26} color={'#f1b62d'} />;
        }
      })}
    </View>
  );
};
export default StartsRating;
