async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export default function CreateMessage(type_message,title,message,duration=5000) {
    const message_div = document.createElement('div');
    message_div.className = "Message";
    message_div.id = `message-${Math.floor(Math.random()*1000000)}`;
    message_div.classList.add("bg-primary-subtle");
    style_message(message_div,duration);
    document.querySelector('main').append(message_div);
    const message_header = document.createElement('div');
    message_header.className = "Message-header";
    message_header.id = `message-header`;
    message_header.style.padding = "10px";
    message_header.style.borderRadius = "7px 7px 0 0";
    message_header.style.display = "flex";
    message_header.style.justifyContent = "space-between";
    message_header.style.gap = "15px"
    message_header.style.alignItems = "center";
    message_div.append(message_header);
    const div = document.createElement('div');
    div.className = "Message-icon";
    div.id = `message-icon`;
    div.style.width = "30px";
    div.style.height = "30px";
    div.style.borderRadius = "50%";
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.marginRight = "10px";
    div.classList.add(bg_message(type_message));
    message_header.append(div);
    const message_title = document.createElement('h4');
    message_title.className = "Message-title";
    message_title.id = `message-title`;
    message_title.innerText = title;
    message_title.style.margin = "0";
    message_title.classList.add(color_message(type_message));
    message_title.style.fontSize = "1.2rem";
    message_header.append(message_title);
    const small = document.createElement('small');
    var date = new Date();
    small.textContent = `${date.getHours()}:${date.getMinutes()}`;
    message_header.append(small);
    const message_body = document.createElement('div');
    message_body.className = "body-message";
    message_body.id = "body-message";
    message_div.append(message_body);
    message_body.style.padding = "10px";
    const p = document.createElement("p");
    p.className = "text-break";
    p.id = `text-${Math.floor(Math.random()*1000000)}`;
    p.innerHTML = message;
    message_body.append(p);
}

function bg_message (type_message) {
    try{
        if (!type_message) throw new Error("Type message is required");
        var colors_bg = {
            error: "bg-danger",
            info : "bg-info",
            success : "bg-success",
            waring : "bg-warning",
            normal : "bg-secondary",
        };
        return colors_bg[type_message];
    }
    catch(e) {
        console.log("Error : ",e);
    }
    
}
function color_message (type_message) {
    try{
        if (!type_message) throw new Error("Type message is required");
        var colors_text = {
            error: "text-danger",
            info : "text-info",
            success : "text-success",
            waring : "text-warning",
            normal : "text-secondary",
        };
        return colors_text[type_message];
    }
    catch(e) {
        console.log("Error : ",e);
    }
    
}
async function style_message(element,duration) {
    try{
        element.style.position = "fixed";
        element.style.bottom = "35px";
        element.style.right = "-5000px";
        element.style.width = "80%";
        element.style.maxWidth = "90%";
        element.style.borderRadius = "7px";
        element.style.boxShadow = "0 0 15px black";
        element.style.display = "flex";
        element.style.flexDirection = "column";
        element.style.transition = "right 1s ease-in-out"
        await sleep(1000);
        element.style.right = "15px";
        await sleep(duration);
        element.style.right = "-5000px";
        await sleep(1000);
        element.remove();
    }
    catch(e) {
        console.error("error: ",e)
    }
}
