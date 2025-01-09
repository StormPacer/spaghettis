// deno-lint-ignore-file
import { Wall } from "https://deno.land/x/remapper@3.1.2/src/mod.ts";

/**
 * Spawns a wall that resembles water.
 * @param startBeat The beat that the water should start on.
 * @param endBeat The beat that the water should end on.
 * @param track What track the water should be assigned to.
 * @param speed How fast the water should move, numbers between 0-5.
 * @param y On which Y position the water should spawn.
 * @param R The red value for the color.
 * @param G The green value for the color.
 * @param B The blue value for the color.
 * @param A The alpha value for the color.
 * @author StormPacer
 * @author IntoTheAbyss490(Updating Everything)
 */

export function Water(startBeat: number, endBeat: number, track: string, speed: number, y: number, R: number, G: number, B: number, A: number) {
    let z = 0
    switch(speed) {
        case 0:
            z = -1000
        case 1:
            z = -1100
        case 2:
            z = -1200
        case 3:
            z = -1300
        case 4:
            z = -1400
        case 5:
            z = -1500
    }

    let wall = new Wall(startBeat, endBeat, 1, 0, 0);

    wall.track.value = track,
    wall.color = [R, G, B, A],
    wall.interactable = false,
    wall.scale =  [2000, 0.5, 2000],
        wall.animate.definitePosition = [[-1000, y, -1000, 0], [-1000, y, z, 1]]
    
    wall.push();
}

//Water(0, 100, "water", 0.25, 0, 0, 1.5, 2, 10)