import cv2
import numpy as np

img = cv2.imread('assets/images/nios-career-point.png', cv2.IMREAD_UNCHANGED)
b, g, r, a = cv2.split(img)
opaque = (a > 100).astype(np.uint8)
num_labels, labels, stats, centroids = cv2.connectedComponentsWithStats(opaque)

def get_d(comp_idx, eps=0.35):
    mask = (labels == comp_idx).astype(np.uint8)
    contours, hierarchy = cv2.findContours(mask, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_NONE)
    if not contours:
        return ''
    d_list = []
    for c in contours:
        approx = cv2.approxPolyDP(c, eps, True)
        if len(approx) < 3:
            continue
        pts = approx.reshape(-1, 2)
        cmd = f"M {pts[0][0]} {pts[0][1]} " + " ".join(f"L {p[0]} {p[1]}" for p in pts[1:]) + " Z"
        d_list.append(cmd)
    return " ".join(d_list)

keys = [
    ('n', 2),
    ('gold_ball', 1),
    ('nib_collar', 3),
    ('nib_body', 17),
    ('o', 4),
    ('s', 5),
    ('c', 6),
    ('a', 7),
    ('r1', 8),
    ('e1', 9),
    ('e2', 10),
    ('r2', 11),
    ('p', 12),
    ('o2', 13),
    ('i2', 14),
    ('n2', 15),
    ('t', 16)
]
p = {}
for name, idx in keys:
    p[name] = get_d(idx, 0.35)

svg_template = """<svg id="intro-brand-svg" class="intro-brand-svg" viewBox="0 0 400 80" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <radialGradient id="goldSphereGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#FFF6B8"/>
            <stop offset="35%" stop-color="#EFAD1E"/>
            <stop offset="100%" stop-color="#B87204"/>
        </radialGradient>
        <filter id="brandDropGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="#EFAD1E" flood-opacity="0.35"/>
            <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.45"/>
        </filter>
    </defs>

    <!-- MAIN BRAND VECTOR WRAPPER -->
    <g id="brand-vector-group" class="brand-vector-group" filter="url(#brandDropGlow)">
        
        <!-- 1. NIOS UNIT (Emblem, N, O, S) -->
        <g id="unit-nios" class="brand-unit unit-nios">
            
            <!-- CENTRAL EMBLEM (Pen Nib + Gold Ball) -->
            <g id="elem-emblem" class="brand-elem elem-emblem">
                <!-- Golden Ball (Circle on top) -->
                <circle id="elem-gold-ball" class="emblem-part elem-ball" cx="68.5" cy="12.5" r="6.2" fill="url(#goldSphereGrad)"/>
                <!-- Pen Nib Collar -->
                <path id="elem-nib-collar" class="emblem-part elem-collar" d="{nib_collar}" fill="#ED1D25"/>
                <!-- Pen Nib Body with Breather Hole and Slit -->
                <path id="elem-nib-body" class="emblem-part elem-nib" d="{nib_body}" fill="#ED1D25"/>
            </g>

            <!-- Letter N -->
            <g id="elem-letter-n" class="brand-elem elem-letter letter-n">
                <path d="{n}" fill="#2B2A87"/>
            </g>

            <!-- Letter O -->
            <g id="elem-letter-o" class="brand-elem elem-letter letter-o">
                <path d="{o}" fill="#2B2A87" fill-rule="evenodd"/>
            </g>

            <!-- Letter S -->
            <g id="elem-letter-s" class="brand-elem elem-letter letter-s">
                <path d="{s}" fill="#2B2A87"/>
            </g>
        </g>

        <!-- 2. CAREER UNIT -->
        <g id="unit-career" class="brand-unit unit-career">
            <path id="letter-c"  class="career-letter let-c"  d="{c}"  fill="#ED1D25"/>
            <path id="letter-a"  class="career-letter let-a"  d="{a}"  fill="#ED1D25"/>
            <path id="letter-r1" class="career-letter let-r1" d="{r1}" fill="#ED1D25"/>
            <path id="letter-e1" class="career-letter let-e1" d="{e1}" fill="#ED1D25"/>
            <path id="letter-e2" class="career-letter let-e2" d="{e2}" fill="#ED1D25"/>
            <path id="letter-r2" class="career-letter let-r2" d="{r2}" fill="#ED1D25"/>
        </g>

        <!-- 3. POINT UNIT -->
        <g id="unit-point" class="brand-unit unit-point">
            <path id="letter-p"  class="point-letter let-p"  d="{p_let}"  fill="#ED1D25"/>
            <path id="letter-o2" class="point-letter let-o2" d="{o2}" fill="#ED1D25" fill-rule="evenodd"/>
            <path id="letter-i2" class="point-letter let-i2" d="{i2}" fill="#ED1D25"/>
            <path id="letter-n2" class="point-letter let-n2" d="{n2}" fill="#ED1D25"/>
            <path id="letter-t"  class="point-letter let-t"  d="{t}"  fill="#ED1D25"/>
        </g>
    </g>
</svg>"""

svg_content = svg_template.format(
    nib_collar=p['nib_collar'],
    nib_body=p['nib_body'],
    n=p['n'],
    o=p['o'],
    s=p['s'],
    c=p['c'],
    a=p['a'],
    r1=p['r1'],
    e1=p['e1'],
    e2=p['e2'],
    r2=p['r2'],
    p_let=p['p'],
    o2=p['o2'],
    i2=p['i2'],
    n2=p['n2'],
    t=p['t']
)

with open('assets/images/nios-career-point.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)

print("Saved assets/images/nios-career-point.svg successfully!")
