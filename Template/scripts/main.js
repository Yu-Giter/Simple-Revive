import { world, Player } from '@minecraft/server';

//ここにスクリプトを記述

world.afterEvents.entityDie.subscribe((ev) => {
    const { deadEntity, damageSource } = ev;
    const { damagingEntity } = damageSource;
    if (!(deadEntity instanceof Player)) return;
    if (damagingEntity) {
        
    }
});