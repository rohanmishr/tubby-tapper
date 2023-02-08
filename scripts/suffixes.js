var nA, nB, nC, val, dA, dB, dC, dD, dE, dF, dG, dH, dI, dJ, suffix, suffixes = ["", "k", "M", "B", "T", "qd", "Qn", "sx", "Sp", "O", "N", "de", "Ud", "DD", "tdD", "qdD", "QnD", "sxD", "SpD", "OcD", "NvD", "Vgn", "UVg", "DVg", "TVg", "qtV", "QnV", "sxV", "SpV", "OcV", "NVG", "TGN", "UTG", "DTG", "tsTG", "qtTG", "QnTG", "sxTG", "SpTG", "OcTG", "NvTG", "QDGNTL", "uQDGNTL", "DQDGNTL", "tsQGNTL", "qtQGNTL", "QnQGNTL", "sxQGNTL", "SpQGNTL", "OcQGNTL", "NoQGNTL", "QNGNTL", "uQNGNTL", "DQNGNTL", "tsQNGNTL", "qtQNGNTL", "QnQNGNTL", "sxQNGNTL", "SpQNGNTL", "OcQNGNTL", "NoQNGNTL", "SXGNTL", "uSXGNTL", "DSXGNTL", "TSXGNTL", "qtSXGNTL", "QnSXGNTL", "sxSXGNTL", "SpSXGNTL", "OcSXGNTL", "NoSXGNTL", "SPGNTL", "uSPGNTL", "DSPGNTL", "tsSPGNTL", "qtSPGNTL", "QnSPGNTL", "sxSPGNTL", "SpSPGNTL", "OcSPGNTL", "NoSPGNTL", "OCGNTL", "uOCGNTL", "DOCGNTL", "tsOCGNTL", "qtOCGNTL", "QnOCGNTL", "sxOCGNTL", "SpOCGNTL", "OcOCGNTL", "NoOCGNTL", "NONGNTL", "uNONGNTL", "DNONGNTL", "tsNONGNTL", "qtNONGNTL", "QnNONGNTL", "sxNONGNTL", "SpNONGNTL", "OcNONGNTL", "NoNONGNTL", "CENT"];

function abbvNum(N, G) {
    if (null === N) return null;
    if (0 === N) return "0";
    G = !G || G < 0 ? 0 : G;
    var T = N.toPrecision(5).split("e"),
        T = 1 === T.length ? 0 : Math.floor(Math.min(T[1].slice(1), 1e3) / 3),
        G = T < 1 ? N.toFixed(0 + G) : (N / Math.pow(10, 3 * T)).toFixed(1 + G),
        T = (G < 0 ? G : Math.abs(G)) + suffixes[T];
    return 1e303 < N && (T = "inf", val = 1 / 0), T
}

function decodeNum(N) {
    for (var G = 0; G < N.length; G++)
        if ("0" != N.charAt(G) && "1" != N.charAt(G) && "2" != N.charAt(G) && "3" != N.charAt(G) && "4" != N.charAt(G) && "5" != N.charAt(G) && "6" != N.charAt(G) && "7" != N.charAt(G) && "8" != N.charAt(G) && "9" != N.charAt(G)) {
            nA = N.charAt(G - 3),
                nB = N.charAt(G - 2), nC = N.charAt(G - 1), dA = N.charAt(G), dB = N.charAt(G + 1), dC = N.charAt(G + 2), dD = N.charAt(G + 3), dE = N.charAt(G + 4), dF = N.charAt(G + 5), dG = N.charAt(G + 6), dH = N.charAt(G + 7), dI = N.charAt(G + 8), dJ = N.charAt(G + 9), suffix = dA + dB + dC + dD + dE + dF + dG + dH + dI + dJ,
                val = parseInt(nA + nB + nC);
            for (var T = 0; T < suffixes.length; T++)
                if (suffix == suffixes[T]) {
                    var L = 3 * T;
                    return val * Math.pow(10, L)
                }
        }
}
