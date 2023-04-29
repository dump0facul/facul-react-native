import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/common";

interface Product {
  code: string;
  name: string;
  quantity: number;
}

interface ProductItemProps {
  product: Product;
  onDelete: () => void;
}

export default function ProductItem({ product, onDelete }: ProductItemProps) {
  return (
    <View>
      <View style={styles.container} id={product.code}>
        <Text style={styles.textItem}>
          {product.code} - {product.name}
        </Text>
        <Text style={styles.textItem}>Quantidade: {product.quantity}</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
            <Text style={styles.buttonText}>X</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
