let output = document.getElementById("output")
let buttons = document.getElementsByClassName("tool--bnt")
for (let bnt of buttons){
    bnt.addEventListener('click',() => {
        let cmd= bnt.dataset['command']
        if(cmd=== 'createlink'){
            let url = prompt("Coloque o link aqui:","http:\/\/");
            document.execCommand(cmd, false, url)
        }else{
            document.execCommand(cmd, false, null)
        }
    })
}