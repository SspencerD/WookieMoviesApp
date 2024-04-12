/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {Movie} from '../global';
import {useNavigation} from '@react-navigation/native';

interface HomeCategoriesProps {
  data?: any;
  categoryName: string;
}

const HomeCategories = (props: HomeCategoriesProps) => {
  const {data, categoryName} = props;
  const navigation = useNavigation();

  const handleItemPress = (item: any) => {
    navigation.navigate('Details', {movie: item});
  };

  return (
    <View className=" w-full]">
      <Text className="text-base text-left text-white font-openSansBold">
        {categoryName}
      </Text>
      <FlatList
        className="mb-2"
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              handleItemPress(item);
            }}>
            <Image
              className=" w-[100] h-[170] rounded-md object-cover m-2"
              source={{uri: item.poster}}
            />
          </TouchableOpacity>
        )}
        horizontal
      />
    </View>
  );
};

export default HomeCategories;
