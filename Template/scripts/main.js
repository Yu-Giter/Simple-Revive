import { world, system, ItemStack, BlockPermutation, Player } from "@minecraft/server";

var Plinventory, CountingPLinv, chestpos;


  world.afterEvents.entityHitEntity.subscribe(arg => {
    if (world.scoreboard.getObjective('money') && arg.damagingEntity?.scoreboardIdentity ? world.scoreboard.getObjective('money')?.getScore(arg.damagingEntity?.scoreboardIdentity) : 0 != undefined) {
      {
      const objective = world.scoreboard.getObjective('chestposX');
      const targetEntity = arg.damagingEntity;
      if (objective && targetEntity?.scoreboardIdentity) {
        objective.setScore(targetEntity.scoreboardIdentity, parseInt(Math.floor(arg.damagingEntity?.location.x), 10) || 0);
      }
    }
      {
      const objective = world.scoreboard.getObjective('chestposY');
      const targetEntity = arg.damagingEntity;
      if (objective && targetEntity?.scoreboardIdentity) {
        objective.setScore(targetEntity.scoreboardIdentity, parseInt(Math.floor(arg.damagingEntity?.location.y), 10) || 0);
      }
    }
      {
      const objective = world.scoreboard.getObjective('chestposZ');
      const targetEntity = arg.damagingEntity;
      if (objective && targetEntity?.scoreboardIdentity) {
        objective.setScore(targetEntity.scoreboardIdentity, parseInt(Math.floor(arg.damagingEntity?.location.z), 10) || 0);
      }
    }
      Plinventory = [(arg.damagingEntity)?.getComponent("inventory")?.container.getItem((arg.damagingEntity)?.selectedSlotIndex)];
      if (Plinventory == undefined) {
    } else {
        if ((arg.damagingEntity)?.getComponent("minecraft:health")?.currentValue <= 0) {
          chestpos = arg.damagingEntity?.location;
          world.getDimension('overworld')?.setBlockPermutation({ x: world.scoreboard.getObjective('ChestPosX') && arg.hitEntity?.scoreboardIdentity ? world.scoreboard.getObjective('ChestPosX')?.getScore(arg.hitEntity?.scoreboardIdentity) : 0, y: world.scoreboard.getObjective('ChestPosY') && arg.damagingEntity?.scoreboardIdentity ? world.scoreboard.getObjective('ChestPosY')?.getScore(arg.damagingEntity?.scoreboardIdentity) : 0, z: world.scoreboard.getObjective('ChestPosZ') && arg.damagingEntity?.scoreboardIdentity ? world.scoreboard.getObjective('ChestPosZ')?.getScore(arg.damagingEntity?.scoreboardIdentity) : 0 }, BlockPermutation.resolve('minecraft:chest'));
          world.getDimension('overworld')?.setBlockPermutation({ x: world.scoreboard.getObjective('ChestPosX') && arg.hitEntity?.scoreboardIdentity ? world.scoreboard.getObjective('ChestPosX')?.getScore(arg.hitEntity?.scoreboardIdentity) : 0 + 1, y: world.scoreboard.getObjective('ChestPosY') && arg.damagingEntity?.scoreboardIdentity ? world.scoreboard.getObjective('ChestPosY')?.getScore(arg.damagingEntity?.scoreboardIdentity) : 0, z: world.scoreboard.getObjective('ChestPosZ') && arg.damagingEntity?.scoreboardIdentity ? world.scoreboard.getObjective('ChestPosZ')?.getScore(arg.damagingEntity?.scoreboardIdentity) : 0 }, BlockPermutation.resolve('minecraft:chest'));
      }
    }
      var CountingPLinv_end = Plinventory.length;
    var CountingPLinv_inc = 1;
    if (0 > CountingPLinv_end) {
      CountingPLinv_inc = -CountingPLinv_inc;
    }
    for (CountingPLinv = 0; CountingPLinv_inc >= 0 ? CountingPLinv <= CountingPLinv_end : CountingPLinv >= CountingPLinv_end; CountingPLinv += CountingPLinv_inc) {
      // 空白
        arg.hitEntity.runCommand(['/replaceitem block ',world.scoreboard.getObjective('ChestPosX') && arg.hitEntity?.scoreboardIdentity ? world.scoreboard.getObjective('ChestPosX')?.getScore(arg.hitEntity?.scoreboardIdentity) : 0,' ',world.scoreboard.getObjective('ChestPosY') && arg.hitEntity?.scoreboardIdentity ? world.scoreboard.getObjective('ChestPosY')?.getScore(arg.hitEntity?.scoreboardIdentity) : 0,'　',world.scoreboard.getObjective('ChestPosZ') && arg.hitEntity?.scoreboardIdentity ? world.scoreboard.getObjective('ChestPosZ')?.getScore(arg.hitEntity?.scoreboardIdentity) : 0,'　','slot.container',CountingPLinv,Plinventory[CountingPLinv],' 1'].join(''));
        }
  } else {
      world.scoreboard.addObjective('chestposX', 'chestposX');
      world.scoreboard.addObjective('chestposY', 'chestposY');
      world.scoreboard.addObjective('chestposZ', 'chestposZ');
      {
      const objective = world.scoreboard.getObjective('chestposX');
      const targetEntity = arg.damagingEntity;
      if (objective && targetEntity?.scoreboardIdentity) {
        objective.setScore(targetEntity.scoreboardIdentity, parseInt(Math.floor(arg.damagingEntity?.location.x), 10) || 0);
      }
    }
      {
      const objective = world.scoreboard.getObjective('chestposY');
      const targetEntity = arg.damagingEntity;
      if (objective && targetEntity?.scoreboardIdentity) {
        objective.setScore(targetEntity.scoreboardIdentity, parseInt(Math.floor(arg.damagingEntity?.location.y), 10) || 0);
      }
    }
      {
      const objective = world.scoreboard.getObjective('chestposZ');
      const targetEntity = arg.damagingEntity;
      if (objective && targetEntity?.scoreboardIdentity) {
        objective.setScore(targetEntity.scoreboardIdentity, parseInt(Math.floor(arg.damagingEntity?.location.z), 10) || 0);
      }
    }
  }
});
