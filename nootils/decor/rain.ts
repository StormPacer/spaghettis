// deno-lint-ignore-file
import { Wall } from "https://deno.land/x/remapper@3.1.2/src/mod.ts";
import { rand } from "https://deno.land/x/remapper@3.1.2/src/mod.ts"

/**
 * Spawns in walls that resemble rain.
 * @param startingBeat The beat that the rain should start on.
 * @param duration For how many beats the rain should last for.
 * @param amount How many walls should be created per beat.
 * @param R The red value for the color.
 * @param G The green value for the color.
 * @param B The blue value for the color.
 * @param A The alpha value for the color.
 * @author StormPacer
 * @author IntoTheAbyss490(Updating Everything)
 */

export function Rain(startingBeat: number, duration: number, amount: number, R: number, G: number, B: number, A: number) {
    for (let i = 0; i < (duration * amount); i++) {
        let x = rand(-40, 40)
        let z = rand(0, 50)

        let wall = new Wall(startingBeat + (i / amount), 0.5, 1, 0, 0);

        wall.color = [R, G, B, A],
        wall.interactable = false,
        wall.scale = [0.1, 6, 0.1],
            wall.animate.dissolve = [[0, 0.1], [1, 0.2], [1, 0.9], [0, 1]],
            wall.animate.definitePosition = [[x, rand(200, 300), z, 0], [x, rand(-60, -40), z, 1]]
        
        wall.push();
    }
};

//Rain(0, 100, 100,0.419, 0.513, 1, 0.1)