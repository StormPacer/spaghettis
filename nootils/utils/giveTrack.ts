import { activeDiff } from "https://deno.land/x/remapper@3.1.2/src/mod.ts";

/**
 * Gives the notes between desired beats a track.
 * @param track The track you want the notes to have.
 * @param t1 From which beat it should start assigning the track.
 * @param t2 To which beat it should assign the tracks to.
 * @author StormPacer
 * @author IntoTheAbyss490(Updating Everything)
 */

export function GiveNotesTrack(track: string, t1: number, t2: number) {
    const filterednotes = activeDiff.notes.filter(n => n.time >= t1 && n.time <= t2)
    filterednotes.forEach(note => {
        if (!note.track.value) note.track.value = track
        if (Array.isArray(note.track.value)) note.track.value.push(track)
        else if (note.track.value != track) note.track.value = [note.track.value, track]
    });
}

//GiveNotesTrack("Track", 0, 100)

/**
 * Gives the walls between desired beats a track.
 * @param track The track you want the walls to have.
 * @param t1 From which beat it should start assigning the track.
 * @param t2 To which beat it should assign the tracks to.
 * @author StormPacer
 * @author IntoTheAbyss490(Updating Everything) 
 */

export function GiveWallsTrack(track: string, t1: number, t2: number) {
    const filteredwalls = activeDiff.walls.filter(o => o.time >= t1 && o.time <= t2)
    filteredwalls.forEach(wall => {
        if (!wall.customData) wall.customData = {};
        if (Array.isArray(wall.track.value)) wall.track.value.push(track)
        else wall.track.value = track;
    })
}

//GiveWallsTrack("Track", 0, 100)