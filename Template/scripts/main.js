import * as server from '@minecraft/server';

//ここにスクリプトを記述
import { world, system } from '@minecraft/server';

world.afterEvents.entityDie.subscribe((event) => {
    const { deadEntity } = event;
    if (deadEntity.typeId === "minecraft:player") {
        const location = deadEntity.location;

        // 端数切捨て
        const blockPos = {
            x:Math.floor(location.x),
            y:Math.floor(location.y),
            z:Math.floor(location.z)
        };

        try {
            // ブロック設置
            const dimension = deadEntity.dimension;
            dimension.getBlock(blockPos).setType("minecraft:dirt");
            
            // ログ出力
            console.warn(`Player ${deadEntity.nameTag} died at${blockPos.x}, ${blockPos.y}, ${blockPos.z}. Block placed.`);
        } catch (error) {
            console.error("Failed to place block: ", error);
        }
          
    }
});
