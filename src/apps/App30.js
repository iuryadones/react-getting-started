import React from 'react'


function SelectText () {
  var selObj = document.getSelection()
  var text = selObj.toString()
  var startText = selObj.getRangeAt(0).startOffset
  var endText = selObj.getRangeAt(0).endOffset
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
