// deno-lint-ignore-file
import { Wall } from "https://deno.land/x/remapper@3.1.2/src/mod.ts";

export function Circle(startTime: number, endTime: number, track: string, radius: number, amount: number, height: number, length: number, x: number, y: number, z: number) {
    for (let i = 0; i < amount; i++) {
        let wall = new Wall(startTime, endTime - startTime, 0, 0, 0)

        let angle = Math.PI * 2 / amount;
        let rot = 360 / amount * i;
        let radians = angle * i
        let width = 2 * radius * Math.tan(Math.PI / amount);
        let sx = x + Math.cos(radians) * radius - width / 2;
        let sy = y + Math.sin(radians) * radius - height / 2;

            wall.interactable = false,
            wall.track.value = track,
            wall.scale = [width, height, length],
            wall.rotation = [0, 0, 0],
            wall.localRotation = [0, 0, 90 + rot],
            wall.position = [sx, sy],
                wall.animate.definitePosition = [[0, 0, z, 0]]
            
            wall.push()
    }
}