import { Modal, View, Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function ModalWindow({ isVisible, onClose, mode="create", children }) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View className="flex-1 items-center justify-center backdrop-blur-md ios:pt-10">

        <View className="ios:flex-1 androd:flex-1 bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-xl border border-zinc-200 dark:border-zinc-800">

          {/* Header */}
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              {mode === "create" ? "Новая подписка" : "Редактировать подписку"}
            </Text>

            <Pressable onPress={onClose} className="w-9 h-9 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
              <MaterialIcons name="close" size={20} color="#71717a" />
            </Pressable>
          </View>
        
            {children}
        </View> 

      </View>
    </Modal>
  );
}