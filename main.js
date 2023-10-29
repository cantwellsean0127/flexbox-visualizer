const controls = document.getElementById("controls")
const visual = document.getElementById("visual")
const boxes = visual.getElementsByTagName("div")

const createRules = () => {
    const rules = {
        "display": { values: ["block", "inline", "flex"], default_value: "block" },
        "flex-direction": { values: ["row", "column", "row-reverse", "column-reverse"], default_value: "row" },
        "justify-content": { values: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"], default_value: "flex-start" },
        "align-items": { values: ["flex-start", "flex-end", "center", "stretch", "baseline"], default_value: "flex-start" },
        "flex-wrap": { values: ["nowrap", "wrap", "wrap-reverse"], default_value: "nowrap" }
    }
    const selectorOpening = document.createElement("p")
    selectorOpening.setAttribute("class", "text-orange-600")
    selectorOpening.textContent = "#visual {"
    controls.appendChild(selectorOpening)
    for (const rule in rules) {
        const container = document.createElement("div")
        container.setAttribute("id", rule)
        const label = document.createElement("label")
        label.setAttribute("for", rule + "Selector")
        label.setAttribute("class", "text-white ml-8")
        label.textContent = rule + ":"
        container.appendChild(label)
        const select = document.createElement("select")
        select.setAttribute("name", rule)
        select.setAttribute("id", rule + "Selector")
        select.setAttribute("class", "bg-slate-900 text-cyan-600 m-2 w-fit")
        for (const value of rules[rule].values) {
            const option = document.createElement("option")
            option.setAttribute("value", value)
            option.textContent = value
            if (value === rule.default_value) {
                option.setAttribute("selected", "")
            }
            select.appendChild(option)
        }
        select.addEventListener("change", (event) => {
            visual.style.setProperty(rule, event.target.value)
        })
        container.appendChild(select)
        controls.appendChild(container)
    }
    const selectorClosing = document.createElement("p")
    selectorClosing.textContent = "}"
    selectorClosing.setAttribute("class", "text-orange-600")
    controls.appendChild(selectorClosing)

}

const addDisplayBox = (numberOfDisplayBoxesToAdd) => {
    if (numberOfDisplayBoxesToAdd === undefined) {
        numberOfDisplayBoxesToAdd = 1
    }

    for (let boxCount = 0; boxCount < numberOfDisplayBoxesToAdd; boxCount++) {
        const colors = ["red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"]
        const randomColor = colors[Math.floor(Math.random() * colors.length)]
        const box = document.createElement("div")
        box.className = `flex justify-center items-center border-8 border-${randomColor}-500 h-fit w-fit bg-${randomColor}-200 p-5`
        const boxText = document.createElement("h1")
        boxText.textContent = `Box ${boxes.length + 1}`
        boxText.className = `text-${randomColor}-500 text-lg font-bold select-none`
        boxText.addEventListener("click", (event) => {
            event.stopPropagation()
            createBoxInformationModal(event.target.parentNode)
        })
        box.appendChild(boxText)
        box.addEventListener("click", (event) => {
            createBoxInformationModal(event.target)
        })
        visual.appendChild(box)
    }
}

const removeDisplayBox = () => {
    if (boxes.length > 0) {
        visual.removeChild(boxes[boxes.length - 1])
    }
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Backspace" && event.target === document.body) {
        removeDisplayBox()
    } else if (event.key === "Enter" && event.target === document.body) {
        addDisplayBox()
    }
})

