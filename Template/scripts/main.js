import { world, Player, system } from '@minecraft/server';

//ここにスクリプトを記述
// 毎ティック（短い間隔）で全プレイヤーの座標を四捨五入してスコアにセットする
system.runInterval(() => {
    // まずスコアボード目標が存在しない場合は作成する（グローバルに一度だけ）
    if (!world.scoreboard.getObjective('chestposX')) {
        world.scoreboard.addObjective('chestposX', 'chestposX');
    }
    if (!world.scoreboard.getObjective('chestposY')) {
        world.scoreboard.addObjective('chestposY', 'chestposY');
    }
    if (!world.scoreboard.getObjective('chestposZ')) {
        world.scoreboard.addObjective('chestposZ', 'chestposZ');
    }

    const objX = world.scoreboard.getObjective('chestposX');
    const objY = world.scoreboard.getObjective('chestposY');
    const objZ = world.scoreboard.getObjective('chestposZ');

    // 全プレイヤーをループして座標を四捨五入してセット
    for (const player of world.getPlayers()) {
        const id = player.scoreboardIdentity;
        if (!id) continue;
        const rx = Math.round(player.location.x || 0);
        const ry = Math.round(player.location.y || 0);
        const rz = Math.round(player.location.z || 0);

        if (objX) objX.setScore(id, rx);
        if (objY) objY.setScore(id, ry);
        if (objZ) objZ.setScore(id, rz);
    }
}, 1);

// 必要に応じてここに追加イベント処理を実装してください。