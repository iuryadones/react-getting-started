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
      "background-color: yellow; display: inline; opacity: 0.2;"
    )
    var content = range.extractContents()

    newNode.appendChild(content)
    range.insertNode(newNode)

    var selectedText = JSON.stringify(
      {
        text: text,
        startText: startText,
        endText: endText,
        countChar: (endText - startText)
      }
    )
    console.log(selectedText)
  }
}

export default function SelectionText(){
  return (
    <div>
      <div onMouseUp={SelectText}>
        <p>olá mundo, selecione o texto, que massa quero selecionar o texto e fazer a modelagem por entidades.</p>
      </div>
    </div>
  )

}
