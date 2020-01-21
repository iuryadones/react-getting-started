import React from 'react'
import './App31.css'


function SelectionText() {
  var selectObj = document.getSelection()
  var text = selectObj.toString()
  var range = selectObj.getRangeAt(0)
  var startText = range.startOffset
  var endText = range.endOffset

  if (text.length >= 1) {
    var tag = document.createElement("span")

    tag.setAttribute(
      "style",
      "background-color: lightyellow; display: inline; opacity: 0.2;"
    )

    var content = range.extractContents()
    tag.appendChild(content)
    range.insertNode(tag)

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

function serializeMarker () {
  var tags = document.getElementsByTagName("span");

  for(var i=0; i<tags.length; i++) {
  	var text = tags[i].innerText;
    var str = document.getElementById("text2tag").innerText;
    var index = str.indexOf(text);
    var length =  index + text.toString().length;

    if (tags[i].outerHTML.includes('background-color: lightyellow;')) {
      console.log(JSON.stringify(
      	{
        	type: 'tipo de arquivo',
          startText: index,
          endText: length,
          text: text
      	}
      ));
    }

    else if (tags[i].outerHTML.includes('background-color: lightblue;')) {
      console.log(JSON.stringify(
      	{
        	type: 'motivo da ação',
          startText: index,
          endText: length,
          text: text
      	}
      ));
    }
  }
}

export default function Text2Tagger(){
  return (
    <div>
      <p id="text2tag" contentEditable={false} onMouseUp={SelectionText}>
        olá mundo, selecione o texto, que massa quero selecionar o texto e fazer a modelagem por entidades.
      </p>
      <button onClick={serializeMarker}>Serializar</button>

    </div>
  )
}
