import { SafeAreaView, View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import StatusBarr from '../../../components/StatusBar/StatusBar';
import CustomGoBackComponent from '../../../components/CustomGoBack/CustomGoBackComponent';
import { useOrderHistoryQuery } from '../../../services/api';
import CustmBottom from '../../../components/CustomBottom/CustmBottom';
import { FlatList } from 'react-native-gesture-handler';
const OrderHistory = ({ navigation }) => {
  // const [orderHistory, { data, isSuccess, isLoading }] =
  //   useLazyOrderHistoryQuery();
  // console.log(data, 'ye val hai that came from useHistory');
  const [orderData, setOrderData] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [page, setPage] = useState(1);
  const data = useOrderHistoryQuery(1);
  console.log(data, 'ye data ahao hai bhia ');
  useEffect(() => {
    if (data.isLoading === false && data.isSuccess === true) {
      console.log(
        data?.data?.data,
        'ye data hai bhia  order historyjdalkshhl fsdkhkjlhkjfhsd lkks ',
      );
      setOrderData([...orderData, ...data?.data?.data]);
      console.log(
        data?.data?.data?.length,
        'ye data hai bhia jdalkshhl fsdkhkjlhkjfhsd lkks ',
      );
      if (data?.data?.data?.length) {
        setIsEmpty(false);
      } else {
        setIsEmpty(true);
      }
    }
  }, [data]);
  const handleButtonGoBack = () => {
    navigation.goBack();
  };
  const endReached = () => {
    setPage(page + 1);
  };
  return (
    <View>
      <StatusBarr backgroundColor={'#9ad3db'} />
      <CustomGoBackComponent onPress={handleButtonGoBack} />
      {!isEmpty ? (
        <FlatList
          data={orderData}
          renderItem={({ item }) => {
            return <Text>{item}</Text>;
          }}
          keyExtractor={item => item.id.toString()}
          onEndReached={endReached}
          onEndReachedThreshold={0.5}
        />
      ) : (
        <Text>There is No order</Text>
      )}
      <CustmBottom />
    </View>
  );
};

export default OrderHistory;
