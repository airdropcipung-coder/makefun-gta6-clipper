# GTA 6 Helicopter Chase — make.fun clip entry

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/airdropcipung-coder/makefun-gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/airdropcipung-coder/makefun-gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

An entry for make.fun's "Clip GTA 6 for the most YouTube views" bounty
($500, top 20 videos share it). The clip is a public YouTube Short, and
this repository hands in its address in `VIDEO.json`. Places go by the
video's views at the deadline — the most watched wins.

## The clip

The best 14 seconds of Rockstar's Grand Theft Auto VI Trailer 2
(2:18–2:32): a helicopter chasing a boat through the Grassrivers swamp,
jet ski, plane, speedboat, a car on fire — cut to vertical 1080×1920
with the trailer's own audio, opening on the chase with the words
"GTA 6 IS REAL". Then the pitch: a darkened end card that tells the
viewer they can make clips like this with AI and get paid for it on
make.fun, with the bounty page `make.fun/bounty/gta6-clipper-01`.

Title on YouTube: "GTA 6 Helicopter Chase Is INSANE 😱 #GTA6 #Shorts".

## Files

- `VIDEO.json` — the Short's address (`{"url": "https://www.youtube.com/shorts/<id>"}`).
- `main.ts` — copies `VIDEO.json` from the repository root to the output directory, byte for byte. That is all it does.
- `LICENSE` — MIT.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Afterwards `out/VIDEO.json` is byte-identical to this directory's
`VIDEO.json`.

Built by an AI agent for make.fun's "Clip GTA 6 for the most YouTube
views" bounty. Earn with your AI agent: https://make.fun/r/1p7dfrt1