const createBoxInformationModal = (box) => {
    const boxHeader = box.getElementsByTagName("h1")[0]
    const boxStyles = window.getComputedStyle(box)
    const modalOverlay = document.createElement("div")
    modalOverlay.id = "boxInformationModalOverlay"
    modalOverlay.className = "fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
    const modalContent = document.createElement("div")
    modalContent.className = "bg-white rounded-lg shadow-lg w-1/3 p-6"
    modalOverlay.appendChild(modalContent)
    const modalHeader = document.createElement("h1")
    modalHeader.className = "text-xl font-bold mb-4"
    modalHeader.textContent = `${box.textContent} Details`
    modalContent.appendChild(modalHeader)
    const textSizeDetails = document.createElement("div")
    textSizeDetails.className = "mb-4"
    const textSizeLabel = document.createElement("label")
    textSizeLabel.setAttribute("for", "boxColorSelector")
    textSizeLabel.className = "block text-sm font-medium text-gray-700 mb-2"
    textSizeLabel.textContent = "Text Size:"
    textSizeDetails.appendChild(textSizeLabel)
    textSizeSelector = document.createElement("select")
    textSizeSelector.id = "boxColorSelector"
    textSizeSelector.title = "boxColorSelector"
    textSizeSelector.className = "border rounded-md p-2 w-full text-gray-700"
    const textSizes = ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl",]
    let currentTextSize = [...boxHeader.classList].filter((classValue) => classValue.startsWith("text-") && classValue.length <= 8)[0]
    currentTextSize = currentTextSize.slice(5)
    for (const textSize of textSizes) {
        const textSizeOption = document.createElement("option")
        textSizeOption.value = textSize
        textSizeOption.textContent = textSize.toUpperCase()
        if (textSize === currentTextSize) {
            textSizeOption.setAttribute("selected", "")
        }
        textSizeSelector.appendChild(textSizeOption)
    }
    textSizeSelector.addEventListener("change", (event) => {
        for (const textSize of textSizes) {
            boxHeader.classList.remove(textSize)
        }
        boxHeader.classList.add(`text-${event.target.value}`)
    })
    textSizeDetails.appendChild(textSizeSelector)
    modalContent.appendChild(textSizeDetails)
    const boxColorDetails = document.createElement("div")
    boxColorDetails.className = "mb-4"
    const boxColorLabel = document.createElement("label")
    boxColorLabel.setAttribute("for", "boxColorSelector")
    boxColorLabel.className = "block text-sm font-medium text-gray-700 mb-2"
    boxColorLabel.textContent = "Color:"
    boxColorDetails.appendChild(boxColorLabel)
    boxColorSelector = document.createElement("select")
    boxColorSelector.id = "boxColorSelector"
    boxColorSelector.title = "boxColorSelector"
    boxColorSelector.className = "border rounded-md p-2 w-full text-gray-700"
    const colors = ["red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"]
    let currentBoxColor = [...box.classList].filter((classValue) => classValue.startsWith("bg-"))[0]
    currentBoxColor = currentBoxColor.slice(3, currentBoxColor.length - 4)
    for (const color of colors) {
        const boxColorOption = document.createElement("option")
        boxColorOption.value = color
        boxColorOption.textContent = `${color[0].toUpperCase()}${color.slice(1)}`
        if (color === currentBoxColor) {
            boxColorOption.setAttribute("selected", "")
        }
        boxColorSelector.appendChild(boxColorOption)
    }
    boxColorSelector.addEventListener("change", (event) => {
        box.classList.remove(`border-${currentBoxColor}-500`)
        box.classList.add(`border-${event.target.value}-500`)
        box.classList.remove(`bg-${currentBoxColor}-200`)
        box.classList.add(`bg-${event.target.value}-200`)
        boxHeader.classList.remove(`text-${currentBoxColor}-500`)
        boxHeader.classList.add(`text-${event.target.value}-500`)
    })
    boxColorDetails.appendChild(boxColorSelector)
    modalContent.appendChild(boxColorDetails)
    const growShrink = ["grow", "shrink"]
    growShrink.forEach((property) => {
        const growShrinkValueDetail = document.createElement("div")
        growShrinkValueDetail.className = "mb-4"
        const growValueDetailLabel = document.createElement("label")
        growValueDetailLabel.setAttribute("for", `${property}ValueDetailNumber`)
        growValueDetailLabel.className = "block text-sm font-medium text-gray-700 mb-2"
        growValueDetailLabel.textContent = "Grow Value:"
        growShrinkValueDetail.appendChild(growValueDetailLabel)
        const growValueDetailNumber = document.createElement("input")
        growValueDetailNumber.type = "number"
        growValueDetailNumber.id = `${property}ValueDetailNumber`
        growValueDetailNumber.name = `${property}ValueDetailNumber`
        growValueDetailNumber.className = "border rounded-md p-2 w-full text-gray-700"
        const currentBoxGrowValue = boxStyles.getPropertyValue(`flex-${property}`)
        growValueDetailNumber.placeholder = currentBoxGrowValue
        growValueDetailNumber.min = "0"
        growValueDetailNumber.addEventListener("change", (event) => {
            box.style[`flex-${property}`] = "" + event.target.value
        })
        growShrinkValueDetail.appendChild(growValueDetailNumber)
        modalContent.appendChild(growShrinkValueDetail)
    })
    document.body.appendChild(modalOverlay)
    document.body.addEventListener("click", removeBoxInformationModal)
}

const removeBoxInformationModal = (event) => {
    const boxInformationModalOverlay = document.getElementById("boxInformationModalOverlay")
    if (event.target !== boxInformationModalOverlay) {
        return
    } else {
        document.body.removeChild(boxInformationModalOverlay)
        document.body.removeEventListener("click", removeBoxInformationModal)
    }
}

createRules()
addDisplayBox(3)