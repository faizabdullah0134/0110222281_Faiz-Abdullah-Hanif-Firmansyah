function chat() {
    let elemen, teks, parent, spasi;
    let inp_chat = document.getElementById("inputChat").value;
    elemen = document.createElement("span");
    spasi = document.createElement("br");
    teks = document.createTextNode(inp_chat);
  
    elemen.appendChild(teks);
  
    parent = document.getElementById("pesanUser");
    parent.appendChild(spasi);
    parent.appendChild(elemen);
}
