// deno-lint-ignore-file
import {activeDiff, CUT, Note, notesBetween, rand } from "https://deno.land/x/remapper@3.1.2/src/mod.ts";

enum NoteTrailType {
    BLOCK = "block",
    ARROW = "arrow",
    BOTH = "both",
}

export function InternalNoteTrail(filterednotes: Note[], length: number, type: NoteTrailType) {
    filterednotes.forEach(note => {
        note.noteGravity = false;
        note.noteLook = false;
        note.spawnEffect = false;
        for (let i = 1; i <= length; i++) {
            let dupe = new Note(note.time, note.type, note.direction, note.x, note.y);
            dupe.noteGravity = false;
            dupe.noteLook = false;
            dupe.spawnEffect = false;
            dupe.animate.position = [[rand(-0.2, 0.2), 0, i * 4, 0.4], [0, 0, 0, 0.7]];
            dupe.animate.localRotation = [[rand(0, 180), rand(0, 180), rand(0, 180), 0], [0, 0, 0, 0.3]];
            if (type.valueOf() == "block" || type.valueOf() == "both") dupe.animate.dissolve = [[0.1, 0], [0, 1, "easeInOutCubic"]];
            if (type.valueOf() == "arrow" || type.valueOf() == "both") dupe.animate.dissolveArrow = [[0.1, 0]];
            dupe.push();
        }
    })
}

/**
 * Spawns a trail behind a note - similar to Somewhere Out There
 * @param startBeat The beat to start the effect on.
 * @param endBeat The beat to end the effect on.
 * @param length The length of the trail.
 * @param type What the effect should use for the trail, it can be "NoteTrailType.ARROW" or "NoteTrailType.BLOCK".
 * @author cal117
 * @author IntoTheAbyss490(Updating Everything)
 */
export function NoteTrail(startBeat: number, endBeat: number, length: number, type: NoteTrailType) {
    const filterednotes = activeDiff.notes.filter(note => note.time >= startBeat && note.time <= endBeat);
    InternalNoteTrail(filterednotes, length, type);
}

//NoteTrailTrack(0, 100, 5, NoteTrailType.BLOCK)

/**
 * Spawns a trail behind a note - similar to Somewhere Out There
 * @param track The track to apply the effect on.
 * @param length The length of the trail.
 * @param type What the effect should use for the trail, it can be "NoteTrailType.ARROW" or "NoteTrailType.BLOCK".
 * @author cal117
 * @author IntoTheAbyss490(Updating Everything)
 */

export function NoteTrailTrack(track: string, length: number, type: NoteTrailType) {
    const filterednotes = activeDiff.notes.filter(note => {
        if(Array.isArray(note.track.value)) return note.track.value.includes(track);
        else if (note.track.value == track) return true;
        else return false;
    });
    InternalNoteTrail(filterednotes, length, type);
}

//NoteTrailTrack("track", 5, NoteTrailType.BLOCK)