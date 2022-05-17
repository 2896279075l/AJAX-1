// console.log('main.js运行成功');


let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', `/page${n+1}`);
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response);
            array.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.id;
                xxx.appendChild(li);
            })
            n += 1;
        }
    }
    request.send();
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', "5.json");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const object = JSON.parse(request.response);
            console.log(object);
        }
    }
    request.send();
}

getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '4.xml');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML;
            console.log(dom.getElementsByTagName('warning')[0].textContent.trim());

        }
    }
    request.send();
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/3.html');
    request.onload = () => {
        const div = document.createElement('div');
        div.innerHTML = request.response;
        document.body.append(div);
        console.log('插入3.html成功');
    }
    request.onerror = () => {
        console.log('失败了');
    }
    request.send();
}

getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/2.js");
    request.onload = () => {
        const script = document.createElement('script');
        script.innerHTML = request.response;
        document.body.appendChild(script);
        console.log('获取2.js成功');
    }

    request.onerror = () => {
        console.log('失败了');
    }
    request.send();

}

getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/style.css");

    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const style = document.createElement('style');
                style.innerHTML = request.response;
                document.head.appendChild(style);
            } else {
                alert('加载CSS失败')
            }
        }

    }

    request.send();

}