import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Image, FlatList, Pressable } from "react-native";
import { useSelector } from "react-redux";

const ProductsScreen = () => {
  const navigation = useNavigation();
  const products = useSelector((state) => state.products.products); 

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => navigation.navigate("Product Detail", { productId: item.id })}
          style={styles.itemContainer}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: "50%",
    padding: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});

export default ProductsScreen;
