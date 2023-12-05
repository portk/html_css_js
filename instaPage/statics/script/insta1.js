function login() {
    let link = '../pages/insta2.html'
    location.href=link;
}

function facebook() {
    let link =  'http://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Dko_KR%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%25221quhweo7fzhp5197b1pz1d6d4o5hasneu8zog1s1u14kch1dq5r1p%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Ddf339f58-7aa0-4ca9-b5b0-090b611ccc0e%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25221quhweo7fzhp5197b1pz1d6d4o5hasneu8zog1s1u14kch1dq5r1p%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=ko_KR&pl_dbl=0'
    location.href=link;
}

function sequence() {
    let seq = 1;
    return function() {
        seq++;
        if (seq > 4) {
            seq -= 4;
        }
        return seq;
    };
}

function imageChanger() {
    const num = seq();
    let page = `../statics/images/screenshot${num}.png`;
    image.style.backgroundImage = `url(${page})`;
}

const image = document.getElementById('mobile');
const seq = sequence();

setInterval(imageChanger, 5000);