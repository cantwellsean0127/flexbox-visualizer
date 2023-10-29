const display = document.getElementById("display")
const boxes = display.getElementsByTagName("div")
const enableFlexButton = document.getElementById("enableFlex")
const disableFlexButton = document.getElementById("disableFlex")
const flexDirectionRowButton = document.getElementById("flexDirectionRow")
const flexDirectionColumnButton = document.getElementById("flexDirectionColumn")
const flexJustifyContentFlexStartButton = document.getElementById("flexJustifyContentFlexStart")
const flexJustifyContentFlexEndButton = document.getElementById("flexJustifyContentFlexEnd")
const flexJustifyContentCenterButton = document.getElementById("flexJustifyContentCenter")
const flexJustifyContentSpaceBetweenButton = document.getElementById("flexJustifyContentSpaceBetween")
const flexJustifyContentSpaceAroundButton = document.getElementById("flexJustifyContentSpaceAround")
const flexJustifyContentSpaceEvenlyButton = document.getElementById("flexJustifyContentSpaceEvenly")
const flexAlignItemsFlexStart = document.getElementById("flexAlignItemsFlexStart")
const flexAlignItemsFlexEnd = document.getElementById("flexAlignItemsFlexEnd")
const flexAlignItemsCenter = document.getElementById("flexAlignItemsCenter")
const flexAlignItemsStretch = document.getElementById("flexAlignItemsStretch")
const flexAlignItemsBaseline = document.getElementById("flexAlignItemsBaseline")
const flexWrapNoWrapButton = document.getElementById("flexWrapNoWrap")
const flexWrapWrapButton = document.getElementById("flexWrapWrap")
const flexWrapWrapReverseButton = document.getElementById("flexWrapWrapReverse")
const flexGrow0Button = document.getElementById("flexGrow0")
const flexGrow1Button = document.getElementById("flexGrow1")
const flexShrink0Button = document.getElementById("flexShrink0")
const flexShrink1Button = document.getElementById("flexShrink1")

const enableFlex = () => {
    enableFlexButton.classList.add("bg-gray-200")
    disableFlexButton.classList.remove("bg-gray-200")
    display.classList.add("flex")
    addButtonFunctionality()
}

const disableFlex = () => {
    enableFlexButton.classList.remove("bg-gray-200")
    disableFlexButton.classList.add("bg-gray-200")
    display.classList.remove("flex")
    removeButtonFunctionality()
}

const setFlexDirectionRow = (event) => {
    display.classList.remove("flex-col")
    flexDirectionRowButton.classList.add("bg-gray-200")
    flexDirectionColumnButton.classList.remove("bg-gray-200")
}

const setFlexDirectionColumn = (event) => {
    display.classList.add("flex-col")
    flexDirectionRowButton.classList.remove("bg-gray-200")
    flexDirectionColumnButton.classList.add("bg-gray-200")
}

const setFlexJustifyContentFlexStart = (event) => {
    display.classList.add("justify-start")
    flexJustifyContentFlexStartButton.classList.add("bg-gray-200")
    display.classList.remove("justify-end")
    flexJustifyContentFlexEndButton.classList.remove("bg-gray-200")
    display.classList.remove("justify-center")
    flexJustifyContentCenterButton.classList.remove("bg-gray-200")
    display.classList.remove("justify-between")
    flexJustifyContentSpaceBetweenButton.classList.remove("bg-gray-200")
    display.classList.remove("justify-around")
    flexJustifyContentSpaceAroundButton.classList.remove("bg-gray-200")
    display.classList.remove("justify-evenly")
    flexJustifyContentSpaceEvenlyButton.classList.remove("bg-gray-200")
}

const setFlexJustifyContentFlexEnd = (event) => {
    display.classList.remove("justify-start")
    flexJustifyContentFlexStartButton.classList.remove("bg-gray-200")
    display.classList.add("justify-end")
    flexJustifyContentFlexEndButton.classList.add("bg-gray-200")
    display.classList.remove("justify-center")
    flexJustifyContentCenterButton.classList.remove("bg-gray-200")
    display.classList.remove("justify-between")
    flexJustifyContentSpaceBetweenButton.classList.remove("bg-gray-200")
    display.classList.remove("justify-around")
    flexJustifyContentSpaceAroundButton.classList.remove("bg-gray-200")
    display.classList.remove("justify-evenly")
    flexJustifyContentSpaceEvenlyButton.classList.remove("bg-gray-200")
}

