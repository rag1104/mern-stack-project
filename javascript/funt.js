const  getcolor = () =>{
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCodes = "#" +randomNumber.toString(16);
    document.body.style.backgroundColor = randomCodes;
    document.getElementById("color-code").innerText = randomCodes;

    navigator.clipboard.writeText(randomCodes)

}

    ///event calling

    document.getElementById("btn").addEventListener(
        "click",
        getcolor

    )
    getcolor();
