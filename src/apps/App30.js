import React from 'react'


function SelectText () {
  var selectObj = document.getSelection()
  var text = selectObj.toString()
  var range = selectObj.getRangeAt(0)
  var startText = range.startOffset
  var endText = range.endOffset

  if (text.length >= 1) {
    var newNode = document.createElement("span")
    newNode.setAttribute(
      "style",
      "background-color: yellow; display: inline;"
    )
    range.surroundContents(newNode)

    var selectedText = JSON.stringify(
      {
        text: text,
        startText: startText,
        endText: endText,
        countChar: (endText - startText)
      }
    )
    console.log(selectedText)
    alert(selectedText)
  }
}

export default function SelectionText(){
  return (
    <div>
      <div onMouseUp={SelectText}>
        <p>olá mundo, selecione o texto</p>
      </div>

      <div onMouseUp={SelectText}>
        <p>Outro documento para selecionar o texto</p>
      </div>
    </div>
  )

}