const setFlexJustifyContentCenter = (event) => {
    display.classList.remove("justify-start")
    flexJustifyContentFlexStartButton.classList.remove("bg-gray-200")
    display.classList.remove("justify-end")
    flexJustifyContentFlexEndButton.classList.remove("bg-gray-200")
    display.classList.add("justify-center")
    flexJustifyContentCenterButton.classList.add("bg-gray-200")
    display.classList.remove("justify-between")
    flexJustifyContentSpaceBetweenButton.classList.remove("bg-gray-200")
    display.classList.remove("justify-around")
    flexJustifyContentSpaceAroundButton.classList.remove("bg-gray-200")
    display.classList.remove("justify-evenly")
    flexJustifyContentSpaceEvenlyButton.classList.remove("bg-gray-200")
}

const setFlexJustifyContentSpaceBetween = (event) => {
    display.classList.remove("justify-start")
    flexJustifyContentFlexStartButton.classList.remove("bg-gray-200")
    display.classList.remove("justify-end")
    flexJustifyContentFlexEndButton.classList.remove("bg-gray-200")
    display.classList.remove("justify-center")
    flexJustifyContentCenterButton.classList.remove("bg-gray-200")
    display.classList.add("justify-between")
    flexJustifyContentSpaceBetweenButton.classList.add("bg-gray-200")
    display.classList.remove("justify-around")
    flexJustifyContentSpaceAroundButton.classList.remove("bg-gray-200")
    display.classList.remove("justify-evenly")
    flexJustifyContentSpaceEvenlyButton.classList.remove("bg-gray-200")
}

const setFlexJustifyContentSpaceAround = (event) => {
    display.classList.remove("justify-start")
    flexJustifyContentFlexStartButton.classList.remove("bg-gray-200")
    display.classList.remove("justify-end")
    flexJustifyContentFlexEndButton.classList.remove("bg-gray-200")
    display.classList.remove("justify-center")
    flexJustifyContentCenterButton.classList.remove("bg-gray-200")
    display.classList.remove("justify-between")
    flexJustifyContentSpaceBetweenButton.classList.remove("bg-gray-200")
    display.classList.add("justify-around")
    flexJustifyContentSpaceAroundButton.classList.add("bg-gray-200")
    display.classList.remove("justify-evenly")
    flexJustifyContentSpaceEvenlyButton.classList.remove("bg-gray-200")
}

const setFlexJustifyContentSpaceEvenly = (event) => {
    display.classList.remove("justify-start")
    flexJustifyContentFlexStartButton.classList.remove("bg-gray-200")
    display.classList.remove("justify-end")
    flexJustifyContentFlexEndButton.classList.remove("bg-gray-200")
    display.classList.remove("justify-center")
    flexJustifyContentCenterButton.classList.remove("bg-gray-200")
    display.classList.remove("justify-between")
    flexJustifyContentSpaceBetweenButton.classList.remove("bg-gray-200")
    display.classList.remove("justify-around")
    flexJustifyContentSpaceAroundButton.classList.remove("bg-gray-200")
    display.classList.add("justify-evenly")
    flexJustifyContentSpaceEvenlyButton.classList.add("bg-gray-200")
}

const setBoxTextSizeSameSize = () => {
    for (const box of boxes) {
        box.classList.add("text-5xl")
    }
}

const setBoxTextSizeDifferentSizes = () => {
    const textSizes = ["text-xl", "text-2xl", "text-3xl", "text-4xl", "text-5xl", "text-6xl", "text-7xl", "text-8xl", "text-9xl"]
    for (const box of boxes) {
        const randomTextSize = textSizes[Math.floor(Math.random(textSizes.length))]
        box.classList.add(randomTextSize)
    }
}

