import {
    world,
    system
} from "@minecraft/server";

// 20 ticks equals 1 second in Minecraft
function mainTick() {
  if (system.currentTick % 1000 === 0) {
    world.sendMessage("AAAAAAAAAAAHHHHHHHHHHH");
  }
  system.run(mainTick);
}

system.run(mainTick);