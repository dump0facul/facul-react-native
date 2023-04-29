import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../../../App";
import { styles } from "../../styles/common";
import ProductItem from "./ProductItem";

export default function ProductListScreen() {
  const [produtos, setProdutos] = useState([]);
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  const myKeyExtractor = (item: any) => {
    return item.codigo.toString();
  };

  function excluirProduto(codigo: string) {}

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate("NewProductForm")}
      >
        <Text style={styles.buttonTextBig}>Novo Produto</Text>
      </TouchableOpacity>
      <FlatList
        style={styles.scrollContainer}
        data={produtos}
        contentContainerStyle={styles.itemsContainer}
        keyExtractor={myKeyExtractor}
        renderItem={({ item }) => (
          <ProductItem
            onDelete={() => excluirProduto(item.codigo)}
            product={item}
          />
        )}
      />
    </View>
  );
}
