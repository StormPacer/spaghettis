// deno-lint-ignore-file
import { rand } from 'https://deno.land/x/remapper@3.1.2/src/mod.ts';
import { Wall } from 'https://deno.land/x/remapper@3.1.2/src/mod.ts';

/**
 * Spawns in floating pillars on the desired positions and spacing.
 * @param startBeat The beat that the pillars should start on.
 * @param endBeat The beat that the pillars should end on.
 * @param amountPerRow The amount of pillars per row.
 * @param spacing The distance between the pillars.
 * @param startX Where the pillar grid should start on the X axis.
 * @param height How tall the pillars should be.
 * @param width How wide the pillars should be.
 * @param startZ Where the pillar grid should start on the Z axis.
 * @param track The track that the pillars should be assigned to.
 * @param R The red value for the color of the pillars.
 * @param G The green value for the color of the pillars.
 * @param B The blue value for the color of the pillars.
 * @param A The alpha value for the color of the pillars.
 * @author StormPacer
 * @author IntoTheAbyss490(Updating Everything)
 */

export function FloatingPillars(startBeat: number, endBeat: number, amountPerRow: number, spacing: number, startX: number, height: number, width: number, startZ: number, track: string, R: number, G: number, B: number, A: number, min: number, max: number) {
    let z = startZ
    for (let i = 0; i <= amountPerRow; i++) {
        if (z <= spacing * amountPerRow) {
            z += spacing
            let x = startX
            for (let i = 0; i <= amountPerRow; i++) {
                if (x <= spacing * amountPerRow) {
                    x += spacing

                    let wall = new Wall(startBeat, endBeat - startBeat, 1, 0, 0);

                        wall.track.value = track,
                        wall.color = [R, G, B, A],
                        wall.interactable = false,
                        wall.scale = [width, height, width],
                        wall.animate.localRotation = [[rand(0, 360), rand(0, 360), rand(0, 360), 0, "easeInOutCubic"], [rand(0, 360), rand(0, 360), rand(0, 360), 0.2, "easeInOutCubic"], [rand(0, 360), rand(0, 360), rand(0, 360), 0.4, "easeInOutCubic"], [rand(0, 360), rand(0, 360), rand(0, 360), 0.6, "easeInOutCubic"], [rand(0, 360), rand(0, 360), rand(0, 360), 0.8, "easeInOutCubic"], [rand(0, 360), rand(0, 360), rand(0, 360), 1, "easeInOutCubic"]],
                        wall.animate.definitePosition = [[x, rand(min, max, 0.1), z, 0, "easeInOutCubic"], [x, rand(min, max, 0.1), z, 0.2, "easeInOutCubic"], [x, rand(min, max, 0.1), z, 0.4, "easeInOutCubic"], [x, rand(min, max, 0.1), z, 0.6, "easeInOutCubic"], [x, rand(min, max, 0.1), z, 0.8, "easeInOutCubic"], [x, rand(min, max, 0.1), z, 1, "easeInOutCubic"]]
                    wall.push();
                    }
            };
        }
    }
}

//FloatingPillars(0.125, 168, 12, 12, -65, 0.5, 0.5, -10, "pillarsTrack", 1, 1, 1, 10, 2, 35)