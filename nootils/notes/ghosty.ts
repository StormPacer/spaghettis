// deno-lint-ignore-file
import { activeDiff, EASE, Note } from "https://deno.land/x/remapper@3.1.2/src/mod.ts";

/** Base function needed to make the effects in ghosty.ts work*/

export function InternalGhosty(filteredNotes: Note[], speed: number, maxY: number, easing: EASE = "easeInOutCubic", transparent?: boolean) {
    const positions: any = [[0, 0, 0, 0]];
    let positive = false;
    for (let i = speed + 1; i > 0; i--) {
        let pos = positive ? [0, maxY, 0, 0.35 / i, easing] : [0, -maxY, 0, 0.35 / i, easing];
        positions.push(pos);
        positive = !positive;
    }
    positions.push([0, 0, 0, 0.4, easing]);
    filteredNotes.forEach(note => {
            note.animate.dissolve = [
                transparent ? [0, 0] : [1, 0],
            ],
            note.animate.dissolveArrow = [
                [0, 0],
                [1, 0.05],
            ],
            note.animate.position = positions,
        note.push();
    });
}
//!YOU NEED TO INCLUDE INTERNAL GHOSTY ABOVE THE DIFFERENT EFFECTS FUNCTIONS(Found Below)

/**
 * Make notes(in the specified track) bounce up and down like ghosts.
 * This will override any animations already applied to the notes.
 * @param track The track to apply the effect to.
 * @param speed The speed in how many times it bounces before reaching the player.
 * @param maxY The max Y level the note can reach on negative Y and positive Y
 * @param easing The easing type.
 * @param transparent Should only the arrow be visible?
 * @author cal117
 * @author IntoTheAbyss490(Updating Everything)
 */

export function GhostyTrack(track: string, speed: number, maxY: number, easing: EASE = "easeInOutCubic", transparent?: boolean) {
    const filteredNotes = activeDiff.notes.filter(note => {
        if(!note.customData) note.customData = {};
        if(Array.isArray(note.track.value)) return note.track.value.includes(track);
        else if (note.track.value == track) return true;
        else return false;
    });
    InternalGhosty(filteredNotes, speed, maxY, easing, transparent);
}

//GhostyTrack("track", 0.5, 1, "easeOutCubic", true)

/**
 * Make notes bounce up and down like ghosts.
 * @param startBeat The beat to start the effect on.
 * @param endBeat The beat to end the effect on.
 * @param speed The speed in how many times it bounces before reaching the player.
 * @param maxY The max Y level the note can reach on negative Y and positive Y
 * @param easing The easing to use.
 * @param transparent Should only the arrow be visible?
 * @author cal117
 * @author IntoTheAbyss490(Updating Everything)
 */

export function Ghosty(startBeat: number, endBeat: number, speed: number, maxY: number, easing: EASE = "easeInOutCubic", transparent?: boolean) {
    const filteredNotes = activeDiff.notes.filter(n => n.time >= startBeat && n.time <= endBeat);
    InternalGhosty(filteredNotes, speed, maxY, easing, transparent);
}

//Ghosty(0, 100, 0.5, 1, "easeOutCubic", false)
