import {
    world,
    system
} from "@minecraft/server";

// 20 ticks equals 1 second in Minecraft
function mainTick() {
  const seconds = 30
  if (system.currentTick % (20*seconds) === 0) {
    world.sendMessage("eh o amigo, amigo da galera");
  }
  system.run(mainTick);
}

system.run(mainTick);