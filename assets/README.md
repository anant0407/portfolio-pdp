# assets

Images referenced from `content.json`. Nothing here is required — any `image`
field left as `""` renders a hatched placeholder with its caption instead.

To use a real image, drop the file here and point at it:

```json
{ "image": "assets/gallery-01.jpg", "alt": "This site with its analytics panel open" }
```

`alt` is used whether or not `image` is set, so write it either way.

What the copy script expects, in gallery order:

| slot | subject |
|------|---------|
| 1 | this site, analytics panel open |
| 2 | a ranked test roadmap, ranking method visible |
| 3 | a brief, one page |
| 4 | a results readout showing a loss |
| 5 | four rejected territories, struck through |
