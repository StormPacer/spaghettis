// deno-lint-ignore-file
import { Wall } from "https://deno.land/x/remapper@3.1.2/src/mod.ts";

function Square(startTime: number, endTime: number, track: string, x: number, y: number, z: number, length: number) {
    let wall1 = new Wall(startTime, endTime - startTime, 0, 1)

        wall1.track.value = track,
        wall1.scale = [10, 0.1, length],

            wall1.animate.definitePosition = [[x, y, z, 0]]

    wall1.push()


    let wall2 = new Wall(startTime, endTime - startTime, 0, 1)

        wall2.track.value = track,
        wall2.scale = [0.1, 10, length],

            wall2.animate.definitePosition = [[x + 9.8, y, z, 0]]

    wall2.push()

    let wall3 = new Wall(startTime, endTime - startTime, 0, 1)

        wall3.track.value = track,
        wall3.scale = [0.1, 10, length],

            wall3.animate.definitePosition = [[x, y, z, 0]]

    wall3.push()

    let wall4 = new Wall(startTime, endTime - startTime, 0, 1)

        wall4.track.value = track,
        wall4.scale = [10, 0.1, length],

            wall4.animate.definitePosition = [[x + -0.1, y + 10, z, 0]]
    
    wall4.push()
}