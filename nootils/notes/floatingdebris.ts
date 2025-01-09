// deno-lint-ignore-file
import {CUT, Note, notesBetween, rand } from "https://deno.land/x/remapper@3.1.2/src/mod.ts";

/**
 * Gives the effect of floating debris when you slice a note.
 * @param startBeat The beat on which the effect should start on.
 * @param endBeat The beat to end the effect on.
 * @param duration How long the debris will last, defaulted to 2.
 * @param spread How far the debris will go, defaulted to 1.
 * @author Pangwen
 * @author IntoTheAbyss490(Updating Everything)
 */

export function FloatingDebris(startBeat: number,  endBeat: number,  duration: number, spread: number) {
    notesBetween(startBeat, endBeat, note => {
            let dupe = new Note(note.time,  note.type,  note.direction,  note.offset);

            dupe.noteGravity = false;
            dupe.noteLook = false;
            dupe.spawnEffect = false;
            dupe.interactable = false;
            dupe.offset = duration;

            dupe.animate.dissolveArrow = [[0, 0]];
            dupe.animate.dissolve = [[0, 0], [0, 0.5], [0.85, 0.501], [0, 1, "easeOutCubic"]];
            dupe.animate.localRotation = [[0, 0, 0, 0.5], [rand(-180, 180), rand(-180, 180), rand(-180, 180), 1]];
            if (note.direction == CUT.UP) {
                dupe.animate.definitePosition = [[0, 0, 0, 0], [0, 0, 0, 0.5], [0*spread, 3, 5, 1, "easeOutCubic"]];
            } else if (note.direction == CUT.DOWN) {
                dupe.animate.definitePosition = [[0, 0, 0, 0], [0, 0, 0, 0.5], [0*spread, -3, 5, 1, "easeOutCubic"]];
            } else if (note.direction == CUT.LEFT) {
                dupe.animate.definitePosition = [[0, 0, 0, 0], [0, 0, 0, 0.5], [-3*spread, 0, 5, 1, "easeOutCubic"]];
            } else if (note.direction == CUT.RIGHT) {
                dupe.animate.definitePosition = [[0, 0, 0, 0], [0, 0, 0, 0.5], [3*spread, 0, 5, 1, "easeOutCubic"]];
            } else if (note.direction == CUT.UP_LEFT) {
                dupe.animate.definitePosition = [[0, 0, 0, 0], [0, 0, 0, 0.5], [-3*spread, 3, 5, 1, "easeOutCubic"]];
            } else if (note.direction == CUT.UP_RIGHT) {
                dupe.animate.definitePosition = [[0, 0, 0, 0], [0, 0, 0, 0.5], [3*spread, 3, 5, 1, "easeOutCubic"]];
            } else if (note.direction == CUT.DOWN_LEFT) {
                dupe.animate.definitePosition = [[0, 0, 0, 0], [0, 0, 0, 0.5], [-3*spread, -3, 5, 1, "easeOutCubic"]];
            } else if (note.direction == CUT.DOWN_RIGHT) {
                dupe.animate.definitePosition = [[0, 0, 0, 0], [0, 0, 0, 0.5], [3*spread, -3, 5, 1, "easeOutCubic"]];
            } else {
                dupe.animate.definitePosition = [[0, 0, 0, 0], [0, 0, 0, 0.5], [rand(-3, 3), rand(-3, 3), 5, 1, "easeOutCubic"]];
            }
        dupe.push();
})};

//FloatingDebris(0, 100, 5, 5)