const setFlexAlignItemsFlexStart = (event) => {
    display.classList.add("items-start")
    flexAlignItemsFlexStart.classList.add("bg-gray-200")
    display.classList.remove("items-end")
    flexAlignItemsFlexEnd.classList.remove("bg-gray-200")
    display.classList.remove("items-center")
    flexAlignItemsCenter.classList.remove("bg-gray-200")
    display.classList.remove("items-stretch")
    flexAlignItemsStretch.classList.remove("bg-gray-200")
    display.classList.remove("items-baseline")
    flexAlignItemsBaseline.classList.remove("bg-gray-200")
    setBoxTextSizeSameSize()
}

const setFlexAlignItemsFlexEnd = (event) => {
    display.classList.remove("items-start")
    flexAlignItemsFlexStart.classList.remove("bg-gray-200")
    display.classList.add("items-end")
    flexAlignItemsFlexEnd.classList.add("bg-gray-200")
    display.classList.remove("items-center")
    flexAlignItemsCenter.classList.remove("bg-gray-200")
    display.classList.remove("items-stretch")
    flexAlignItemsStretch.classList.remove("bg-gray-200")
    display.classList.remove("items-baseline")
    flexAlignItemsBaseline.classList.remove("bg-gray-200")
    setBoxTextSizeSameSize()
}

const setFlexAlignItemsCenter = (event) => {
    display.classList.remove("items-start")
    flexAlignItemsFlexStart.classList.remove("bg-gray-200")
    display.classList.remove("items-end")
    flexAlignItemsFlexEnd.classList.remove("bg-gray-200")
    display.classList.add("items-center")
    flexAlignItemsCenter.classList.add("bg-gray-200")
    display.classList.remove("items-stretch")
    flexAlignItemsStretch.classList.remove("bg-gray-200")
    display.classList.remove("items-baseline")
    flexAlignItemsBaseline.classList.remove("bg-gray-200")
    setBoxTextSizeSameSize()
}

const setFlexAlignItemsStretch = (event) => {
    display.classList.remove("items-start")
    flexAlignItemsFlexStart.classList.remove("bg-gray-200")
    display.classList.remove("items-end")
    flexAlignItemsFlexEnd.classList.remove("bg-gray-200")
    display.classList.remove("items-center")
    flexAlignItemsCenter.classList.remove("bg-gray-200")
    display.classList.add("items-stretch")
    flexAlignItemsStretch.classList.add("bg-gray-200")
    display.classList.remove("items-baseline")
    flexAlignItemsBaseline.classList.remove("bg-gray-200")
    setBoxTextSizeSameSize()
}

const setFlexAlignItemsBaseline = (event) => {
    display.classList.remove("items-start")
    flexAlignItemsFlexStart.classList.remove("bg-gray-200")
    display.classList.remove("items-end")
    flexAlignItemsFlexEnd.classList.remove("bg-gray-200")
    display.classList.remove("items-center")
    flexAlignItemsCenter.classList.remove("bg-gray-200")
    display.classList.remove("items-stretch")
    flexAlignItemsStretch.classList.remove("bg-gray-200")
    display.classList.add("items-baseline")
    flexAlignItemsBaseline.classList.add("bg-gray-200")
    setBoxTextSizeDifferentSizes()
}

const setFlexWrapNoWrap = (event) => {
    flexWrapNoWrapButton.classList.add("bg-gray-200")
    display.classList.remove("flex-wrap")
    flexWrapWrapButton.classList.remove("bg-gray-200")
    display.classList.remove("flex-wrap-reverse")
    flexWrapWrapReverseButton.classList.remove("bg-gray-200")

}

const setFlexWrapWrap = (event) => {
    flexWrapNoWrapButton.classList.remove("bg-gray-200")
    display.classList.add("flex-wrap")
    flexWrapWrapButton.classList.add("bg-gray-200")
    display.classList.remove("flex-wrap-reverse")
    flexWrapWrapReverseButton.classList.remove("bg-gray-200")
}

const setFlexWrapWrapReverse = (event) => {
    flexWrapNoWrapButton.classList.remove("bg-gray-200")
    display.classList.remove("flex-wrap")
    flexWrapWrapButton.classList.remove("bg-gray-200")
    display.classList.add("flex-wrap-reverse")
    flexWrapWrapReverseButton.classList.add("bg-gray-200")
}

