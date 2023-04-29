import { Text, View } from "react-native";
import { enablePromise, openDatabase } from "react-native-sqlite-storage";

enablePromise(true);
async function execute() {
  const db = await openDatabase({ name: "LojaDatabase.db" });
  db.transaction((tx) => {
    tx.executeSql(
      "select * from produto",
      [],
      (tx, res) => {
        if (res && res.rowsAffected > 0) {
          console.log("registros", res.rows.length);
          return;
        }

        console.log("Nenhum registro encontrado");
      },
      (tx, err) => {
        console.log("erro: ", err.message);
      }
    );
  });
}

execute();

export default function Test() {
  return (
    <View>
      <Text>Testando</Text>
    </View>
  );
}
