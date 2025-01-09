// deno-lint-ignore-file
import { Wall } from "https://deno.land/x/remapper@3.1.2/src/mod.ts";
import { rand } from "https://deno.land/x/remapper@3.1.2/src/mod.ts";

/**
 * Spawns in walls that resemble smoke
 * @param startingBeat The beat that the smoke should start on.
 * @param duration For how many beats the smoke should last for.
 * @param smokeWallDuration For how many beats each smoke wall should last for.
 * @param size How big the walls should be.
 * @param x The starting X position of the smoke.
 * @param y The starting Y position of the smoke.
 * @param z The starting Z position of the smoke.
 * @param R The red value for the color.
 * @param G The green value for the color.
 * @param B The blue value for the color.
 * @param A The alpha value for the color.
 * @author StormPacer
 * @author IntoTheAbyss490(Updating Everything)
 */

export function Smoke(startingBeat: number, duration: number, smokeWallDuration: number, size: number, x: number, y: number, z: number, R: number, G: number, B: number, A: number) {
    for (let i = 0; i < (duration * 6); i++) {

        let wall = new Wall(startingBeat + (i / 6), smokeWallDuration, 1, 0, 0);

        wall.color = [R, G, B, A],
        wall.interactable = false,
        wall.scale = [size, size, size],
            wall.animate.dissolve = [[0, 0], [1, 0.1], [1, 0.7], [0, 1]],
            wall.animate.localRotation = [[rand(0, 180), rand(0, 180), rand(0, 180), 0], [rand(0, 180), rand(0, 180), rand(0, 180), 1]],
            wall.animate.definitePosition = [[x, y, z, 0, "easeOutCubic"], [(x + rand(-3, 3)), (y + rand(4, 8)), z, 1]]
            
            wall.push();    
    }
};

//Smoke(0, 100, 20, 0.25, 0, 0, 0, 0.1, 0.1, 0.1, 0.1)