const setFlexGrow0 = (event) => {
    display.classList.remove("grow")
    flexGrow0Button.classList.add("bg-gray-200")
    flexGrow1Button.classList.remove("bg-gray-200")
}

const setFlexGrow1 = (event) => {
    display.classList.add("grow")
    flexGrow0Button.classList.remove("bg-gray-200")
    flexGrow1Button.classList.add("bg-gray-200")
}

const setFlexShrink0 = (event) => {
    display.classList.remove("shrink")
    flexShrink0Button.classList.add("bg-gray-200")
    flexShrink1Button.classList.remove("bg-gray-200")
}

const setFlexShrink1 = (event) => {
    display.classList.add("shrink")
    flexShrink0Button.classList.remove("bg-gray-200")
    flexShrink1Button.classList.add("bg-gray-200")
}

const addButtonFunctionality = () => {
    flexDirectionRowButton.addEventListener("click", setFlexDirectionRow)
    flexDirectionRowButton.classList.remove("opacity-20")
    flexDirectionColumnButton.addEventListener("click", setFlexDirectionColumn)
    flexDirectionColumnButton.classList.remove("opacity-20")
    flexJustifyContentFlexStartButton.addEventListener("click", setFlexJustifyContentFlexStart)
    flexJustifyContentFlexStartButton.classList.remove("opacity-20")
    flexJustifyContentFlexEndButton.addEventListener("click", setFlexJustifyContentFlexEnd)
    flexJustifyContentFlexEndButton.classList.remove("opacity-20")
    flexJustifyContentCenterButton.addEventListener("click", setFlexJustifyContentCenter)
    flexJustifyContentCenterButton.classList.remove("opacity-20")
    flexJustifyContentSpaceBetweenButton.addEventListener("click", setFlexJustifyContentSpaceBetween)
    flexJustifyContentSpaceBetweenButton.classList.remove("opacity-20")
    flexJustifyContentSpaceAroundButton.addEventListener("click", setFlexJustifyContentSpaceAround)
    flexJustifyContentSpaceAroundButton.classList.remove("opacity-20")
    flexJustifyContentSpaceEvenlyButton.addEventListener("click", setFlexJustifyContentSpaceEvenly)
    flexJustifyContentSpaceEvenlyButton.classList.remove("opacity-20")
    flexAlignItemsFlexStart.addEventListener("click", setFlexAlignItemsFlexStart)
    flexAlignItemsFlexStart.classList.remove("opacity-20")
    flexAlignItemsFlexEnd.addEventListener("click", setFlexAlignItemsFlexEnd)
    flexAlignItemsFlexEnd.classList.remove("opacity-20")
    flexAlignItemsCenter.addEventListener("click", setFlexAlignItemsCenter)
    flexAlignItemsCenter.classList.remove("opacity-20")
    flexAlignItemsStretch.addEventListener("click", setFlexAlignItemsStretch)
    flexAlignItemsStretch.classList.remove("opacity-20")
    flexAlignItemsBaseline.addEventListener("click", setFlexAlignItemsBaseline)
    flexAlignItemsBaseline.classList.remove("opacity-20")
    flexWrapNoWrapButton.addEventListener("click", setFlexWrapNoWrap)
    flexWrapNoWrapButton.classList.remove("opacity-20")
    flexWrapWrapButton.addEventListener("click", setFlexWrapWrap)
    flexWrapWrapButton.classList.remove("opacity-20")
    flexWrapWrapReverseButton.addEventListener("click", setFlexWrapWrapReverse)
    flexWrapWrapReverseButton.classList.remove("opacity-20")
    flexGrow0Button.addEventListener("click", setFlexGrow0)
    flexGrow0Button.classList.remove("opacity-20")
    flexGrow1Button.addEventListener("click", setFlexGrow1)
    flexGrow1Button.classList.remove("opacity-20")
    flexShrink0Button.addEventListener("click", setFlexShrink0)
    flexShrink0Button.classList.remove("opacity-20")
    flexShrink1Button.addEventListener("click", setFlexShrink1)
    flexShrink1Button.classList.remove("opacity-20")
}

