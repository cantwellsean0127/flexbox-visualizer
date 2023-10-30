// Grabs various elements from the document that will be used throughout the script
const controls = document.getElementById("controls")
const visual = document.getElementById("visual")
const boxes = visual.getElementsByTagName("div")

// This function adds a new display box (like the array.push method)
const addDisplayBox = (numberOfDisplayBoxesToAdd) => {

    // If the number of display boxes to create was not passed, manually set the value to 1
    if (numberOfDisplayBoxesToAdd === undefined) numberOfDisplayBoxesToAdd = 1

    // Creates N amount of boxes
    for (let boxCount = 0; boxCount < numberOfDisplayBoxesToAdd; boxCount++) {

        // These are the various colors that our display box can be. They are all from Tailwind CSS, however, Tailwind CSS does have more options that are not here. The unincluded options are black, white, slate, gray, zinc, neutral, and stone.
        const colors = "red orange amber yellow lime green emerald teal cyan sky blue indigo violet purple fuchsia pink rose".split(" ")

        // Gets a random color from the list of colors above
        const randomColor = colors[Math.floor(Math.random() * colors.length)]

        // Creates a div element to be the main container for the box
        const box = document.createElement("div")
        visual.appendChild(box)

        // Sets the styling for the main box container
        box.className = `flex justify-center items-center border-8 border-${randomColor}-500 h-fit w-fit bg-${randomColor}-200 p-5`

        // Creates and styles an h1 element to be the text inside the box
        const boxText = document.createElement("h1")
        box.appendChild(boxText)
        boxText.textContent = `Box ${boxes.length}`
        boxText.className = `text-${randomColor}-500 text-lg font-bold select-none`

        // Adds an event listener so that when the box is clicked, it creates the box details modal
        box.addEventListener("click", (event) => {
            if (event.target.tagName === "DIV") createBoxInformationModal(event.target)
            else if (event.target.tagName === "H1") createBoxInformationModal(event.target.parentNode)
        })
    }
}

// This function removes the most recently added display box (like the array.pop method)
const removeDisplayBox = () => {
    if (boxes.length > 0) visual.removeChild(boxes[boxes.length - 1])
}

// This function adds an event listener so that when a user presses enter or delete, a box is added or removed respectively. We also want to make sure the target is the body. Otherwise when a user is editing an individual box's flex grow or flex shrink property, they could press enter and/or backspace while typing and trigger this event.
document.addEventListener("keydown", (event) => {
    if (event.key === "Backspace" && event.target === document.body) {
        removeDisplayBox()
    } else if (event.key === "Enter" && event.target === document.body) {
        addDisplayBox()
    }
})

// This function adds event listeners so that whenever a property value is updated on the controls, the respective property is updated on the display as well. This uses standard CSS and not Tailwind CSS.
const addRuleEventListeners = () => {
    const selects = document.getElementsByTagName("select")
    for (const select of selects) {
        const property = select.id.slice(0, select.id.length - 9)
        select.addEventListener("change", event => visual.style.setProperty(property, event.target.value))
    }
}

