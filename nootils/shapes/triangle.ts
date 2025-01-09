// deno-lint-ignore-file
import { Wall } from "https://deno.land/x/remapper@3.1.2/src/mod.ts";

export function Triangle(startTime: number, endTime: number, track: string, x: number, y: number, z: number, length: number) {
    let wall1 = new Wall(startTime, endTime - startTime, 0, 1)
        
        wall1.scale = [10, 0.1, length],
        wall1.track.value = track,

            wall1.animate.definitePosition = [[x, y, z, 0]]

    wall1.push()

    let wall2 = new Wall(startTime, endTime - startTime, 0, 1)

        wall2.scale = [10, 0.1, length],
        wall2.localRotation = [0, 0, -60],
        wall2.track.value = track,

            wall2.animate.definitePosition = [[2.39 + x, 4.25 + y, z, 0]]
    
    wall2.push()

    let wall3 = new Wall(startTime, endTime - startTime, 0, 1)

        wall3.scale = [10, 0.1, length],
        wall3.localRotation = [0, 0, 60],
        wall3.track.value = track,

            wall3.animate.definitePosition = [[-2.39 + x, 4.25 + y, z, 0]]
            
    wall3.push()
}