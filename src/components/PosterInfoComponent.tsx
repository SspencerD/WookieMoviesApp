/* eslint-disable react/react-in-jsx-scope */
import {Image, Text, View} from 'react-native';
import StartsRating from './StarsRating';

type POSTERPROPS = {
  poster: string;
  imdb_rating: number;
  title: string;
};

const PosterInfoComponent = (props: POSTERPROPS) => {
  return (
    <>
      <View className="flex-row items-center justify-center flex-1 ml-2 bottom-20">
        <Image
          className="w-[120] h-[170] rounded-md object-cover m-2 "
          source={{uri: props.poster}}
        />
        <View className="flex-col items-start ">
          <Text
            className=" flex-wraptext-xl text-left text-white font-openSansSemiBold mb-[9%]"
            ellipsizeMode="tail"
            numberOfLines={2}>
            {props.title}
          </Text>
          <View className="items-start justify-start ">
            <StartsRating imbRating={props.imdb_rating} />
          </View>
        </View>
      </View>
    </>
  );
};

export default PosterInfoComponent;