// This function creates a modal that displays information about an individual box
const createBoxInformationModal = (box) => {

    // Grabs the boxes header, this will be used multiple times later on.
    const boxHeader = box.getElementsByTagName("h1")[0]

    // Grabs the boxes styling, this will also be used multiple times later on.
    const boxStyles = window.getComputedStyle(box)

    // Creates and styles the modal overlay.
    const modalOverlay = document.createElement("div")
    document.body.appendChild(modalOverlay)
    modalOverlay.id = "boxInformationModalOverlay"
    modalOverlay.className = "fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"

    // Creates and styles the modal content container.
    const modalContent = document.createElement("div")
    modalOverlay.appendChild(modalContent)
    modalContent.className = "bg-white rounded-lg shadow-lg w-1/3 p-6"

    // Creates and styles the header for the modal
    const modalHeader = document.createElement("h1")
    modalContent.appendChild(modalHeader)
    modalHeader.className = "text-xl font-bold mb-4"
    modalHeader.textContent = `${box.textContent} Details`

    // Creates and styles the text size details container.
    const textSizeDetails = document.createElement("div")
    modalContent.appendChild(textSizeDetails)
    textSizeDetails.className = "mb-4"

    // Creates and styles the text size label
    const textSizeLabel = document.createElement("label")
    textSizeDetails.appendChild(textSizeLabel)
    textSizeLabel.for = "boxTextSizeSelector"
    textSizeLabel.className = "block text-sm font-medium text-gray-700 mb-2"
    textSizeLabel.textContent = "Text Size:"

    // Creates and styles the text size selector
    textSizeSelector = document.createElement("select")
    textSizeDetails.appendChild(textSizeSelector)
    textSizeSelector.id = "boxColorSelector"
    textSizeSelector.title = "boxColorSelector"
    textSizeSelector.className = "border rounded-md p-2 w-full text-gray-700"

    // These are the various sizes that our box text can be. They are all from Tailwind CSS.
    const textSizes = "text-sm text-md text-lg text-xl text-2xl text-3xl text-4xl text-5xl text-6xl text-7xl text-8xl text-9xl".split(" ")

    // Gets the current text size
    let currentTextSize = [...boxHeader.classList].filter((className) => textSizes.includes(className))[0]

    // Creates the different options for the text size
    for (const textSize of textSizes) {

        // Creates this option
        const textSizeOption = document.createElement("option")
        textSizeSelector.appendChild(textSizeOption)
        textSizeOption.value = textSize
        textSizeOption.textContent = textSize.slice(5).toUpperCase()

        // If this option is the current text size, set it as the defaultly selected option
        if (textSize === currentTextSize) textSizeOption.setAttribute("selected", "")
    }

    // Adds and event listener so that whenever the text size is updated on the selector, the respective class is added to the box
    textSizeSelector.addEventListener("change", (event) => {

        // Removes the previous text size class
        for (const textSize of textSizes) boxHeader.classList.remove(`text-${textSize}`)

        // Adds the newly selected text size class
        boxHeader.classList.add(`text-${event.target.value}`)
    })

    // Creates and styles the box color details container.
    const boxColorDetails = document.createElement("div")
    modalContent.appendChild(boxColorDetails)
    boxColorDetails.className = "mb-4"

    // Creates and styles the box color label
    const boxColorLabel = document.createElement("label")
    boxColorDetails.appendChild(boxColorLabel)
    boxColorLabel.for = boxColorSelector
    boxColorLabel.className = "block text-sm font-medium text-gray-700 mb-2"
    boxColorLabel.textContent = "Color:"

    // Creates and styles the box color selector
    boxColorSelector = document.createElement("select")
    boxColorDetails.appendChild(boxColorSelector)
    boxColorSelector.id = "boxColorSelector"
    boxColorSelector.title = "boxColorSelector"
    boxColorSelector.className = "border rounded-md p-2 w-full text-gray-700"

    // These are the various colors that our display box can be. They are all from Tailwind CSS, however, Tailwind CSS does have more options that are not here. The unincluded options are black, white, slate, gray, zinc, neutral, and stone.
    const colors = "red orange amber yellow lime green emerald teal cyan sky blue indigo violet purple fuchsia pink rose".split(" ")

    // Gets the current box color
    let currentBoxColor = [...box.classList].filter((classValue) => classValue.startsWith("bg-"))[0]
    currentBoxColor = currentBoxColor.slice(3, currentBoxColor.length - 4)

    // Creates the different options for color
    for (const color of colors) {

        // Creates this specific option
        const boxColorOption = document.createElement("option")
        boxColorSelector.appendChild(boxColorOption)
        boxColorOption.value = color
        boxColorOption.textContent = `${color[0].toUpperCase()}${color.slice(1)}`

        // If this option is the current text size, set it as the defaultly selected option
        if (color === currentBoxColor) boxColorOption.setAttribute("selected", "")
    }

    // Adds and event listener so that whenever the color is updated on the selector, the respective class is added to the box
    boxColorSelector.addEventListener("change", (event) => {

        // Removes the previous border color class and adds the newly selected border color class
        box.classList.remove(`border-${currentBoxColor}-500`)
        box.classList.add(`border-${event.target.value}-500`)

        // Removes the previous background color class and adds the newly selected background color class
        box.classList.remove(`bg-${currentBoxColor}-200`)
        box.classList.add(`bg-${event.target.value}-200`)

        // Removes the previous text color class and adds the newly selected text color class
        boxHeader.classList.remove(`text-${currentBoxColor}-500`)
        boxHeader.classList.add(`text-${event.target.value}-500`)
    })

    // Creates the flex grow and flex shrink details. These are exactly the same except for the name (shrink/grow).
    const growShrink = ["grow", "shrink"]
    growShrink.forEach((property) => {

        // Creates and styles the flex grow/shrink details container.
        const growShrinkValueDetail = document.createElement("div")
        modalContent.appendChild(growShrinkValueDetail)
        growShrinkValueDetail.className = "mb-4"

        // Creates and styles the flex grow/shrink label.
        const growShrinkValueDetailLabel = document.createElement("label")
        growShrinkValueDetail.appendChild(growShrinkValueDetailLabel)
        growShrinkValueDetailLabel.for = `${property}ValueDetailNumber`
        growShrinkValueDetailLabel.className = "block text-sm font-medium text-gray-700 mb-2"
        growShrinkValueDetailLabel.textContent = `Flex ${property[0].toUpperCase()}${property.slice(1)}`

        // Creates and styles the flex shrink/grow number input
        const growShrinkValueDetailNumber = document.createElement("input")
        growShrinkValueDetail.appendChild(growShrinkValueDetailNumber)
        growShrinkValueDetailNumber.type = "number"
        growShrinkValueDetailNumber.id = `${property}ValueDetailNumber`
        growShrinkValueDetailNumber.name = `${property}ValueDetailNumber`
        growShrinkValueDetailNumber.className = "border rounded-md p-2 w-full text-gray-700"

        // Gets the current flex grow/shrink values
        const currentBoxGrowValue = boxStyles.getPropertyValue(`flex-${property}`)

        // Sets the placeholder to be the current flex grow/shrink value
        growShrinkValueDetailNumber.placeholder = currentBoxGrowValue

        // Sets the minimum value to be 0.
        growShrinkValueDetailNumber.min = "0"

        // Adds and event listener so that whenever the number is updated, the respective class is added to the box
        growShrinkValueDetailNumber.addEventListener("change", event => box.style[`flex-${property}`] = "" + event.target.value)
    })

    // Adds an event listener so that when the user clicks off the modal, it gets removed
    document.body.addEventListener("click", removeBoxInformationModal)
}

// This function removes the modal that displays information about an individual box
const removeBoxInformationModal = (event) => {
    const boxInformationModalOverlay = document.getElementById("boxInformationModalOverlay")
    if (event.target === boxInformationModalOverlay) {
        document.body.removeChild(boxInformationModalOverlay)
        document.body.removeEventListener("click", removeBoxInformationModal)
    }
}

// This function is the start of this script's control flow
const start = () => {

    // Adds 3 starter boxes
    addDisplayBox(3)

    // Adds the event listeners for the controls on the left
    addRuleEventListeners()
}

// Starts this script's execution (like a main function)
start()