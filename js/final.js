
// async function fetchData(){
//     const api = await fetch('http://5e11d6ce84b3db0014976623.mockapi.io/PhoCo');
//     const data = await api.json();

//    return data;
// }
async function detail() {
    const api = await fetch('http://5e11d6ce84b3db0014976623.mockapi.io/PhoCo');
    const data = await api.json();
    var items = document.getElementsByClassName('items');
    var content = document.getElementById('content');
    var content2 = document.getElementById('content2');

    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', () => {
            content.innerHTML = '';
            let detailContent = `
            <div id ="details" >
                <div><img id="imgdetail" style="margin-left:35%" src="../Final-Project-master/img/${i}.jpg"</div>
                <div id="detail-context">
                <h1 id="tenpho">${data[i].Ten}</h1>
                <div style="background: url(../Final-Project/img/${i}${i + 1}.jpg); "></div>
                <h3>${data[i].Description}<h3>
                <h3>Lịch Sử</h3>
                <p>${data[i].LichSu}</p>
                <h3>Câu Chuyện</h3>
                <p>${data[i].CauChuyen}</p>
                <h3>Di Tích</h3>
                <p>${data[i].DiTich}</p>
                </div>
            </div>
            `

            content2.insertAdjacentHTML('beforeend', detailContent);
        });
    }
}

async function renderData() {
    var content = document.getElementById('content');
    content.innerHTML = '';
    // console.log(content);
    const api = await fetch('http://5e11d6ce84b3db0014976623.mockapi.io/PhoCo');
    const data = await api.json();

    for (let i = 0; i < data.length; i++) {
        let detail = `  <div class='items'>
                            <a style="margin-top:25px" :hover><img class="imagedropshadow" src="../Final-Project-master/img/${i}.jpg" width="300px" height="300px"></a>
                            <h2 id='name'>${data[i].Ten}</h2>
                        </div>
                        `;


        content.insertAdjacentHTML('beforeend', detail);
    }
    detail();
}
renderData();

