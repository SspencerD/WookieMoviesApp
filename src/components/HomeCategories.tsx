/* eslint-disable react/react-in-jsx-scope */
import {FlatList, Image, Text} from 'react-native';

interface HomeCategoriesProps {
  title?: string;
  data?: any;
}

const HomeCategories = (props: HomeCategoriesProps) => {
  const { data } = props;

  console.log('QUE TRAE DATA?: ' , data);
  return (
    <>
      <Text className="font-openSansSemiBold text-white text-[24]">
        Categoria
      </Text>
      <FlatList
        data={props.data}
        renderItem={({item}) => (
          <Image
            className=" w-[100] h-[170] rounded-md object-cover m-2"
            source={{uri: item.poster}}
          />
        )}
        horizontal
      />
    </>
  );
};

export default HomeCategories;
