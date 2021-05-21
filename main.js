const colorArr = [
    ["AliceBlue", "rgb(240, 248, 255)", "#F0F8FF"],
    ["AntiqueWhite", "rgb(250, 235, 215)", "#FAEBD7"],
    ["Aqua", "rgb(0, 255, 255)", "#00FFFF"],
    ["Aquamarine", "rgb(127, 255, 212)", "#7FFFD4"],
    ["Azure", "rgb(240, 255, 255)", "#F0FFFF"],
    ["Beige", "rgb(245, 245, 220)", "#F5F5DC"],
    ["Bisque", "rgb(255, 228, 196)", "#FFE4C4"],
    ["Black", "rgb(0, 0, 0)", "#000000"],
    ["BlanchedAlmond", "rgb(255, 235, 205)", "#FFEBCD"],
    ["Blue", "rgb(0, 0, 255)", "#0000FF"],
    ["BlueViolet", "rgb(138, 43, 226)", "#8A2BE2"],
    ["Brown", "rgb(165, 42, 42)", "#A52A2A"],
    ["BurlyWood", "rgb(222, 184, 135)", "#DEB887"],
    ["CadetBlue", "rgb(95, 158, 160)", "#5F9EA0"],
    ["Chartreuse", "rgb(127, 255, 0)", "#7FFF00"],
    ["Chocolate", "rgb(210, 105, 30)", "#D2691E"],
    ["Coral", "rgb(255, 127, 80)", "#FF7F50"],
    ["CornflowerBlue", "rgb(100, 149, 237)", "#6495ED"],
    ["Cornsilk", "rgb(255, 248, 220)", "#FFF8DC"],
    ["Crimson", "rgb(220, 20, 60)", "#DC143C"],
    ["Cyan", "rgb(0, 255, 255)", "#00FFFF"],
    ["DarkBlue", "rgb(0, 0, 139)", "#00008B"],
    ["DarkCyan", "rgb(0, 139, 139)", "#008B8B"],
    ["DarkGoldenrod", "rgb(184, 134, 11)", "#B8860B"],
    ["DarkGray", "rgb(169, 169, 169)", "#A9A9A9"],
    ["DarkGreen", "rgb(0, 100, 0)", "#006400"],
    ["DarkGrey", "rgb(169, 169, 169)", "#A9A9A9"],
    ["DarkKhaki", "rgb(189, 183, 107)", "#BDB76B"],
    ["DarkMagenta", "rgb(139, 0, 139)", "#8B008B"],
    ["DarkOliveGreen", "rgb(85, 107, 47)", "#556B2F"],
    ["DarkOrange", "rgb(255, 140, 0)", "#FF8C00"],
    ["DarkOrchid", "rgb(153, 50, 204)", "#9932CC"],
    ["DarkRed", "rgb(139, 0, 0)", "#8B0000"],
    ["DarkSalmon", "rgb(233, 150, 122)", "#E9967A"],
    ["DarkSeaGreen", "rgb(143, 188, 143)", "#8FBC8F"],
    ["DarkSlateBlue", "rgb(72, 61, 139)", "#483D8B"],
    ["DarkSlateGray", "rgb(47, 79, 79)", "#2F4F4F"],
    ["DarkSlateGrey", "rgb(47, 79, 79)", "#2F4F4F"],
    ["DarkTurquoise", "rgb(0, 206, 209)", "#00CED1"],
    ["DarkViolet", "rgb(148, 0, 211)", "#9400D3"],
    ["DeepPink", "rgb(255, 20, 147)", "#FF1493"],
    ["DeepSkyBlue", "rgb(0, 191, 255)", "#00BFFF"],
    ["DimGray", "rgb(105, 105, 105)", "#696969"],
    ["DodgerBlue", "rgb(30, 144, 255)", "#1E90FF"],
    ["FireBrick", "rgb(178, 34, 34)", "#B22222"],
    ["FloralWhite", "rgb(255, 250, 240)", "#FFFAF0"],
    ["ForestGreen", "rgb(34, 139, 34)", "#228B22"],
    ["Fuchsia", "rgb(255, 0, 255)", "#FF00FF"],
    ["Gainsboro", "rgb(220, 220, 220)", "#DCDCDC"],
    ["GhostWhite", "rgb(248, 248, 255)", "#F8F8FF"],
    ["Gold", "rgb(255, 215, 0)", "#FFD700"],
    ["Goldenrod", "rgb(218, 165, 32)", "#DAA520"],
    ["Gray", "rgb(128, 128, 128)", "#808080"],
    ["Green", "rgb(0, 128, 0)", "#008000"],
    ["GreenYellow", "rgb(173, 255, 47)", "#ADFF2F"],
    ["Grey", "rgb(128, 128, 128)", "#808080"],
    ["Honeydew", "rgb(240, 255, 240)", "#F0FFF0"],
    ["HotPink", "rgb(255, 105, 180)", "#FF69B4"],
    ["IndianRed", "rgb(205, 92, 92)", "#CD5C5C"],
    ["Indigo", "rgb(75, 0, 130)", "#4B0082"],
    ["Ivory", "rgb(255, 255, 240)", "#FFFFF0"],
    ["Khaki", "rgb(240, 230, 140)", "#F0E68C"],
    ["Lavender", "rgb(230, 230, 250)", "#E6E6FA"],
    ["LavenderBlush", "rgb(255, 240, 245)", "#FFF0F5"],
    ["LawnGreen", "rgb(124, 252, 0)", "#7CFC00"],
    ["LemonChiffon", "rgb(255, 250, 205)", "#FFFACD"],
    ["LightBlue", "rgb(173, 216, 230)", "#ADD8E6"],
    ["LightCoral", "rgb(240, 128, 128)", "#F08080"],
    ["LightCyan", "rgb(224, 255, 255)", "#E0FFFF"],
    ["LightGoldenrodYellow", "rgb(250, 250, 210)", "#FAFAD2"],
    ["LightGray", "rgb(211, 211, 211)", "#D3D3D3"],
    ["LightGreen", "rgb(144, 238, 144)", "#90EE90"],
    ["LightGrey", "rgb(211, 211, 211)", "#D3D3D3"],
    ["LightPink", "rgb(255, 182, 193)", "#FFB6C1"],
    ["LightSalmon", "rgb(255, 160, 122)", "#FFA07A"],
    ["LightSeaGreen", "rgb(32, 178, 170)", "#20B2AA"],
    ["LightSkyBlue", "rgb(135, 206, 250)", "#87CEFA"],
    ["LightSlateGray", "rgb(119, 136, 153)", "#778899"],
    ["LightSlateGrey", "rgb(119, 136, 153)", "#778899"],
    ["LightSteelBlue", "rgb(176, 196, 222)", "#B0C4DE"],
    ["LightYellow", "rgb(255, 255, 224)", "#FFFFE0"],
    ["Lime", "rgb(0, 255, 0)", "#00FF00"],
    ["LimeGreen", "rgb(50, 205, 50)", "#32CD32"],
    ["Linen", "rgb(250, 240, 230)", "#FAF0E6"],
    ["Magenta", "rgb(255, 0, 255)", "#FF00FF"],
    ["Maroon", "rgb(128, 0, 0)", "#800000"],
    ["MediumAquamarine", "rgb(102, 205, 170)", "#66CDAA"],
    ["MediumBlue", "rgb(0, 0, 205)", "#0000CD"],
    ["MediumOrchid", "rgb(186, 85, 211)", "#BA55D3"],
    ["MediumPurple", "rgb(147, 112, 219)", "#9370DB"],
    ["MediumSeaGreen", "rgb(60, 179, 113)", "#3CB371"],
    ["MediumSlateBlue", "rgb(123, 104, 238)", "#7B68EE"],
    ["MediumSpringGreen", "rgb(0, 250, 154)", "#00FA9A"],
    ["MediumTurquoise", "rgb(72, 209, 204)", "#48D1CC"],
    ["MediumVioletRed", "rgb(199, 21, 133)", "#C71585"],
    ["MidnightBlue", "rgb(25, 25, 112)", "#191970"],
    ["MintCream", "rgb(245, 255, 250)", "#F5FFFA"],
    ["MistyRose", "rgb(255, 228, 225)", "#FFE4E1"],
    ["Moccasin", "rgb(255, 228, 181)", "#FFE4B5"],
    ["NavajoWhite", "rgb(255, 222, 173)", "#FFDEAD"],
    ["Navy", "rgb(0, 0, 128)", "#000080"],
    ["OldLace", "rgb(253, 245, 230)", "#FDF5E6"],
    ["Olive", "rgb(128, 128, 0)", "#808000"],
    ["OliveDrab", "rgb(107, 142, 35)", "#6B8E23"],
    ["Orange", "rgb(255, 165, 0)", "#FFA500"],
    ["OrangeRed", "rgb(255, 69, 0)", "#FF4500"],
    ["Orchid", "rgb(218, 112, 214)", "#DA70D6"],
    ["PaleGoldenrod", "rgb(238, 232, 170)", "#EEE8AA"],
    ["PaleGreen", "rgb(152, 251, 152)", "#98FB98"],
    ["PaleTurquoise", "rgb(175, 238, 238)", "#AFEEEE"],
    ["PaleVioletRed", "rgb(219, 112, 147)", "#DB7093"],
    ["PapayaWhip", "rgb(255, 239, 213)", "#FFEFD5"],
    ["PeachPuff", "rgb(255, 218, 185)", "#FFDAB9"],
    ["Peru", "rgb(205, 133, 63)", "#CD853F"],
    ["Pink", "rgb(255, 192, 203)", "#FFC0CB"],
    ["Plum", "rgb(221, 160, 221)", "#DDA0DD"],
    ["PowderBlue", "rgb(176, 224, 230)", "#B0E0E6"],
    ["Purple", "rgb(128, 0, 128)", "#800080"],
    ["Rebeccapurple", "rgb(102, 51, 153)", "#663399"],
    ["Red", "rgb(255, 0, 0)", "#FF0000"],
    ["RosyBrown", "rgb(188, 143, 143)", "#BC8F8F"],
    ["RoyalBlue", "rgb(65, 105, 225)", "#4169E1"],
    ["SaddleBrown", "rgb(139, 69, 19)", "#8B4513"],
    ["Salmon", "rgb(250, 128, 114)", "#FA8072"],
    ["SandyBrown", "rgb(244, 164, 96)", "#F4A460"],
    ["SeaGreen", "rgb(46, 139, 87)", "#2E8B57"],
    ["Seashell", "rgb(255, 245, 238)", "#FFF5EE"],
    ["Sienna", "rgb(160, 82, 45)", "#A0522D"],
    ["Silver", "rgb(192, 192, 192)", "#C0C0C0"],
    ["SkyBlue", "rgb(135, 206, 235)", "#87CEEB"],
    ["SlateBlue", "rgb(106, 90, 205)", "#6A5ACD"],
    ["SlateGray", "rgb(112, 128, 144)", "#708090"],
    ["SlateGrey", "rgb(112, 128, 144)", "#708090"],
    ["Snow", "rgb(255, 250, 250)", "#FFFAFA"],
    ["SpringGreen", "rgb(0, 255, 127)", "#00FF7F"],
    ["SteelBlue", "rgb(70, 130, 180)", "#4682B4"],
    ["Tan", "rgb(210, 180, 140)", "#D2B48C"],
    ["Teal", "rgb(0, 128, 128)", "#008080"],
    ["Thistle", "rgb(216, 191, 216)", "#D8BFD8"],
    ["Tomato", "rgb(255, 99, 71)", "#FF6347"],
    ["Turquoise", "rgb(64, 224, 208)", "#40E0D0"],
    ["Violet", "rgb(238, 130, 238)", "#EE82EE"],
    ["Wheat", "rgb(245, 222, 179)", "#F5DEB3"],
    ["White", "rgb(255, 255, 255)", "#FFFFFF"],
    ["WhiteSmoke", "rgb(245, 245, 245)", "#F5F5F5"],
    ["Yellow", "rgb(255, 255, 0)", "#FFFF00"],
    ["YellowGreen", "rgb(154, 205, 50)", "#9ACD32"]
]

