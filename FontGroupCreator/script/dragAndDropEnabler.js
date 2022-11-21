//selecting all required elements
const dropArea = document.querySelector(".drag-area"),
dragText = dropArea.querySelector("header"),
button = dropArea.querySelector("button"),
input = dropArea.querySelector("input");
let file; //this is a global variable and we'll use it inside multiple functions

input.addEventListener("change", function(){
//getting user select file and [0] this means if user select multiple files then we'll select only the first one
file = this.files[0];
dropArea.classList.add("active");
    onFileReceived(); //calling function
});


//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event)=>{
    event.preventDefault(); //preventing from default behaviour
    dropArea.classList.add("active");
    dragText.textContent = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", ()=>{
    ///dropArea.classList.remove("active");
    ///dragText.textContent = "Drag & Drop to Upload File";
    makeDefaultInstructionsVisible();
});

//If user drop File on DropArea
dropArea.addEventListener("drop", (event)=>{
    event.preventDefault(); //preventing from default behaviour
    //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    file = event.dataTransfer.files[0];
    onFileReceived(); //calling function
});

function onFileReceived(){
    ///let submitInputButton = document.querySelector("submitInput");
    ///submitInput.click();


    let fileType = file.type; //getting selected file type
    let lastFourCharacters = file.name.substr(file.name.length - 4); 
    let validExtension = ".ttf";
    if(lastFourCharacters == validExtension){ //if user selected file is an image file
        let fileReader = new FileReader(); //creating new FileReader object
        fileReader.onload = ()=>{
            let fileURL = fileReader.result; //passing user file source in fileURL variable
            ///let imgTag = `<img src="${fileURL}" alt="image">`; //creating an img tag and passing user selected file source inside src attribute
            let ttfFileData = file.name;
            dropArea.innerHTML = ttfFileData; //adding that created img tag inside dropArea container
        }
        fileReader.readAsDataURL(file);
    }
    else{
        alert("This is not a TTF File!");
        dropArea.classList.remove("active");
        makeDefaultInstructionsVisible();
    }
}

function makeDefaultInstructionsVisible() {
    document.getElementById("instructionHeader").innerHTML = "<b onclick='input.click()'>Click to upload</b> or drag and drop";
    document.getElementById("instructionSpan").innerHTML = "Only TTF File Allowed";
}

instructionHeader.addEventListener("click", ()=>{
    input.click();
    document.getElementById["SubmitInput"].click();
});