const removeButtonFunctionality = () => {
    flexDirectionRowButton.removeEventListener("click", setFlexDirectionRow)
    flexDirectionRowButton.classList.add("opacity-20")
    flexDirectionColumnButton.removeEventListener("click", setFlexDirectionColumn)
    flexDirectionColumnButton.classList.add("opacity-20")
    flexJustifyContentFlexStartButton.removeEventListener("click", setFlexJustifyContentFlexStart)
    flexJustifyContentFlexStartButton.classList.add("opacity-20")
    flexJustifyContentFlexEndButton.removeEventListener("click", setFlexJustifyContentFlexEnd)
    flexJustifyContentFlexEndButton.classList.add("opacity-20")
    flexJustifyContentCenterButton.removeEventListener("click", setFlexJustifyContentCenter)
    flexJustifyContentCenterButton.classList.add("opacity-20")
    flexJustifyContentSpaceBetweenButton.removeEventListener("click", setFlexJustifyContentSpaceBetween)
    flexJustifyContentSpaceBetweenButton.classList.add("opacity-20")
    flexJustifyContentSpaceAroundButton.removeEventListener("click", setFlexJustifyContentSpaceAround)
    flexJustifyContentSpaceAroundButton.classList.add("opacity-20")
    flexJustifyContentSpaceEvenlyButton.removeEventListener("click", setFlexJustifyContentSpaceEvenly)
    flexJustifyContentSpaceEvenlyButton.classList.add("opacity-20")
    flexAlignItemsFlexStart.removeEventListener("click", setFlexAlignItemsFlexStart)
    flexAlignItemsFlexStart.classList.add("opacity-20")
    flexAlignItemsFlexEnd.removeEventListener("click", setFlexAlignItemsFlexEnd)
    flexAlignItemsFlexEnd.classList.add("opacity-20")
    flexAlignItemsCenter.removeEventListener("click", setFlexAlignItemsCenter)
    flexAlignItemsCenter.classList.add("opacity-20")
    flexAlignItemsStretch.removeEventListener("click", setFlexAlignItemsStretch)
    flexAlignItemsStretch.classList.add("opacity-20")
    flexAlignItemsBaseline.removeEventListener("click", setFlexAlignItemsBaseline)
    flexAlignItemsBaseline.classList.add("opacity-20")
    flexWrapNoWrapButton.removeEventListener("click", setFlexWrapNoWrap)
    flexWrapNoWrapButton.classList.add("opacity-20")
    flexWrapWrapButton.removeEventListener("click", setFlexWrapWrap)
    flexWrapWrapButton.classList.add("opacity-20")
    flexWrapWrapReverseButton.removeEventListener("click", setFlexWrapWrapReverse)
    flexWrapWrapReverseButton.classList.add("opacity-20")
    flexGrow0Button.removeEventListener("click", setFlexGrow0)
    flexGrow0Button.classList.add("opacity-20")
    flexGrow1Button.removeEventListener("click", setFlexGrow1)
    flexGrow1Button.classList.add("opacity-20")
    flexShrink0Button.removeEventListener("click", setFlexShrink0)
    flexShrink0Button.classList.add("opacity-20")
    flexShrink1Button.removeEventListener("click", setFlexShrink1)
    flexShrink1Button.classList.add("opacity-20")
}

const addDisplayBox = () => {
    const colors = ["red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"]
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    const box = document.createElement("div")
    box.className = `flex justify-center items-center border-8 border-${randomColor}-500 h-1/5 w-1/5 bg-${randomColor}-200`
    const boxText = document.createElement("h1")
    boxText.textContent = `Box ${boxes.length + 1}`
    boxText.className = `text-${randomColor}-500 text-5xl font-bold`
    box.appendChild(boxText)
    display.appendChild(box)
}

const removeDisplayBox = () => {
    if (boxes.length > 0) {
        display.removeChild(boxes[boxes.length - 1])
    }
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Backspace") {
        removeDisplayBox()
    } else if (event.key === "Enter") {
        addDisplayBox()
    } else {
        console.log(event.key)
    }
})

addDisplayBox()
addDisplayBox()
addDisplayBox()
enableFlexButton.addEventListener("click", enableFlex)
disableFlexButton.addEventListener("click", disableFlex)