const root = document.querySelector(":root");
const titleColor = document.querySelector("h2");
const colorButton = document.getElementById("click_button");
const controlColor = {
    normalColor: {
        button: document.getElementById("normal_button"),
        radio: document.getElementById("normal_radio")
    },
    rgbColor: {
        button: document.getElementById("rgb_button"),
        radio: document.getElementById("rgb_radio")
    },
    hexColor: {
        button: document.getElementById("hex_button"),
        radio: document.getElementById("hex_radio")
    }
}
const backColors = ["255, 255, 255", "50, 50, 50"];

const spanColor = document.createElement("span");
var checked = controlColor["normalColor"]["button"];
var randomColor = 143; // Represents the 'white' color
var checkedIndex = 0; // Represents the first index of each color array (plain word)
var color = colorArr[randomColor][checkedIndex]; // Represents the plain word 'white'
spanColor.innerText = color;
titleColor.appendChild(spanColor);
checked.classList.add("selected-label");
root.style.setProperty("--main-color", color);

/* ADD HERE THE SECONDARY AND TERTIARY COLOR CHANGING DEPENDING ON CONTRAST */

const controlKeys = Object.keys(controlColor); // Represent each button in the navbar
controlKeys.forEach(colorType => controlColor[colorType]["button"].addEventListener("click", selectType));

