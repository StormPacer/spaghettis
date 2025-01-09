// deno-lint-ignore-file
import { Wall } from "https://deno.land/x/remapper@2.1.0/src/mod.ts";
import { rand } from "https://deno.land/x/remapper@3.1.2/src/mod.ts";

/**
 * Spawns in walls that resemble a fire.
 * @param startingBeat The beat that the fire should start on.
 * @param duration For how many beats the fire should last for.
 * @param fireWallDuration For how many beats each fire wall should last for.
 * @param size How big the walls should be.
 * @param x The starting X position of the fire.
 * @param y The starting Y position of the fire.
 * @param z The starting Z position of the fire.
 * @author StormPacer
 * @author IntoTheAbyss490(Updated Everything)
 */

export function Fire(startingBeat: number, duration: number, fireWallDuration: number, size: number, x: number, y: number, z: number) {
    for (let i = 0; i < (duration * 6); i++) {

        let wall = new Wall(startingBeat + (i / 6), fireWallDuration, 1, 0, 0);
        wall.interactable = false,
        wall.scale = [size, size, size],
            wall.animate.dissolve = [[0, 0], [1, 0.1], [1, 0.7], [0, 1]],
            wall.animate.color = [[1, 0, 0, 0.5, 0], [0.996, 1, 0.239, 0.5, 1]],
            wall.animate.localRotation = [[rand(0, 180), rand(0, 180), rand(0, 180), 0], [rand(0, 180), rand(0, 180), rand(0, 180), 1]],
            wall.animate.definitePosition = [[x, y, z, 0, "easeOutCubic"], [(x + rand(-2, 2)), (y + rand(3, 5)), z, 1]]
        
        wall.push();    
    }
};

//Fire(0, 100, 20, 0.25, 0, 0, 0)