import { Text, View, Pressable } from 'react-native';

function AppLogo({ onClickAction }) {
    return (
        <Pressable
            onPress={onClickAction}
            className="cursor-pointer group rounded-full flex items-center justify-center bg-white/90 px-3 py-2  ring-1
      shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
            <View className="flex flex-col items-center gap-2 group">
                <Text className="text-orange-500 font-bold md:text-2xl text-lg ">SubControl</Text>
            </View>
        </Pressable>
    );
};

export default AppLogo;