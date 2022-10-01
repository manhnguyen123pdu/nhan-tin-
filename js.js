class moble {
    pin;
    draf;
    inbox;
    sent;
    constructor(pin, draf, inbox, sent) {
        this.pin = 100;
        this.draf = "";
        this.inbox = [];
        this.sent = []

    }
    write(nd) {
        this.draf = nd;
    }
    sentib(mobile) {
        this.sent.push(this.draf);
        mobile.inbox.push(this.draf);
        this.draf = "";
        this.pin--;
    }
}
dta = new moble;
dtb = new moble


function dtasent() {
    let nd = document.querySelector('#dtaa').value;
    dta.write(nd);
    dta.sentib(dtb);
    them('.dta', dta,'#dtaa')
    hienthi2('.dtb', dtb)
}
function dtbsent() {
    let nd = document.querySelector('#dtbb').value;
    dtb.write(nd);
    dtb.sentib(dta);
    them('.dtb', dtb,'#dtbb')
    hienthi2('.dta', dta)
}

function them(id, dt,reset) {
    let ele = document.querySelector(id);
    let thep = document.createElement('p');
    thep.innerHTML = dt.sent[dt.sent.length - 1];
    ele.appendChild(thep)
    document.querySelector(reset).value=""

}


function hienthi(id, dt) {
    let ele = document.querySelector(id);
    for (i = 0; i < dt.inbox.length; i++) {
        let thep = document.createElement('p')
        thep.innerHTML = dt.inbox[i]
        ele.appendChild(thep)
    }
}
function hienthi2(id, dt) {
    let ele = document.querySelector(id);
    let thep = document.createElement('span')
    thep.innerHTML = dt.inbox[dt.inbox.length - 1];
    ele.appendChild(thep)
}

hienthi('.dta', dta)
hienthi('.dtb', dtb)