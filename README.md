# Foundry VTT - Better Target

![Release](https://github.com/sPOiDar/fvtt-module-better-target/workflows/Release/badge.svg)
![Forge Users](https://img.shields.io/badge/dynamic/json?color=blue&label=Forge%20Users&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Fbetter-target)
![Foundry Version](https://img.shields.io/badge/dynamic/json?color=blue&label=Foundry%20Version&prefix=v&query=%24.compatibleCoreVersion&url=https%3A%2F%2Fgithub.com%2FsPOiDar%2Ffvtt-module-better-target%2Fraw%2Fmaster%2Fmodule.json)

The default target indicator can be difficult to see in tight confines, or crowded rooms. This module changes the target indicator to a crosshair that renders over the targeted token.

NOTE: There's no easy way to update the target graphics, so this module overrides the entire function that draws it. This is somewhat prone to breakage across Foundry versions, but I'll endevour to keep it up to date and compatible.

![Example](example/example.png)