colorButton.addEventListener("click", changeColor);
colorButton.addEventListener("click", function() {
    findContrastRatio(randomColor);
})

// Select the syntax type for the color
function selectType(event) {
    checked.style.backgroundColor = "var(--secondary-color)";
    checked = event.target;
    checkedIndex = checked.getAttribute("value");
    color = colorArr[randomColor][checkedIndex];
    spanColor.innerText = color;
    checked.style.backgroundColor = "var(--main-color)";
}

// Change the main color of the page.
function changeColor() {
    randomColor = Math.floor(Math.random() * colorArr.length);
    color = colorArr[randomColor][checkedIndex];
    spanColor.innerText = color;
    root.style.setProperty("--main-color", color);
}

function findContrastRatio(random) {
    let rgbColor = colorArr[random][1]
        .match(/\d+/g)
        .map(value => realColor(parseInt(value) / 255)); // Array containing the relative [red, green, blue] values of the random color

    let tertiaryColor = getComputedStyle(root).getPropertyValue("--tertiary-color").match(/\d+/g);
    let decimalTertiaryColor = tertiaryColor
        .map(value => realColor(parseInt(value) / 255)); // Array containing the relative [red, green, blue] values of the CSS --tertiary-color variable

    let luminanceMain = 0.2126 * rgbColor[0] + 0.7152 * rgbColor[1] + 0.0722 * rgbColor[2];
    let luminanceTertiary = 0.2126 * decimalTertiaryColor[0] + 0.7152 * decimalTertiaryColor[1] + 0.0722 * decimalTertiaryColor[2];
    let contrastRatio;
    if (luminanceMain > luminanceTertiary) {
        contrastRatio = ((luminanceMain + 0.05)/(luminanceTertiary + 0.05)).toFixed(2);
    } else {
        contrastRatio = ((luminanceTertiary + 0.05)/(luminanceMain + 0.05)).toFixed(2);
    }
    changeBackgroundColors(contrastRatio, tertiaryColor);
}

function realColor(colorSub) {
    if (colorSub <= 0.03928) {
        return colorSub / 12.92;
    } else {
        return ((colorSub + 0.055)/1.055) ** 2.4;
    }
}

function changeBackgroundColors(contrast, tertiary) {
    if (contrast < 5) {
        switch (tertiary[0]) {
            case "50":
                root.style.setProperty("--tertiary-color", `rgb(${backColors[0]})`);
                root.style.setProperty("--secondary-color", `rgb(${backColors[1]})`);
                break;
            case "255":
                root.style.setProperty("--tertiary-color", `rgb(${backColors[1]})`);
                root.style.setProperty("--secondary-color", `rgb(${backColors[0]})`);
                break;
        }
    }
}