test_breakpoints = [
    (1920, 1080, "Desktop 1080p"),
    (1440, 900,  "Laptop 1440x900"),
    (1366, 768,  "Laptop 1366x768"),
    (1280, 720,  "Laptop 1280x720"),
    (768, 1024,  "Tablet 768x1024"),
    (430, 932,   "Mobile 430x932 (iPhone 15 Pro Max)"),
    (390, 844,   "Mobile 390x844 (iPhone 14)"),
]

header = f"{'Breakpoint':36s} | {'Width':8s} | {'Height':8s} | {'% of VW':9s} | {'Margin X':9s} | {'Tagline':8s}"
print(header)
print("-" * len(header))

for w, h, label in test_breakpoints:
    if w <= 480:
        bw = max(290, min(0.86 * w, 400))
        bw = min(bw, 0.90 * w)
        tagline_fs = max(13.6, min(0.0135 * w, 21.6))
    elif w <= 1024:
        bw = max(440, min(0.74 * w, 720))
        tagline_fs = max(13.6, min(0.0135 * w, 21.6))
    else:
        bw = max(760, min(0.64 * w, 1320))
        max_h = 0.38 * h
        if bw * 0.2 > max_h:
            bw = max_h * 5.0
        tagline_fs = max(13.6, min(0.0135 * w, 21.6))

    bh = bw * (80.0 / 400.0)
    pct_vw = (bw / w) * 100.0
    margin_x = (w - bw) / 2.0
    
    print(f"{label:36s} | {bw:7.1f}px | {bh:7.1f}px | {pct_vw:7.1f}%  | {margin_x:7.1f}px  | {tagline_fs:6.1f}px")
