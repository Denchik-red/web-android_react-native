import { View, Text, TextInput, Pressable, Image, Switch } from "react-native";
import { useState } from "react";

export default function ModalAddSubContent({ mode = "create", initialData = {}, onClose }) {
  
  const [icon, setIcon] = useState(initialData.icon || null);

  const [form, setForm] = useState({
    name: initialData.name || "",
    category: initialData.category || "",
    price: initialData.price || "",
    expires: initialData.expires || "",
    active: initialData.active ?? true
  });

  function updateField(key, value) {
    setForm(prev => ({ ...prev, [key]: value }));
  }

  function handleSubmit() {
    if (mode === "create") {
      console.log("create", form);
    } else {
      console.log("update", form);
    }
  }

  function handleImageUpload() {
    //подключить image picker
    console.log("upload image");
  }

  return (
    <View className="gap-6 flex-1 w-96 md:w-120">

      <View className="items-center gap-3">
        
        <Pressable onPress={handleImageUpload}
          className="w-20 h-20 rounded-2xl bg-zinc-100 dark:bg-zinc-800 items-center justify-center border border-zinc-200 dark:border-zinc-700">
          {icon ? (
            <Image source={{ uri: icon }} className="w-16 h-16 rounded-xl" />
          ) : (
            <Text className="text-zinc-400 text-xs text-center">
              Upload {"\n"} icon </Text>
          )}
        </Pressable>

        <Text className="text-sm text-zinc-500">
          Иконка сервиса
        </Text>
      </View>


      <View>
        <Text className="text-lg text-zinc-900 mb-1 font-medium">
          Название
        </Text>

        <TextInput value={form.name} onChangeText={(v) => updateField("name", v)} placeholder="Netflix"
          className="w-full pl-4 pr-12 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50  border border-zinc-200 dark:border-zinc-700  focus:outline-none focus:ring-2
           text-zinc-900 dark:text-zinc-100  placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:ring-orange-500/50 focus:border-orange-500"/>
      </View>


      <View>
        <Text className="text-lg text-zinc-900 mb-1 font-medium">
          Категория
        </Text>

        <TextInput value={form.category} onChangeText={(v) => updateField("category", v)} placeholder="Streaming"
        className="w-full pl-4 pr-12 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50  border border-zinc-200 dark:border-zinc-700  focus:outline-none focus:ring-2
           text-zinc-900 dark:text-zinc-100  placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:ring-orange-500/50 focus:border-orange-500"/>
      </View>

      <View>
        <Text className="text-lg text-zinc-900 mb-1 font-medium">
          Цена
        </Text>

        <TextInput value={String(form.price)} onChangeText={(v) => updateField("price", v)} keyboardType="numeric" placeholder="9.99"
          className="w-full pl-4 pr-12 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50  border border-zinc-200 dark:border-zinc-700  focus:outline-none focus:ring-2
           text-zinc-900 dark:text-zinc-100  placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:ring-orange-500/50 focus:border-orange-500"/>
      </View>


      <View>
        <Text className="text-lg text-zinc-900 mb-1 font-medium">
          Дата окончания
        </Text>

        <TextInput value={form.expires} onChangeText={(v) => updateField("expires", v)}  placeholder="01.01.2027"
         className="w-full pl-4 pr-12 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50  border border-zinc-200 dark:border-zinc-700  focus:outline-none focus:ring-2
           text-zinc-900 dark:text-zinc-100  placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:ring-orange-500/50 focus:border-orange-500"/>
      </View>


      {/* Active Toggle */}
      <View className="flex-row items-center justify-between
        p-4 rounded-xl bg-zinc-100 dark:bg-zinc-800">

        <Text className="text-zinc-900 dark:text-zinc-100 font-medium">
          Подписка активна
        </Text>

        <Switch
            value={form.active}
            onValueChange={(v) => updateField("active", v)}

            trackColor={{
                false: "#e4e4e7",
                true: "#fcb669"
            }}

            thumbColor={form.active ? "#ff6900" : "#f4f4f5"}

            />
      </View>


      {/* Buttons */}
      <View className="flex-row justify-end gap-3">

        <Pressable onPress={onClose} className="px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800" >
          <Text className="text-zinc-700 dark:text-zinc-200">
            Отмена
          </Text>
        </Pressable>

        <Pressable onPress={handleSubmit} className="px-6 py-2 rounded-lg bg-orange-500 shadow-lg shadow-orange-500/30">
          <Text className="text-white font-semibold">
            {mode === "create" ? "Создать" : "Сохранить"}
          </Text>
        </Pressable>

      </View>

    </View>
  );
}